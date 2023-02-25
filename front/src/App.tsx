import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./router";
import TheJamsilRegular from "./assets/fonts/The Jamsil OTF 3 Regular.otf";
import BlackHanSans from "./assets/fonts/BlackHanSans-Regular.ttf";

function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: "theJamsil";
    src: local("theJamsil"), url(${TheJamsilRegular}) format('ttf'); 
    font-weight: normal;
  }
  
  @font-face {
    font-family: "blackHanSans";
    src: local("blackHanSans"), url(${BlackHanSans}) format('opentype'); 
    font-weight: normal;
  }

  :root {
    
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
  ol, ul, li {
    list-style: none;
  }
  `;
  // * {
  //     box-sizing: border-box;
  //   }
  // body{
  //     background-color: #ffffff;
  //     font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; //여기서 쓰시는 폰트 설정하시면 될것같습니다.
  //   }
  //  h1, h2, h3, h4, h5, h6{
  //     font-family:'Maven Pro', sans-serif;
  //   }
  //   img {
  //     display: block;
  //     width: 100%;
  //     height: 100%;
  //   }
  //   } 인터넷에서 주워왓어용
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
