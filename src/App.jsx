import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css"; 

function App() {
  // Hooks MUST be inside here (if you use them)
  return (<div>
 <Home />
 </div>
  );
}

export default App;