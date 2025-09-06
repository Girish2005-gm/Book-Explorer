import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
