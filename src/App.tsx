import React from "react";
import { Route, Switch } from "react-router";
import Main from "./main";
import AfterLogin from "./AfterLogin";
import GoogleLoginSuccess from "./GoogleLoginSuccess";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <GoogleOAuthProvider clientId="167644582262-c10vbk538rekc7iim4o2llkpm7acuher.apps.googleusercontent.com">
        <RecoilRoot>
          <Route exact path="/googleLogin" component={GoogleLoginSuccess} />
          <Route exact path="/" component={Main} />
          <Route exact path="/after" component={AfterLogin} />
        </RecoilRoot>
      </GoogleOAuthProvider>
    </AppContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  max-width: 767px;
  height: 100vh;
`;

export default App;
