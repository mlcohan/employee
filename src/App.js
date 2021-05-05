import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sort from "./pages/Sort";
import Filter from "./pages/Filter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Table} />
          <Route exact path="/sort" component={Sort} />
          <Route exact path="/filter" component={Filter} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
