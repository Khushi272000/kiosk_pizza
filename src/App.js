import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products/Index";
import { GlobalStyle } from "./GlobStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Fav Pizza" />
    </Router>
  );
}

export default App;
