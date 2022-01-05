import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/reset.css"


import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/cadastro" element={<SignUpPage />}></Route>
        </Routes>
      </AppStyled>
    </BrowserRouter >
  );
}


const AppStyled = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

// font-family: 'Playball', cursive; Font for LogoType
font-family: 'Lexend Deca', sans-serif;

width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`