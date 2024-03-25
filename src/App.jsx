import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Slots from "./pages/Slots.jsx";
import Payments from "./pages/Payments.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/Account.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Promotions from "./pages/Promotions.jsx";
import Favorites from "./pages/Favorites.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Header user={user} balance={balance} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/slots" element={<Slots user={user} balance={balance} setBalance={setBalance} favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/payments" element={<Payments user={user} balance={balance} setBalance={setBalance} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/account" element={<Account user={user} balance={balance} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
