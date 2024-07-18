import React from 'react';
import './projectDetails.css';
import scout1 from '../images/scout1.jpg';
import scout2 from '../images/scout2.jpg';
import scout3 from '../images/scout3.jpg';
import scout4 from '../images/scout4.jpg';

function Scout() {
  const images = [scout1, scout2, scout3, scout4];

  return (
    <div className="fullProjectContainer">
      <div className="fullProjectDetails">
        <a href="/projects" className="backButton">back</a>
        <h1>Scout - Shopping and Selling App</h1>
        <div className="marqueeContainer">
          <div className="marquee">
            {[...images, ...images].map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Scout App ${(index % 4) + 1}`} 
                className="marqueeImage"
              />
            ))}
          </div>
        </div>
        <div className="projectContent">
          <p className="projectDetailsText">
            <strong>Description:</strong><br/>
          Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes advanced scanning technology to recognize items and compare prices across 100+ retailers. Additionally, Scout features an automated selling tool that creates and uploads listings to eBay within seconds.<br/><br/>
          
          <strong>Technical Specifications:</strong><br/>
          <strong>Platform:</strong> React Native<br/>
          Developed using React Native to ensure a seamless cross-platform experience on both iOS and Android devices.<br/>
          <strong>Item Recognition:</strong> Google Lens<br/>
          Integrated with Google Lens for accurate and efficient item recognition through image scanning.<br/>
          <strong>Price Comparison:</strong><br/>
          Aggregates price data from over 100 retailers, providing users with comprehensive price comparisons for scanned items.<br/>
          <strong>Automated Selling:</strong><br/>
          Features an automated listing creation tool that generates eBay listings from user-uploaded images.<br/>
          Connects to eBay via OAuth for secure authentication and data transfer.<br/>
          <strong>State Management:</strong><br/>
          Uses React hooks such as useState, useEffect, and useCallback for managing component state and side effects.<br/>
          <strong>Navigation:</strong><br/>
          Utilizes @react-navigation/native and expo-router for seamless navigation within the app.<br/>
          <strong>Theming:</strong><br/>
          Supports dark and light modes using useColorScheme and conditional styling.<br/>
          <strong>Splash Screen:</strong><br/>
          Prevents the splash screen from auto-hiding using expo-splash-screen until assets are loaded.<br/>
          <strong>Data Storage:</strong><br/>
          Uses AsyncStorage for local data persistence, such as storing scanned items and user settings.<br/>
          <strong>UUID Generation:</strong><br/>
          Generates unique device identifiers using expo-crypto.<br/><br/>
          
          <strong>Key Features:</strong><br/>
          Scan and Compare: Instantly scan items to see price differences across multiple retailers.<br/>
          Effortless Lists: Simplifies the creation of shopping lists with a quick scan-and-save feature.<br/>
          Quick Listings: Automates the process of creating and uploading eBay listings, reducing the time to under 30 seconds.<br/><br/>
          
          <strong>Developer Contributions:</strong><br/>
          Led the development and integration of Google Lens for item recognition.<br/>
          Implemented OAuth for secure eBay connectivity and automated listing functionality.<br/>
          Optimized the app for performance and user experience across both iOS and Android platforms.<br/>
          Developed custom components and styled using StyleSheet for a responsive and user-friendly interface.<br/>
          Managed state effectively using React hooks and ensured smooth navigation and transitions within the app.<br/>
          Ensured data persistence and retrieval using AsyncStorage for a seamless user experience.<br/><br/>
          
          <strong>Learning and Development:</strong><br/>
          Focused on mobile app development and frontend development for this app.<br/>
          Enhanced skills in React Native, state management, navigation, theming, and API integration.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Scout;
