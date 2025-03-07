import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export const GiftContext = createContext();

const App = () => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftContext.Provider value={{ gifts, setGifts }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </GiftContext.Provider>
  );
};

export default App;
