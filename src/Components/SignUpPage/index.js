import styled from "styled-components";
import LogoMark from "../../GenericComponents/LogoMark";
import InputBox from "../../GenericComponents/Input";
import ConfirmButton from "../../GenericComponents/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";





export default function SignUpPage() {

  const [loading, setLoading] = useState(false)

  const [signUpObj, setSignUpObj] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  })

  function logUp() {

  }

  return (
    <SignUp>
      <LogoMark></LogoMark>
      <form onSubmit={logUp}>
        <InputBox
          type="email"
          placeholder="email"
          value={signUpObj.email}
          onChange={setSignUpObj}
          inputState={signUpObj}
          stateKey="email"
          isLoading={loading}
        />
        <InputBox
          type="password"
          placeholder="senha"
          value={signUpObj.password}
          onChange={setSignUpObj}
          inputState={signUpObj}
          stateKey="password"
          isLoading={loading}
        />
        <InputBox
          type="text"
          placeholder="nome"
          value={signUpObj.name}
          onChange={setSignUpObj}
          inputState={signUpObj}
          stateKey="name"
          isLoading={loading}
        />
        <InputBox
          type="url"
          placeholder="foto"
          value={signUpObj.image}
          onChange={setSignUpObj}
          inputState={signUpObj}
          stateKey="image"
          isLoading={loading}
        />

        <ConfirmButton text="Cadastrar" isLoading={loading} />
      </form>
      <Link to="/">
        <h1>
          Já tem uma conta? Faça login!
        </h1>
      </Link>
    </SignUp>
  )

}

const SignUp = styled.div`
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