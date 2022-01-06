
import styled from "styled-components"
import Header from "../Header"

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {

  const { token, setToken } = useContext(UserContext);

  console.log(token)

  return (
    <TodayStyled>
      <Header />
      <h1>Pagina de Rotinas de HOJE</h1>
    </TodayStyled>
  )

}

const TodayStyled = styled.div``