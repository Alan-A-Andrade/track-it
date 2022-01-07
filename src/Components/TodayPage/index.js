
import styled from "styled-components"
import Header from "../Header"
import Menu from "../Menu";
import Background from "../../GenericComponents/Background";

import UserTodayHabit from "../UserTodayHabit";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import { useState, useEffect } from 'react';
import axios from "axios";


import dayjs from "dayjs";
import 'dayjs/locale/pt-br'



export default function TodayPage() {

  const { token, percentageToday, setPercentageToday } = useContext(UserContext);

  const [reload, setReload] = useState([false])

  const [todayHabitData, setTodayHabitData] = useState([])

  useEffect(() => {

    setReload([false])

    const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    });

    request.then(answer => {
      setTodayHabitData(answer.data)

      console.log(todayHabitData)

    });

  }, reload);

  setPercentageToday(parseInt(todayHabitData.filter((el) => el.done == true).length / todayHabitData.length * 100))

  let today = dayjs().locale('pt-br').format('dddd, DD/MM')

  return (
    <TodayStyled>
      <Header />
      <TitleWrapper>
        <h1>{today}</h1>
        {percentageToday == 0 ? <p>Nenhum hábito concluído ainda</p> : <p><mark>{percentageToday}% dos hábitos concluídos</mark></p>}
      </TitleWrapper >
      <HabitsList>
        {todayHabitData.map((el) => <UserTodayHabit data={el} reloadFunction={setReload} />)}
      </HabitsList>
      <Background />
      <Menu />
    </TodayStyled >
  )

}

const TodayStyled = styled.div`

width: 100%;
height: 100%;

padding: 77px 0px;


`
const HabitsList = styled.div`

padding: 0px 18px 80px 18px;

p{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;

color: #666666;
}

`

const TitleWrapper = styled.div`

width:100%;
height: 75px;

display: flex;
flex-direction:column;
align-items: left;
justify-content:center;

padding: 0px 18px;

h1{
  font-style: normal;
font-weight: normal;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}

p{
font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
}

mark{
  all: unset;
  color: #8FC549
}

`