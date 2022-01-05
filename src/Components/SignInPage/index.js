import styled from "styled-components";
import LogoMark from "../../GenericComponents/LogoMark";
import InputBox from "../../GenericComponents/Input";
import ConfirmButton from "../../GenericComponents/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignInPage() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const [signInObj, setSignInObj] = useState({
    email: "",
    password: ""
  })

  function logIn(event) {

    event.preventDefault()

    setLoading(true)

    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", signInObj)

    request.then(requestSuccess);

    request.catch(requestFail)

  }

  function requestSuccess(answer) {
    console.log(answer.data)
    setLoading(false)
    navigate("/hoje")

  }

  function requestFail(answer) {
    console.log(answer.response.status)
    notify("email e/ou senha incorreto, por favor tente novamente")
    setLoading(false)
  }

  const notify = (text) => toast.error(`${text}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <SignInStyled>
      <LogoMark></LogoMark>
      <form onSubmit={logIn}>
        <InputBox
          type="email"
          placeholder="email"
          value={signInObj.email}
          onChange={setSignInObj}
          inputState={signInObj}
          stateKey="email"
          isLoading={loading}
        />
        <InputBox
          type="password"
          placeholder="senha"
          value={signInObj.password}
          onChange={setSignInObj}
          inputState={signInObj}
          stateKey="password"
          isLoading={loading}
        />
        <ConfirmButton text="Entrar" isLoading={loading} />
      </form>
      <Link to="/cadastro">
        <h1>
          Não tem uma conta? Cadastre-se!
        </h1>
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SignInStyled>
  )

}

const SignInStyled = styled.div`

width:100%;
height:100%;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;

padding-top: 68px;

gap: 25px;

form{
  display:flex;
  flex-direction:column;

  gap: 6px;

}

h1{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
}

`