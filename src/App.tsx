import * as React from "react";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";

import { UserSearch } from "./features/UserSearch";
import { UserProfile } from "./features/UserProfile";

const GlobalStyle = createGlobalStyle`
  :host, html, body, #root {
      inline-size: 100vw;
      block-size: 100vh;
      margin: 0;
    }

    body{
      inline-size: 100%;
      block-size: 100%;
      margin: 0;
      overflow: hidden;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <React.Suspense fallback={<Loader />}>
        <Container alignItems="flex-start" gap={1} fullHeight overflow="hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UserSearch />} />
              <Route path="/user/:username" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </React.Suspense>
    </>
  );
}

export default App;
