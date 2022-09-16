import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Sign-in/Sign-in";
import SignUp from "./Sign-up/Sign-up";
import Data from "./Data/Data";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}
