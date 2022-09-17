import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-up/Sign-up";
import Context from "./contexts/UserContext";
import Payment from "./components/Payment/Payment";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState();

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
