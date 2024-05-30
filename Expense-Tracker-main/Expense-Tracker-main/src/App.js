import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/add-expense" element={<AddExpense/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;