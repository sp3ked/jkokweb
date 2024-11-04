import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import bike from "../images/bike.jpg";
import bike1 from "../images/bike1.png";
import bike2 from "../images/bike2.jpg";
import bike3 from "../images/bike3.jpg";
import bike4 from "../images/bike4.jpg";
import bike5 from "../images/bike5.jpg";

function Bike() {
  const images = [bike, bike1, bike2, bike3, bike4, bike5];
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
        <h1>Eletric Bike - Conversion Project</h1>
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
            <br></br>
            <strong>Define</strong>
            <br />
            Our process began with a problem that many students face on the
            Purdue Campus and likely on many other campuses, transportation.
            With large public schools, traveling on campus can be a very big
            challenge, especially when put on a time crunch. Just going from one
            side of campus to the gym at Purdue University is 1.2 miles, which
            can take upwards of 30 minutes to walk. In the fall and spring this
            walk can feel much longer as the wind on campus can work against
            you, especially if you are riding on a bike. With the wind, riding
            on a bike can be almost as fast as simply walking.
            <br />
            <br />
            <strong>Brainstorming</strong>
            <br />
            To tackle this problem we hope to convert a regular mode of personal
            transportation to its electric counterpart. This could mean
            converting a regular bike into an electric bike or a skateboard into
            an electric skateboard. While these solutions may already exist on
            the market, we hope to have this project be a multiphase project
            where electric conversion is only the first stage. We ended up
            choosing the bike approach as we already had a old bike to use and
            there were multiple phases we could pursue with it, each of which
            could be more advanced.
            <br />
            <br />
            <strong>Select</strong>
            <br />
            Our project began in a coffee shop where we brainstormed and
            sketched out our initial ideas, drawing inspiration from YouTube
            videos of similar builds. We knew that we did not want to use a
            simple hub motor that could quickly be attached to the back wheel as
            these motors add excessive weight and are not as efficient as a
            geared motor approach. With this we planned and drew out the design,
            particularly focusing on the frame that would support the motor
            (Insert Sketch).
            <br />
            <br />
            Next we looked into possible motors and motor controllers we could
            use and ended up going with Flipsky 190kV motor for its robustness
            and compatibility with the Flipsky 75100 motor controller, ensuring
            a high-performance and reliable speed control system. These two
            components are intended for electric skateboards but in this case we
            would be using them for a bike.
            <br />
            <br />
            We decided on using a multistage belt drive system where there would
            be two belt gear ratios that meshed together (add sketch). With this
            we needed to find the correct configuration of motor speed and gear
            ratios so that we could balance speed and torque. We also knew that
            we wanted to focus our design on items that we could readily use so
            that we did not need to over complicate our design.
            <br />
            <br />
            With this design criteria we decided that we would be using the
            bottle mounting system that comes on most bikes as a basis for the
            design. We also decided that our power supply would be a ryobi
            battery that could quickly be swapped for a new battery while the
            other one were to be charged. So to summarize we needed to have a
            ryobi battery power our motor which would then run two gear sets,
            one of which would be connected directly to the back wheel all while
            being based on the existing geometry of the bike.
            <br />
            <br />
            <strong>Build Process</strong>
            <br />
            When getting started on actually building we began with the
            electrical parts of it. At the start this was a challenge as both of
            us had very minimal knowledge when it came to circuits and vesc
            (Vedders Electronic Speed Controller which is used to control the
            motor controller from a computer). When actually starting this we
            first needed to get the motor working so we connected the motor
            controller to a drill battery and connected the motor to that, then
            using vesc we did the motor test which ended up working but also
            breaking our current sketchy setup.
            <br />
            <br />
            After we got this working we needed a way to use the motor
            independently of a computer, this done through the use of a
            throttle. After connecting the throttle to the controller and
            messing with the curve of the voltage it gave, we had it optimized
            to work with our setup. Now there was one piece left in the circuit
            which is the power. For this we printed a power tool battery holder
            that could be mounted to the bike's frame.
            <br />
            <br />
            Now moving onto the frame of the motor assembly we knew that we were
            going to use existing geometry which meant we needed to CAD the bike
            frame and its geometry. With some measurements we were able to
            create this model to base our design off of. We used the bike's
            bottle holder mounting holes and a friction clamp on the vertical
            post of the bike to create a casing for our motor mount. (Add
            sketch, cad, actual part, etc.)
            <br />
            <br />
            We then went ahead and prototyped this with a 3D printer to verify
            hole placements and assembly. While we did not get it to work in the
            first time around, we learned that our bike frame model was not
            accurate as we did not get the correct measurements the first time
            around. After fixing the digital twin of the bike frame, we were
            able to create the motor mount and attach the motor and the
            necessary belt gears.
            <br />
            <br />
            <strong>Manufacturing Challenges</strong>
            <br />
            After this stage we thought we were ready for a final product so we
            went to a local makerspace to get a ¼" aluminum sheet cut to the
            desired shape. Little did we know we would have many issues with
            this. Firstly we did not know how to generate the G code required to
            cut such a piece and we did not consider that the CNC we were going
            to use might not have been able to cut aluminum. With the help of
            Jim Hong of the Berks LaunchBox Makerspace we were able to get a
            piece that was made out of wood rather than aluminum. For our sake
            this was a good stepping stone as this would suffice for the time
            being until we were ready to finalize the rest of the design.
            <br />
            <br />
            <strong>Current Status and Future Plans</strong>
            <br />
            After this stage we went back to iterating through prototypes of the
            motor mount assembly until we found something that worked according
            to our requirements. We are now currently working on the design and
            integration of the back wheel assembly where we custom design a gear
            to fit to the back wheel. This has proven to be a challenge as the
            back wheel does not have many mounting points to work with,
            therefore making the task of designing something to fit here much
            harder.
            <br />
            <br />
            We are considering design a custom shaft collar that can go around
            the wheel's axle hole and mount the gear using that. Additionally,
            due to our manufacturing constraints we are breaking the back belt
            gear into six segments for the back gear so that we can 3D print the
            gears. If all goes well we may consider using Purdue's on campus
            innovation and design center to create a more rigid and structurally
            sound design.
            <br />
            <br />
            While we may not be done with this first phase quite yet, we do have
            plans for where we hope to take this. We hope to waterproof our
            system by creating a housing for the electronic components,
            therefore protecting them from the elements. We also hope to add
            additional features like gyroscope sensors, regenerative braking,
            variable belt ratios and much more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bike;
