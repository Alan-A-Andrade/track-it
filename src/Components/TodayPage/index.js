
import styled from "styled-components"
import Header from "../Header"
import Menu from "../Menu";
import Background from "../../GenericComponents/Background";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'



export default function TodayPage() {

  const { token, setToken } = useContext(UserContext);

  let today = dayjs().locale('pt-br').format('dddd, DD/MM')

  return (
    <TodayStyled>
      <Header />
      <h1>{today}</h1>
      <Background />
      <Menu />
    </TodayStyled>
  )

}

const TodayStyled = styled.div`


h1{
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 29px;


color: #126BA5;
}

`