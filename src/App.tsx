import React, { useRef } from "react";
import "./App.css";

import Home from "./pages/index.tsx";
import Navbar from "./component/layout/navbar.tsx";
import Footer from "./component/layout/footer.tsx";

function App() {
  const footerRef = useRef(null);
  return (
    <div>
      <Navbar footerRef={footerRef} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
