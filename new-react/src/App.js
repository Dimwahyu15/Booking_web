import "./App.css";
import Home from "./Pages/Home/Home";
import List from "./Pages/list/list";
import Hotel from "./Pages/Hotel/Hotel";
import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { faContainerStorage } from "@fortawesome/sharp-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Hotel" element={<List/>}/>
          <Route path="/Hotel/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
