import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* < */}
      </Routes>
    </BrowserRouter>
  );
};
