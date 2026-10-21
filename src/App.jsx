import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./Pages/HomePage";
import ExperienceEducation from "./Pages/ExperienceEducation";
import Resume from "./Pages/resume";
import Scout from "./Pages/scout";
import Raspi from "./Pages/raspi";
import Bike from "./Pages/bike";
import Unbolted from "./Pages/unbolted";
import Tool from "./Pages/tools";
import NotFound from "./Pages/notfound";
import ContactPageSimple from "./Pages/contactpage";
import Admin from "./Pages/admin";
import Docu from "./Pages/docu";
import Meta from "./Pages/meta";
import LocalLens from "./Pages/LocalLens";
import Projects from "./Pages/projects";
import Cosmos from "./Pages/cosmos";
import Block from "./Pages/block";
import AILounge from "./Pages/AILounge";
import Trip from "./Pages/trip";
import Promptr from "./Pages/promptr";
import FreeMoney from "./Pages/FreeMoney";
import TruNorth from "./Pages/trunorth";
import PolyTerm from "./Pages/polyterm";
import YouVest from "./Pages/youvest";
import StakLabs from "./Pages/staklabs";
import Jaeger from "./Pages/jaeger";
import AgentTrust from "./Pages/agenttrust";
import Pyras from "./Pages/pyras";
import Veridex from "./Pages/veridex";
import MoreProject from "./Pages/moreProjects";
import Creou from "./Pages/creou";
import Ward from "./Pages/ward";
import PhoneFarm from "./Pages/phonefarm";
import CurrentSetup from "./Pages/CurrentSetup";
import BlogIndex from "./Pages/Blog/BlogIndex";
import BlogPost from "./Pages/Blog/BlogPost";
import Books from "./Pages/Books";
import BoilerBlockchain from "./Pages/BoilerBlockchain";
import Larp from "./Pages/Larp";
// import Langnav from "./Pages/langnav";
import ScrollRestoration from "./Pages/scrollToTop";
import "./App.css";

function AppContent() {
  // const [showIntro, setShowIntro] = useState(() => {
  //   // Check if this is the first visit
  //   const hasSeenIntro = localStorage.getItem('hasSeenIntro');
  //   return !hasSeenIntro;
  // });

  // useEffect(() => {
  //   // Check both the stored value and current path
  //   const hasSeenIntro = localStorage.getItem('hasSeenIntro');
  //   if (location.pathname === '/contactcard' || hasSeenIntro) {
  //     setShowIntro(false);
  //   }
  // }, [location.pathname]);

  // const handleIntroComplete = () => {
  //   setShowIntro(false);
  //   // Save that user has seen the intro
  //   localStorage.setItem('hasSeenIntro', 'true');
  // };

  return (
    <div className="app">
      {/* {showIntro && location.pathname !== '/contactcard' ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : ( */}
        <>
          <ScrollRestoration />
          {/* <Langnav /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperienceEducation />} />
            <Route path="/contactcard" element={<ContactPageSimple />} />
            <Route path="/setup" element={<CurrentSetup />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/trip" element={<Trip />} />
            <Route path="/projects/scout" element={<Scout />} />
            <Route path="/projects/raspi" element={<Raspi />} />
            <Route path="/projects/bike" element={<Bike />} />
            <Route path="/projects/unbolted" element={<Unbolted />} />
            <Route path="/projects/tools" element={<Tool />} />
            <Route path="/projects/docu" element={<Docu />} />
            <Route path="/projects/meta" element={<Meta />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/locallens" element={<LocalLens />} />
            <Route path="/projects/cosmos" element={<Cosmos />} />
            <Route path="/projects/block" element={<Block />} />
            <Route path="/projects/promptr" element={<Promptr />} />
            <Route path="/projects/trunorth" element={<TruNorth />} />
            <Route path="/projects/polyterm" element={<PolyTerm />} />
            <Route path="/projects/youvest" element={<YouVest />} />
            <Route path="/projects/staklabs" element={<StakLabs />} />
            <Route path="/projects/jaeger" element={<Jaeger />} />
            <Route path="/projects/agenttrust" element={<AgentTrust />} />
            <Route path="/projects/pyras" element={<Pyras />} />
            <Route path="/projects/veridex" element={<Veridex />} />
            <Route path="/projects/creou" element={<Creou />} />
            <Route path="/projects/ward" element={<Ward />} />
            <Route path="/projects/phonefarm" element={<PhoneFarm />} />
            <Route path="/projects/:id" element={<MoreProject />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/books" element={<Books />} />
            <Route path="/boilerblockchain" element={<BoilerBlockchain />} />
            <Route path="/larp" element={<Larp />} />
            <Route path="/ai" element={<AILounge />} />
            <Route path="/freemoney" element={<FreeMoney />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      {/* )} */}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
