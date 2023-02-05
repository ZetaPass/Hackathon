// Dependencies
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  Home,
  Events,
  Courses,
  Blogs,
  NotFound,
  Settings,
  Services,
  FAQ,
} from "./pages";

export default function App() {
  return (
    <>
      <div className="gradient ball-1"></div>
      <div className="gradient ball-2"></div>
      <div className="gradient ball-3"></div>
      <Sidebar />
      <main>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
