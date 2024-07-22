import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ChannelPage from "./pages/ChannelPage";
import HomePage from "./pages/HomePage";
import StreamPage from "./pages/StreamPage";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />
      <div className="flex w-full h-full">
        {isAuthenticated && <Sidebar />}
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/stream/:id" element={<StreamPage />} />
              <Route path="/channel/:id" element={<ChannelPage />} />
            </Route>
          </Routes>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
