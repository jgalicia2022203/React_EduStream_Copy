import React, { useState } from "react";
import LoginForm from "./LoginForm";
import CustomModal from "./Modal";
import RegisterForm from "./RegisterForm";

const Navbar = ({ isAuthenticated, onLogout, onLogin }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500">
      <div className="text-white">EduStream</div>
      <div>
        {isAuthenticated ? (
          <>
            <span className="mr-4 text-white">
              Hello, {JSON.parse(localStorage.getItem("user")).username}
            </span>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-blue-500 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={openLoginModal}
              className="px-4 py-2 mr-2 text-blue-500 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={openRegisterModal}
              className="px-4 py-2 text-blue-500 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Register
            </button>
          </>
        )}
      </div>
      <CustomModal isOpen={isLoginOpen} onRequestClose={closeLoginModal}>
        <LoginForm
          onClose={() => {
            closeLoginModal();
            onLogin();
          }}
        />
      </CustomModal>
      <CustomModal isOpen={isRegisterOpen} onRequestClose={closeRegisterModal}>
        <RegisterForm
          onClose={() => {
            closeRegisterModal();
            onLogin();
          }}
        />
      </CustomModal>
    </nav>
  );
};

export default Navbar;
