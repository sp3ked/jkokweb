import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import unbolt from "../images/unbolt.png";
// import unbolt1 from "../images/unbolt1.png";
import unbolt2 from "../images/unbolt2.png";
import unbolt3 from "../images/unbolt3.png";
import unbolt4 from "../images/unbolt4.png";

function Unbolted() {
  const images = [unbolt, unbolt2, unbolt3, unbolt4];
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
        <h1>Unbolted - On-Demand GPU Computing</h1>
        <div className="marqueeContainer">
          <div className="marquee">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Unbolted Project ${(index % 3) + 1}`}
                className="marqueeImage"
              />
            ))}
          </div>
        </div>
        <div className="projectContent">
          <p className="projectDetailsText">
            <a
              href="https://github.com/brickhack-gpu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              --CLICK HERE TO SEE GITHUB REPO--
            </a>
            <br />
            <a
              href="https://devpost.com/software/unbolted"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              --CLICK HERE TO SEE DEVPOST SUBMISSION--
            </a>
            <br />
            (website was taken down to save money)
            <br />
            <br />
            <br />
            <strong>Description:</strong>
            <br />
            Unbolted provides instant access to a fleet of high-end GPUs
            purpose-made for using, tweaking, or even training AI models. It
            offers a simple interface for novice users, while still providing
            advanced control for power users. This project addresses the need
            for flexible, on-demand GPU computing without the burden of
            expensive hardware purchases or inflexible subscription models.
            <br />
            <br />
            <strong>Technical Specifications:</strong>
            <br />
            <strong>Backend:</strong> Golang
            <br />
            Webserver and manager written in Go for efficient performance.
            <br />
            <strong>Database:</strong> PostgreSQL with Bun ORM
            <br />
            Robust database solution for data management.
            <br />
            <strong>Frontend:</strong> Vite/React.js
            <br />
            Modern and responsive user interface.
            <br />
            <strong>Cloud Provider:</strong> GCP Compute Engine
            <br />
            Scalable cloud computing solution for GPU resources.
            <br />
            <br />
            <strong>Key Features:</strong>
            <br />
            On-demand GPU access: Instant access to high-end GPUs.
            <br />
            User-friendly interface: Simple for novices, advanced for power
            users.
            <br />
            Pay-per-use model: Users only pay for the computing power they
            consume.
            <br />
            <strong>Developer Contributions:</strong>
            <br />
            Focused primarily on frontend development using React.
            <br />
            First major React frontend project, gaining valuable experience.
            <br />
            Collaborated on building a functional MVP in 24 hours.
            <br />
            Implemented user interface components and integrated with backend
            services.
            <br />
            <br />
            <strong>Learning and Development:</strong>
            <br />
            Gained experience in React.js and frontend development.
            <br />
            Enhanced skills in working with cloud services and GPU computing.
            <br />
            Learned about containerization and deployment of web applications.
            <br />
            <br />
            <strong>Future Development:</strong>
            <br />
            Adding more template models and server options for increased
            flexibility.
            <br />
            Integrating several different global cloud providers for broader
            coverage.
            <br />
            Implementing real-time price comparison across providers for cost
            optimization.
            <br />
            Enhancing the user interface for an even more intuitive experience.
            <br />
            <br />
            <br />
            <br />
            <strong>Notes:</strong>
            <br />
            This project was built during a hackathon, demonstrating rapid
            prototyping and MVP development. The team overcame challenges
            related to being new to programming and hackathons, showcasing
            adaptability and quick learning. The project's success in creating a
            functional MVP in just 24 hours highlights the potential for future
            growth and refinement of the Unbolted platform.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Unbolted;
