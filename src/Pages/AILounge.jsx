import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AILounge.css";

const AILounge = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [inputCommand, setInputCommand] = useState("");
  const [openaiKey, setOpenaiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(false);

  useEffect(() => {
    setTerminalOutput([
      { type: "system", content: "Terminal initialized." },
      {
        type: "system",
        content:
          'Welcome to the JKOK AI Lounge. Type "help" for available commands.',
      },
    ]);

    // Simulated visitor log entries
    const initialLogs = [
      {
        time: new Date().toISOString().replace("T", " ").substring(0, 19),
        message: "System initialized",
      },
      {
        time: new Date().toISOString().replace("T", " ").substring(0, 19),
        message: "AI Lounge v1.0.0 online",
      },
    ];

    setMessages(initialLogs);
  }, []);

  const commands = {
    about: {
      description: "About AI Lounge",
      action: () => ([
        { type: "system", content: "=== AI Lounge - Research & Development Hub ===" },
        { type: "system", content: "\nCurrent Active Research Areas:" },
        { type: "system", content: "1. Large Language Models" },
        { type: "system", content: "   - Prompt Engineering & Chain-of-Thought" },
        { type: "system", content: "   - Fine-tuning & Model Alignment" },
        { type: "system", content: "   - Context Window Optimization" },
        { type: "system", content: "\n2. Computer Vision" },
        { type: "system", content: "   - Real-time Object Detection" },
        { type: "system", content: "   - Smart Glasses Implementation" },
        { type: "system", content: "   - Scene Understanding" },
        { type: "system", content: "\n3. AI Agents" },
        { type: "system", content: "   - Autonomous Decision Making" },
        { type: "system", content: "   - Multi-Agent Systems" },
        { type: "system", content: "   - Task Planning & Execution" },
        { type: "system", content: "\nActive Projects:" },
        { type: "system", content: "- Scout: Computer Vision for Product Recognition" },
        { type: "system", content: "- Docu: Document Analysis & Understanding" },
        { type: "system", content: "- Trippian: Multi-Agent Travel Planning" },
        { type: "system", content: "- Promptr: LLM Interaction Framework" },
        { type: "system", content: "\nTechnology Stack:" },
        { type: "system", content: "- OpenAI GPT-4 & GPT-3.5" },
        { type: "system", content: "- TensorFlow & PyTorch" },
        { type: "system", content: "- LangChain & AutoGPT" },
        { type: "system", content: "- Custom Agent Frameworks" },
      ])
    },
    help: {
      description: "Show available commands",
      action: () => ([
        { type: "system", content: "Available commands:" },
        { type: "system", content: "help   - Show this help message" },
        { type: "system", content: "clear  - Clear terminal" },
        { type: "system", content: "about  - View AI research areas and tech stack" },
      ])
    },
    clear: {
      description: "Clear terminal",
      action: () => {
        setTerminalOutput([{ type: "system", content: "Terminal cleared." }]);
        return [];
      }
    },
    models: {
      description: "List AI models",
      action: () => ([
        { type: "system", content: "Available AI Models:" },
        { type: "system", content: "- GPT-4 (Latest)" },
        { type: "system", content: "- GPT-3.5-Turbo" },
        { type: "system", content: "- Claude 2.1" },
        { type: "system", content: "- Gemini Pro" },
        { type: "system", content: "- Local Models (Coming soon)" },
      ])
    },
    setkey: {
      description: "Set OpenAI API key",
      action: () => {
        setShowApiInput(true);
        return [{ type: "system", content: "Enter your OpenAI API key:" }];
      }
    },
    status: {
      description: "System status",
      action: () => ([
        { type: "system", content: "System Status:" },
        { type: "system", content: `API Key: ${openaiKey ? "Configured" : "Not Set"}` },
        { type: "system", content: `Active Models: ${openaiKey ? "All" : "Limited"}` },
        { type: "system", content: "System Load: Normal" },
        { type: "system", content: "Connection: Active" },
      ])
    }
  };

  const handleInputChange = (e) => {
    setInputCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    if (!inputCommand.trim()) return;

    const newOutput = [
      ...terminalOutput,
      { type: "user", content: `> ${inputCommand}` }
    ];

    const command = inputCommand.toLowerCase().trim();

    if (commands[command]) {
      const result = commands[command].action();
      newOutput.push(...result);
    } else {
      newOutput.push({ type: "error", content: `Command not recognized: ${inputCommand}` });
    }

    setTerminalOutput(newOutput);
    setInputCommand("");

    const now = new Date();
    const timeStr = now.toISOString().replace("T", " ").substring(0, 19);
    setMessages([
      ...messages,
      { time: timeStr, message: `User executed: ${command}` }
    ]);
  };

  const handleApiKeySubmit = (key) => {
    setOpenaiKey(key);
    setShowApiInput(false);
    setTerminalOutput(prev => [
      ...prev,
      { type: "success", content: "API key configured successfully!" }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const timeStr = now.toISOString().replace("T", " ").substring(0, 19);

    setMessages([
      ...messages,
      {
        time: timeStr,
        message: `New message from ${name || "Anonymous"}`,
      },
    ]);

    setTerminalOutput([
      ...terminalOutput,
      {
        type: "system",
        content: "Message received. Thank you for your feedback.",
      },
    ]);

    // In a real application, we would send this data to a server
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="ai-lounge-container">
      <Link to="/" className="back-button">
        &lt; Back to Homepage
      </Link>

      <div className="terminal">
        <div className="header">=== AI LOUNGE ACCESS TERMINAL ===</div>

        <div className="ascii-art">
          {`
      _    _        ___  _   _ _   _  ____ _____ 
     / \\  (_)     / _ \\| | | | \\ | |/ ___| ____|
    / _ \\ | |_   | | | | | | |  \\| | |  _|  _|  
   / ___ \\| | |  | |_| | |_| | |\\  | |_| | |___ 
  /_/   \\_\\_|    \\___/ \\___/|_| \\_|\\____|_____|
                                                
          `}
        </div>

        <div className="section">
          <p>
            > Welcome to the AI Lounge - Exploring the frontiers of artificial
            intelligence
          </p>
          <p>
            > Current system status: <span className="blink">ONLINE</span>
          </p>
          <p>> Terminal ready for input</p>
        </div>

        <div className="section">
          <div className="terminal-output">
            {terminalOutput.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.content}
                {line.type === "system" && line.content.includes("Enter your OpenAI API key:") && showApiInput && (
                  <input
                    type="password"
                    placeholder="sk-..."
                    className="api-key-input"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleApiKeySubmit(e.target.value);
                      }
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommandSubmit} className="command-form">
            <div className="command-prompt">
              <span>AI-TERM $ </span>
              <input
                type="text"
                value={inputCommand}
                onChange={handleInputChange}
                autoFocus
                className="command-input"
                placeholder="Type a command..."
              />
            </div>
          </form>
        </div>

        <div className="section">
          <p>> AI research highlights:</p>
          <p>
            - Large Language Models: advances in understanding context and
            generation
          </p>
          <p>
            - Neural Networks: innovations in architecture and training
            methodologies
          </p>
          <p>
            - AI Ethics: developing frameworks for responsible AI deployment
          </p>
        </div>

        <div className="contact-form">
          <p>> Leave a message in the system:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <div className="section">
          <p>> System log:</p>
          <div className="visitor-log">
            {messages.map((entry, index) => (
              <div key={index}>
                [{entry.time}] {entry.message}
              </div>
            ))}
          </div>
        </div>

        <p className="blink">> _</p>
      </div>
    </div>
  );
};

export default AILounge;
