import React from "react";
import Home from "./pages/home";
import Invoice from "./pages/invoice";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
