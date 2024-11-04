import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import scout1 from "../images/scout1.jpg";
import scout2 from "../images/scout2.jpg";
import scout3 from "../images/scout3.jpg";
import scout4 from "../images/scout4.jpg";

function Scout() {
  const images = [scout1, scout2, scout3, scout4];
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="fullProjectContainer">
      <div className="fullProjectDetails">
      <Link to="/projects" className="backButton">
  back
</Link>
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
            <a
              href="https://github.com/scoutfinder/app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              --CLICK HERE TO SEE GITHUB REPO--
            </a>
            <br></br>
            <a
              href="https://apps.apple.com/us/app/scout-shop-sell-with-camera/id6502788045"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              --CLICK HERE FOR APP--
            </a>
            <br></br>
            <br></br>
            <strong>Description:</strong>
            <br />
            Scout is an innovative mobile application designed to revolutionize
            the way users shop and sell items. The app utilizes "google scan" to
            recognize items and compare prices across 100+ retailers.
            Additionally, Scout features an automated selling tool that creates
            and uploads listings to eBay within seconds.
            <br />
            <br />
            <strong>Technical Specifications:</strong>
            <br />
            <strong>Platform:</strong> React Native
            <br />
            Developed using React Native to ensure make it easy to make it
            cross-platform on both iOS and Android devices.
            <br />
            <strong>Item Recognition:</strong> Google Lens
            <br />
            We used a scraper in order to scrape the data from google lens and
            implement it into our app. This allowed for efficent and accrate
            scanning of items as you cant really beat googles datasets.
            <br />
            <strong>Price Comparison:</strong>
            <br />
            After scaning the scaper will filter though the results as their is
            alot of false results (things such as youtube and tiktok). After
            doing this it then grabs the price of every item sorts it and then
            displays to the user the cheapest retailer and the link to purchase
            that item.
            <br />
            <strong>Automated Selling:</strong>
            <br />
            Features an automated listing creation tool that generates eBay
            listings from user-uploaded images. Connects to eBay via OAuth for
            secure authentication and data transfer. By this we mean auto
            genorate everything like the description, catergory, etc. (This is
            not in the app but we had it working apple just get rejecting it for
            privacy violations)
            <br />
            <strong>Theming:</strong>
            <br />
            Dark and light modes theme and app icon changes based on which
            theme.
            <br />
            <strong>State Management:</strong> React Hooks
            <br />
            Utilizes React Hooks for efficient state management throughout the
            application, ensuring smooth data flow and component updates.
            <br />
            <strong>Data Persistence:</strong> AsyncStorage
            <br />
            Implements AsyncStorage for local data persistence, allowing users
            to store and retrieve scan history, favorites, and other app-related
            data across sessions.
            <br />
            <br />
            <strong>Key Features:</strong>
            <br />
            Scan and Compare: Instantly scan items to see price differences
            across multiple retailers.
            <br />
            Quick Listings: Automates the process of creating and uploading eBay
            listings, reducing the time to under 30 seconds.
            <br />
            Easy to Use: Simple and intuitive interface for a seamless user
            experience.
            <br />
            <br />
            <strong>Developer Contributions:</strong>
            <br />
            Helped Implement OAuth for secure eBay connectivity and automated
            listing functionality.
            <br />
            Developed custom components and styled using StyleSheet for a
            responsive and user-friendly interface.
            <br />
            Created the most of the frontend of the app, including many
            functionalitys like the favoring an item and deleteing an item.
            <br />
            <br />
            <strong>Learning and Development:</strong>
            <br />
            Focused on mobile app development and frontend development for this
            app.
            <br />
            Enhanced skills in React Native, theming, and useability (First
            Mobile Application).
            <br />
            <br />
            <br />
            <br />
            <strong>Comments:</strong> Currently working on getting it in the
            app store, a couple months after creation we noticed someone also
            doing this so we decided to dump this project... but it was a great
            learning expirence. You can find the app{" "}
            <a
              href="https://www.apple.com/app-store/scout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              here
            </a>{" "}
            if it is even approved for the app store
            <br />
            <br />
            Update: it is in the App Store click the link at the top
          </p>
        </div>
      </div>
    </div>
  );
}

export default Scout;
