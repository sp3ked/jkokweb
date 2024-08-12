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

function Langnav() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let position = 0;
    const speed = 0.08;

    const scroll = () => {
      position -= speed;
      if (position <= -marquee.offsetWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="language-marquee-container">
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
