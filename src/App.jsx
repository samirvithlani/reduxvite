import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomeComponent } from "./components/HomeComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderContainer />
      <HomeContainer />
    </>
  );
}

export default App;
