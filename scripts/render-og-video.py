# /// script
# dependencies = ["pillow", "numpy"]
# ///
import subprocess
from pathlib import Path
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

REPO = str(Path(__file__).resolve().parent.parent)
OUT = sys.argv[1] if len(sys.argv) > 1 else f"{REPO}/public/jkok-og.mp4"
WIDTH, HEIGHT = 1200, 630
FPS, SECONDS = 30, 6
FRAMES = FPS * SECONDS
FONT_SIZE = 8
RAMP = " .,:;~=+*xoX%#&@"
SCRAMBLE = "01/\\|<>{}[]$#@%&*+=?!"
SUN = np.array([255, 194, 26], dtype=np.float32)
INK = np.array([236, 232, 222], dtype=np.float32)
FOCUS = (595, 250)  # the face

font = ImageFont.truetype(f"{REPO}/public/BerkeleyMono-Regular.ttf", FONT_SIZE)
cell_width = round(font.getlength("M"))
cell_height = round(FONT_SIZE * 1.25)
cols, rows = WIDTH // cell_width, HEIGHT // cell_height
offset_x = (WIDTH - cols * cell_width) // 2
offset_y = (HEIGHT - rows * cell_height) // 2

glyphs = sorted(set(RAMP + SCRAMBLE + "jkok.dev_"))
glyph_index = {char: i for i, char in enumerate(glyphs)}
atlas = np.zeros((len(glyphs), cell_height, cell_width), dtype=np.float32)
for i, char in enumerate(glyphs):
    tile = Image.new("L", (cell_width, cell_height))
    ImageDraw.Draw(tile).text((0, (cell_height - FONT_SIZE) // 2 - 1), char, font=font, fill=255)
    atlas[i] = np.clip(np.asarray(tile, dtype=np.float32) / 255 * 1.7, 0, 1)

source = Image.open(f"{REPO}/public/jkok-og.png").convert("L")
source = source.crop((offset_x, offset_y, offset_x + cols * cell_width, offset_y + rows * cell_height))
brightness = np.asarray(source.resize((cols, rows), Image.Resampling.BOX), dtype=np.float32) / 255
brightness = np.clip((brightness - 0.05) / (np.percentile(brightness, 99) - 0.05), 0, 1) ** 0.8

col_px = offset_x + (np.arange(cols) + 0.5) * cell_width
row_px = offset_y + (np.arange(rows) + 0.5) * cell_height
distance = np.hypot(col_px[None, :] - FOCUS[0], row_px[:, None] - FOCUS[1])
max_radius = np.hypot(WIDTH, HEIGHT) * 0.62
ring_width = 26.0

ramp_ids = np.array([glyph_index[c] for c in RAMP])
scramble_ids = np.array([glyph_index[c] for c in SCRAMBLE])
rng = np.random.default_rng(7)
label = "jkok.dev"


def render(frame):
    phase = frame / FRAMES
    wave = np.zeros_like(distance)
    for ring in (phase, (phase + 0.5) % 1):  # two rings half a loop apart keeps it seamless
        radius = ring * max_radius * 1.25 - ring_width * 2
        wave = np.maximum(wave, np.exp(-(((distance - radius) / ring_width) ** 2)))
    breathe = 0.92 + 0.08 * np.sin(2 * np.pi * (phase * 2 - distance / 900))
    level = np.clip(brightness * breathe + wave * 0.35 * (brightness > 0.05), 0, 1)

    ids = ramp_ids[np.minimum((level * len(RAMP)).astype(int), len(RAMP) - 1)]
    noise = rng.random((rows, cols))
    scrambled = (noise < wave * 0.6) & (brightness > 0.03)
    ids = np.where(scrambled, scramble_ids[rng.integers(0, len(scramble_ids), (rows, cols))], ids)
    dust = (noise > 0.9965) & (brightness < 0.05)
    ids = np.where(dust, glyph_index["."], ids)

    tint = np.clip(wave * 1.4, 0, 1)[..., None]
    color = INK * (1 - tint) + SUN * tint
    alpha = np.clip(level ** 1.1 * 2.2 + wave * 0.6, 0.06, 1)
    alpha = np.where(dust, 0.35, alpha)

    cursor_on = (frame // (FPS // 2)) % 2 == 0
    text = label + ("_" if cursor_on else " ")
    label_row, label_col = rows - 2, 2
    for i, char in enumerate(text):
        if char != " ":
            ids[label_row, label_col + i] = glyph_index[char]
        color[label_row, label_col + i] = SUN
        alpha[label_row, label_col + i] = 1.0 if char != " " else 0

    masks = atlas[ids] * alpha[..., None, None]
    pixels = masks[..., None] * color[:, :, None, None, :]
    canvas = np.zeros((HEIGHT, WIDTH, 3), dtype=np.float32)
    grid = pixels.transpose(0, 2, 1, 3, 4).reshape(rows * cell_height, cols * cell_width, 3)
    backing = np.repeat(np.repeat(level ** 1.2 * 60 + wave * 8, cell_height, 0), cell_width, 1)
    canvas[offset_y:offset_y + grid.shape[0], offset_x:offset_x + grid.shape[1]] = grid + backing[..., None]
    return np.clip(canvas + 8, 0, 255).astype(np.uint8)


encoder = subprocess.Popen(
    ["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
     "-s", f"{WIDTH}x{HEIGHT}", "-r", str(FPS), "-i", "-",
     "-c:v", "libx264", "-preset", "veryslow", "-crf", "26", "-pix_fmt", "yuv420p",
     "-movflags", "+faststart", "-an", OUT],
    stdin=subprocess.PIPE,
)
for frame in range(FRAMES):
    encoder.stdin.write(render(frame).tobytes())
encoder.stdin.close()
encoder.wait()
