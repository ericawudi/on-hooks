import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./pages/Home";
import { OnUseContext } from "./pages/OnUseContext";
import { OnUseEffect } from "./pages/OnUseEffect";
import { OnUseReducer } from "./pages/OnUseReducer";
import { OnUseRef } from "./pages/OnUseRef";
import OnUseState from "./pages/OnUseState";

function App() {
  return (
    <>
      <h1>Hooks</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<OnUseState />} />
        <Route path="/useeffect" element={<OnUseEffect />} />
        <Route path="/usecontext" element={<OnUseContext />} />
        <Route path="/useref" element={<OnUseRef />} />
        <Route path="/usereducer" element={<OnUseReducer />} />
      </Routes>
    </>
  );
}

export default App;
