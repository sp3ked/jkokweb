import { Link } from "react-router-dom";
import "./projectDetails.css";
import raspi1 from "../images/raspi1.jpg";
import raspi2 from "../images/raspi2.jpg";
import raspi3 from "../images/raspi3.jpg";
import raspi4 from "../images/raspi4.jpg";

function RaspberryPiGlasses() {
  const images = [raspi1, raspi2, raspi3, raspi4];

  return (
    <div className="fullProjectContainer">
      <div className="fullProjectDetails">
        <Link to="/" className="backButton">
          back
        </Link>
        <h1>Raspi - AI-Powered Smart Glasses</h1>
        <div className="marqueeContainer">
          <div className="marquee">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Raspberry Pi Glasses ${(index % 3) + 1}`}
                className="marqueeImage"
              />
            ))}
          </div>
        </div>
        <div className="projectContent">
          <p className="projectDetailsText">
            <strong>Description:</strong>
            <br />
            Using a Raspberry Pi, my brother and I created "smart" glasses that
            capture images, process them using the Inception v3 model, and
            display the predicted object on a screen. This project is based
            around the topics of computer vision, machine learning, and wearable
            technology.
            <br />
            <br />
            <strong>Technical Specifications:</strong>
            <br />
            <strong>Hardware:</strong> Raspberry Pi 4<br />
            Core processing unit responsible for image capture, processing, and
            display output.
            <br />
            <strong>Camera:</strong> Raspberry Pi Camera Module
            <br />
            Used for real-time image capture from the wearer's perspective.
            <br />
            <strong>Display:</strong> OLED Screen
            <br />
            Compact display for showing the text of the results to the user.
            <br />
            <strong>Machine Learning Model:</strong> Inception v3
            <br />
            Pre-trained model avaible on the Raspberry Pi used for object
            recognition in captured images.
            <br />
            <strong>Frame:</strong> 3D-printed Frame and case
            <br />
            Custom-designed frame to house all components used in the glasses
            <br />
            <br />
            <strong>Key Features:</strong>
            <br />
            Real-time Image Processing: Captures and processes images in
            real-time for immediate feedback.
            <br />
            Object Recognition: Utilizes Inception v3 for accurate
            identification of objects in the wearer's view.
            <br />
            Wearable Design: Yes you can wear it, is it comfortable and sleak...
            no.
            <br />
            <strong>Developer Contributions:</strong>
            <br />
            Designed and Printed the glasses and casing for the compontents.
            <br />
            Helped implement the image processing pipeline using Python.
            <br />
            Developed the interface between the camera module, processing unit,
            and OLED display.
            <br />
            Optimized power consumption and processing efficiency for extended
            use.
            <br />
            <br />
            <strong>Learning and Development:</strong>
            <br />
            Gained experience in hardware desgin and integration.
            <br />
            Enhanced skills in computer vision techniques and machine learning
            model deployment.
            <br />
            Learned about the challenges of design in wearable technology.
            <br />
            <br />
            <strong>Future Development:</strong>
            <br />
            Implementing more advanced computer vision models for improved
            accuracy.
            <br />
            Making it alot smaller and alot more lightweight. Also making it
            alot more sleak.
            <br />
            Improving it to be a battery power device as we didnt get to that.
            <br />
            <br />
            <br />
            <br />
            <strong>Notes:</strong>
            <br />I am currently working on a V2 Raspi Glasses and taking in all
            the tasks I set in the future dev section. I am excited to see where
            this project goes and how it can be improved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RaspberryPiGlasses;
