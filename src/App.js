import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main/Main";
import { ROUTS } from "./Utils/Routes/Routes";
import { Step_1 } from "./components/Step_1/Step_1";
import { Step_2 } from "./components/Step_2/Step_2";
import { Step_3 } from "./components/Step_3/Step_3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTS.DEFAULT} element={<Main />} />
        <Route path={ROUTS.STEP_1} element={<Step_1 />} />
        <Route path={ROUTS.STEP_2} element={<Step_2 />} />
        <Route path={ROUTS.STEP_3} element={<Step_3 />} />
      </Routes>
    </div>
  );
}

export default App;
