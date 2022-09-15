import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Sign-in/Sign-in";
import SignUp from "./Sing-up/Sign-up";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
