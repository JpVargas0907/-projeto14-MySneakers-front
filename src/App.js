import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Sign-up/Sign-up";
import SignIn from "./components/Sign-in/Sign-in";
import Delivery from "./components/Data/Data";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}
