import React, { useEffect, useRef } from "react";
import "./langnav.css";

const languages = [
  'print("Hello, World!")', // Python
  'console.log("Hello, World!");', // JavaScript
  'System.out.println("Hello, World!");', // Java
  'printf("Hello, World!");', // C
  'std::cout << "Hello, World!";', // C++
  'puts "Hello, World!"', // Ruby
  'echo "Hello, World!";', // PHP
  'fmt.Println("Hello, World!")', // Go
  'Console.WriteLine("Hello, World!");', // C#
  'println!("Hello, World!");', // Rust
];

function Langnav({ isAnimationDisabled }) {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let position = 0;
    const speed = 1;

    const scroll = () => {
      if (!isAnimationDisabled) {
        position -= speed;
        if (position <= -marquee.offsetWidth / 2) {
          position = 0;
        }
        marquee.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    if (!isAnimationDisabled) {
      animationRef.current = requestAnimationFrame(scroll);
    } else {
      marquee.style.transform = 'translateX(0px)';
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimationDisabled]);

  return (
    <div className={`language-marquee-container ${isAnimationDisabled ? 'animations-disabled' : ''}`}>
      <div className="language-marquee" ref={marqueeRef}>
        {languages.concat(languages).map((code, index) => (
          <span key={index} className="language-item">
            {code}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Langnav;