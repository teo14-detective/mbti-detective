import Router from "router";
import { GlobalStyle } from "styles/GlobalStyle";

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`); //
}

// useEffect(() => {
//   setScreenSize();
// });
window.addEventListener("resize", () => setScreenSize());

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
