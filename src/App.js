import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-up/Sign-up";
import Data from "./Data/Data";
import Context from "./contexts/UserContext";

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
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/data" element={<Data />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
