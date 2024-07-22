import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ChannelPage from "./pages/ChannelPage";
import HomePage from "./pages/HomePage";
import StreamPage from "./pages/StreamPage";

const AppRoutes = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/stream/:id" element={<StreamPage />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
      </Routes>
      <Toaster />
    </div>
  </Router>
);

export default AppRoutes;
