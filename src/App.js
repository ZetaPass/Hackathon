import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const action = useNavigationType(); // Returns PUSH, POP, or REPLACE
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") { // Prevents scroll to top on browser back button
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cover":
        title = "Space";
        metaDescription = "Space app";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
    </Routes>
  );
}
export default App;
