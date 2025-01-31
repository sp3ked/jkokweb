import React, { useEffect, useState, useRef, useMemo } from "react";
import { Search, Chrome, Terminal, Volume2, Wifi, Battery, MonitorUp, Folder, FileText, Globe } from "lucide-react";
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
  const [terminals, setTerminals] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const terminalRefs = useRef({});
  const [currentTime, setCurrentTime] = useState(new Date());

  const initialCommands = useMemo(() => [
    [
      "C:\\>systeminfo",
      "HOST NAME:                 DESKTOP-USER",
      "OS NAME:                   Microsoft Windows 11 Pro",
      "OS VERSION:                10.0.22621 N/A Build 22621",
      "OS MANUFACTURER:           Microsoft Corporation",
      "SYSTEM TYPE:               x64-based PC",
      "PROCESSORS:                12th Gen Intel(R) Core(TM) i7-12700K",
      "BIOS VERSION:              American Megatrends Inc. 2.14.1234",
      "TOTAL PHYSICAL MEMORY:     32,768 MB",
      "AVAILABLE PHYSICAL MEMORY: 24,532 MB",
      "VIRTUAL MEMORY: MAX SIZE:  37,520 MB",
      "VIRTUAL MEMORY: AVAILABLE: 28,432 MB",
      "VIRTUAL MEMORY: IN USE:    9,088 MB",
      "Initializing system check..."
    ],
    [
      "C:\\>netstat -an | findstr ESTABLISHED",
      "Active Connections",
      "  Proto  Local Address          Foreign Address        State",
      "  TCP    192.168.1.5:49223     142.251.16.188:443    ESTABLISHED",
      "  TCP    192.168.1.5:49224     142.251.16.189:443    ESTABLISHED",
      "  TCP    192.168.1.5:49225     142.251.16.190:443    ESTABLISHED",
      "  TCP    192.168.1.5:49226     142.251.16.191:443    ESTABLISHED",
      "Network scan complete. Running security check..."
    ],
    [
      "C:\\>ping -n 4 8.8.8.8",
      "Pinging 8.8.8.8 with 32 bytes of data:",
      "Reply from 8.8.8.8: bytes=32 time=12ms TTL=118",
      "Reply from 8.8.8.8: bytes=32 time=11ms TTL=118",
      "Reply from 8.8.8.8: bytes=32 time=13ms TTL=118",
      "Reply from 8.8.8.8: bytes=32 time=12ms TTL=118",
      "",
      "Ping statistics for 8.8.8.8:",
      "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
      "Round Trip Times:",
      "    Minimum = 11ms, Maximum = 13ms, Average = 12ms"
    ]
  ], []);

  const randomCommands = useMemo(() => [
    "Scanning system files...",
    "Checking registry entries...",
    "Verifying system integrity...",
    "Loading kernel modules...",
    "Initializing drivers...",
    "Checking memory allocation...",
    "Loading system resources...",
    "Verifying network protocols...",
    "Running security checks...",
    "Loading user profiles...",
    "Checking file permissions...",
    "Initializing system services...",
  ], []);

  // Auto-scroll function
  const scrollToBottom = (id) => {
    if (terminalRefs.current[id]) {
      const element = terminalRefs.current[id];
      element.scrollTop = element.scrollHeight;
    }
  };

  // Initial terminals and loading sequence
  useEffect(() => {
    const phases = [
      // Phase 1: First three terminals
      () => {
        const createTerminal = (index) => {
          setTerminals(prev => [...prev, {
            id: index,
            position: { left: `${10 + (index * 5)}%`, top: `${10 + (index * 5)}%` },
            text: [],
            zIndex: index + 1
          }]);

          let lineIndex = 0;
          const typeInterval = setInterval(() => {
            if (lineIndex < initialCommands[index].length) {
              setTerminals(prev => prev.map(term => 
                term.id === index 
                  ? { ...term, text: [...term.text, initialCommands[index][lineIndex]] }
                  : term
              ));
              lineIndex++;
              scrollToBottom(index);
            } else {
              clearInterval(typeInterval);
              if (index < 2) {
                setTimeout(() => createTerminal(index + 1), 200);
              } else {
                setTimeout(() => startLoading(), 200);
              }
            }
          }, 20); 
        };

        setTimeout(() => createTerminal(0), 1); 
      },

      // Phase 2: Loading terminal with simultaneous chaos
      () => {
        const loadingTerminal = {
          id: 3,
          position: { left: '25%', top: '25%' },
          text: ["C:\\>Starting system initialization..."],
          zIndex: 4
        };
        setTerminals(prev => [...prev, loadingTerminal]);

        let chaosStarted = false;
        const loadingInterval = setInterval(() => {
          setLoadingProgress(prev => {
            const newProgress = prev + 1;
            
            // Start chaos terminals when loading reaches 30%
            if (newProgress >= 30 && !chaosStarted) {
              chaosStarted = true;
              startChaos();
            }
            
            // Complete sequence when loading reaches 100%
            if (newProgress >= 100) {
              clearInterval(loadingInterval);
              setTimeout(onComplete, 100); // Quicker transition to website
              return 100;
            }
            return newProgress;
          });
        }, 20); // Faster loading progress
      },

      // Phase 3: Chaos terminals (now runs during loading)
      () => {
        let chaosCount = 0;
        const maxChaos = 15; // Increased number of chaos terminals

        const createChaosTerminal = () => {
          if (chaosCount >= maxChaos) {
            setTimeout(onComplete, 1000);
            return;
          }

          const terminal = {
            id: 4 + chaosCount,
            position: {
              left: `${Math.random() * 60}%`,
              top: `${Math.random() * 60}%`
            },
            text: [],
            zIndex: 5 + chaosCount
          };

          setTerminals(prev => [...prev, terminal]);

          let messageCount = 0;
          const spamInterval = setInterval(() => {
            if (messageCount < 20) {
              const randomMessage = randomCommands[Math.floor(Math.random() * randomCommands.length)];
              setTerminals(prev => prev.map(term => 
                term.id === terminal.id 
                  ? { ...term, text: [...term.text, randomMessage] }
                  : term
              ));
              scrollToBottom(terminal.id);
              messageCount++;
            } else {
              clearInterval(spamInterval);
            }
          }, 20); // Faster text updates in chaos terminals

          chaosCount++;
          if (chaosCount < maxChaos) {
            // Faster spawn rate for chaos effect
            setTimeout(createChaosTerminal, 50); // Much faster chaos terminal creation
          }
        };

        createChaosTerminal();
      }
    ];

    const startLoading = () => {
      phases[1]();
    };

    const startChaos = () => {
      phases[2]();
    };

    // Start the sequence
    phases[0]();
  }, [initialCommands, randomCommands, onComplete]);

  // Add time update effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="windows-container">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div className="desktop-icon">
          <Folder size={32} color="#fff" />
          <span>Documents</span>
        </div>
        <div className="desktop-icon">
          <FileText size={32} color="#fff" />
          <span>Notes</span>
        </div>
        <div className="desktop-icon">
          <Globe size={32} color="#fff" />
          <span>Browser</span>
        </div>
      </div>

      {/* Terminals */}
      {terminals.map(term => (
        <div 
          key={term.id}
          className="terminal-window"
          style={{ 
            left: term.position.left, 
            top: term.position.top,
            zIndex: term.zIndex
          }}
        >
          <div className="terminal-titlebar">
            <div className="titlebar-left">
              <Terminal className="terminal-icon" />
              <span>Command Prompt</span>
            </div>
            <div className="window-controls">
              <button>─</button>
              <button>□</button>
              <button>×</button>
            </div>
          </div>
          <pre 
            className="terminal-content"
            ref={el => terminalRefs.current[term.id] = el}
          >
            {term.text.map((line, i) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}
            {term.id === 3 && loadingProgress > 0 && (
              <div className="loading-bar">
                Progress: [{Array(Math.floor(loadingProgress/2)).fill('=').join('')}
                {Array(50 - Math.floor(loadingProgress/2)).fill(' ').join('')}] {loadingProgress}%
              </div>
            )}
          </pre>
        </div>
      ))}

      {/* Windows Taskbar */}
      <div className="windows-taskbar">
        <button className="start-button">
          <MonitorUp />
        </button>
        <div className="search-bar">
          <Search />
          <span>Type here to search</span>
        </div>
        <div className="taskbar-icons">
          <button><Chrome /></button>
          <button><Terminal /></button>
        </div>
        <div className="system-tray">
          <button><Volume2 /></button>
          <button><Wifi /></button>
          <button><Battery /></button>
          <div className="time">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;