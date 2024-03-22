import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Slots from "./pages/Slots.jsx";
import Payments from "./pages/Payments.jsx";
import Header from "./components/Header";

function App() {
  const [balance, setBalance] = useState(0);

  return (
    <Router>
      <Header balance={balance} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
