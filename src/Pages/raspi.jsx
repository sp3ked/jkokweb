import React from 'react';
import './projectDetails.css';
import raspi1 from '../images/raspi1.jpg';
import raspi2 from '../images/raspi2.jpg';
import raspi3 from '../images/raspi3.jpg';
import raspi4 from '../images/raspi4.jpg';

function RaspberryPiGlasses() {
  const images = [raspi1, raspi2, raspi3, raspi4];

  return (
    <div className="fullProjectContainer">
      <div className="fullProjectDetails">
        <a href="/projects" className="backButton">back</a>
        <h1>Raspi - AI-Powered Smart Glasses</h1>
        <div className="marqueeContainer">
          <div className="marquee">
            {[...images, ...images].map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Raspberry Pi Glasses ${index % 3 + 1}`} 
                className="marqueeImage"
              />
            ))}
          </div>
        </div>
        <div className="projectContent">
        <p>
          <strong>Description:</strong><br/>
          Using a Raspberry Pi, my brother and I created smart glasses that capture images, process them using the Inception v3 model, and display the predicted object on a screen. This innovative project combines computer vision, machine learning, and wearable technology.<br/><br/>

          <strong>Technical Specifications:</strong><br/>
          <strong>Hardware:</strong> Raspberry Pi 4<br/>
          Core processing unit responsible for image capture, processing, and display output.<br/>
          <strong>Camera:</strong> Raspberry Pi Camera Module<br/>
          Used for real-time image capture from the wearer's perspective.<br/>
          <strong>Display:</strong> OLED Screen<br/>
          Compact display for showing recognition results to the user.<br/>
          <strong>Machine Learning Model:</strong> Inception v3<br/>
          Pre-trained model used for object recognition in captured images.<br/>
          <strong>Programming Language:</strong> Python<br/>
          Used for the image processing pipeline and interfacing with hardware components.<br/>
          <strong>Machine Learning Framework:</strong> TensorFlow Lite<br/>
          Optimized for efficient model inference on the Raspberry Pi.<br/>
          <strong>Frame:</strong> 3D-printed<br/>
          Custom-designed frame to house all components in a wearable form factor.<br/><br/>

          <strong>Key Features:</strong><br/>
          Real-time Image Processing: Captures and processes images in real-time for immediate feedback.<br/>
          Object Recognition: Utilizes Inception v3 for accurate identification of objects in the wearer's view.<br/>
          Wearable Design: Compact and lightweight design for comfortable everyday use.<br/>
          Low-latency Processing: Optimized for quick response times to enhance user experience.<br/>
          Customizable Display: Flexible output options to suit user preferences.<br/><br/>

          <strong>Developer Contributions:</strong><br/>
          Designed and implemented the image processing pipeline using Python.<br/>
          Integrated the Inception v3 model with TensorFlow Lite for efficient inference on Raspberry Pi.<br/>
          Developed the interface between the camera module, processing unit, and OLED display.<br/>
          Created a custom 3D-printed frame design to house all components effectively.<br/>
          Optimized power consumption and processing efficiency for extended use.<br/>
          Implemented a user-friendly interface for controlling the glasses and viewing results.<br/><br/>

          <strong>Learning and Development:</strong><br/>
          Gained extensive experience in embedded systems programming and hardware integration.<br/>
          Enhanced skills in computer vision techniques and machine learning model deployment on edge devices.<br/>
          Developed proficiency in optimizing ML models for resource-constrained environments.<br/>
          Learned about ergonomics and design considerations for wearable technology.<br/><br/>

          <strong>Future Development:</strong><br/>
          Implementing more advanced computer vision models for improved accuracy.<br/>
          Adding augmented reality features to enhance the user experience.<br/>
          Improving battery life and overall energy efficiency.<br/>
          Exploring potential applications in assistive technology and industrial use cases.<br/>
          Investigating the integration of natural language processing for voice commands and feedback.
        </p>
        </div>
      </div>
    </div>
  );
}

export default RaspberryPiGlasses;