import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MentionsLegales from './pages/MentionsLegales'
import GithubProfile from "./pages/GithubProfile";
import NotFound from "./pages/NotFound";
import NotFoundProfile from "./pages/NotFoundProfile"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionsLegales" element={<MentionsLegales />} />
            <Route path="/githubProfile" element={<GithubProfile />} />

            {/* Route ciblée par le navigate('/not-found') */}
            <Route path="/not-found" element={<NotFound />} />

            {/* Route universelle pour toutes les autres erreurs 404 */}
            <Route path="*" element={<NotFoundProfile />} />           
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;