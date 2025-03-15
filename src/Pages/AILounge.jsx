import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AILounge.css';

const AILounge = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [inputCommand, setInputCommand] = useState('');

  useEffect(() => {
    // Initialize terminal with welcome message
    setTerminalOutput([
      { type: 'system', content: 'Terminal initialized.' },
      { type: 'system', content: 'Welcome to the JKOK AI Lounge. Type "help" for available commands.' },
    ]);

    // Simulated visitor log entries
    const initialLogs = [
      { time: new Date().toISOString().replace('T', ' ').substring(0, 19), message: 'System initialized' },
      { time: new Date().toISOString().replace('T', ' ').substring(0, 19), message: 'AI Lounge v1.0.0 online' },
    ];
    
    setMessages(initialLogs);
  }, []);

  const handleInputChange = (e) => {
    setInputCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    
    if (!inputCommand.trim()) return;
    
    // Add user command to terminal
    const newOutput = [...terminalOutput, { type: 'user', content: `> ${inputCommand}` }];
    
    // Process command
    const command = inputCommand.toLowerCase().trim();
    
    if (command === 'help') {
      newOutput.push({ type: 'system', content: 'Available commands: help, clear, about, projects, contact' });
    } else if (command === 'clear') {
      setTerminalOutput([{ type: 'system', content: 'Terminal cleared.' }]);
      setInputCommand('');
      return;
    } else if (command === 'about') {
      newOutput.push({ type: 'system', content: 'AI Lounge - A space for exploring AI concepts and projects.' });
      newOutput.push({ type: 'system', content: 'This terminal provides access to information about AI research and applications.' });
    } else if (command === 'projects') {
      newOutput.push({ type: 'system', content: 'Current AI projects:' });
      newOutput.push({ type: 'system', content: '- Natural language processing research' });
      newOutput.push({ type: 'system', content: '- Computer vision implementations' });
      newOutput.push({ type: 'system', content: '- Reinforcement learning experiments' });
    } else if (command === 'contact') {
      newOutput.push({ type: 'system', content: 'Scroll down to use the contact form or visit /contact' });
    } else {
      newOutput.push({ type: 'error', content: `Command not recognized: ${inputCommand}` });
    }
    
    setTerminalOutput(newOutput);
    setInputCommand('');
    
    // Log interaction
    const now = new Date();
    const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
    setMessages([...messages, {
      time: timeStr,
      message: `User executed: ${command}`
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
    
    setMessages([...messages, {
      time: timeStr,
      message: `New message from ${name || 'Anonymous'}`
    }]);
    
    setTerminalOutput([
      ...terminalOutput,
      { type: 'system', content: 'Message received. Thank you for your feedback.' }
    ]);
    
    // In a real application, we would send this data to a server
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="ai-lounge-container">
      <Link to="/" className="back-button">&lt; Back to Homepage</Link>
      
      <div className="terminal">
        <div className="header">
          === AI LOUNGE ACCESS TERMINAL ===
        </div>
        
        <div className="ascii-art">
          {`
      _    _     _      ___  _   _ _   _  ____ _____ 
     / \\  (_)   | |    / _ \\| | | | \\ | |/ ___| ____|
    / _ \\ | |_  | |   | | | | | | |  \\| | |  _|  _|  
   / ___ \\| | |_| |   | |_| | |_| | |\\  | |_| | |___ 
  /_/   \\_\\_|\\___/     \\___/ \\___/|_| \\_|\\____|_____|
                                                
          `}
        </div>
        
        <div className="section">
          <p>> Welcome to the AI Lounge - Exploring the frontiers of artificial intelligence</p>
          <p>> Current system status: <span className="blink">ONLINE</span></p>
          <p>> Terminal ready for input</p>
        </div>
        
        <div className="section">
          <div className="terminal-output">
            {terminalOutput.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.content}
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
          <p>- Large Language Models: advances in understanding context and generation</p>
          <p>- Neural Networks: innovations in architecture and training methodologies</p>
          <p>- AI Ethics: developing frameworks for responsible AI deployment</p>
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
              <div key={index}>[{entry.time}] {entry.message}</div>
            ))}
          </div>
        </div>
        
        <p className="blink">> _</p>
      </div>
    </div>
  );
};

export default AILounge;
