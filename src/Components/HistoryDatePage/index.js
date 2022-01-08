
import Header from "../Header"
import Menu from "../Menu";
import Background from "../../GenericComponents/Background";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from "axios";

import dayjs from "dayjs";

import UserHistoryPageHabit from "../UserHistoryHabit";

export default function HistoryDatePage() {

  const { token } = useContext(UserContext);

  const [historyData, setHistoryData] = useState([])


  useEffect(() => {

    const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    });

    request.then(answer => requestSuccess(answer));
    // eslint-disable-next-line
  }, []);

  function requestSuccess(answer) {

    setHistoryData(daysArray(answer.data))

  }

  function daysArray(array) {

    for (let i = 0; i < array.length; i++) {

      let total = array[i].habits.length

      for (let j = 0; j < total; j++) {


        if (array[i].habits[j].date === dateId) {
          return array[i].habits
        }
      }
    }
  }

  let dateArray = [{ date: "2021-06-11T09:47:17.456000Z", colorName: "pink" }, { date: "2021-06-12T09:47:17.456000Z", colorName: "blue" }, { date: "2021-06-16T09:47:17.456000Z", colorName: "blue" }]


  const { dateId } = useParams()

  function historyPercentage(array) {
    let numb = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i].done === true) {
        numb++
      }
    }
    return (parseInt(numb / array.length * 100))
  }

  let percentageToday = historyPercentage(historyData)



  return (
    <HistoryStyled>
      <Header></Header>
      <TitleWrapper>
        <h1>{dayjs(dateId).locale('pt-br').format('dddd, DD/MM/YYYY')}</h1>
        {percentageToday === 100 ? <p><mark>Todos os hábitos feitos!</mark></p> :
          percentageToday !== 0 ? <p> {percentageToday}% dos hábito feitos</p> : <p> Nenhum hábito feito nesse dia</p>}
      </TitleWrapper >
      <HabitsList>
        {historyData.map((el, id) => <UserHistoryPageHabit data={el} />)}
      </HabitsList>


      <Menu></Menu>
      <Background></Background>
    </HistoryStyled>
  )


}

const HistoryStyled = styled.div`

width: 100%;
height: 100%;

padding: 77px 0px;


`

const TitleWrapper = styled.div`

width:100%;
height: 75px;

display: flex;
flex-direction:column;
align-items: left;
justify-content:flex-start;

padding: 24px 18px;

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
color: #E75766;
}

mark{
  all: unset;
  color: #8FC549
}



`
const HabitsList = styled.div`

padding: 24px 18px 80px 18px;

p{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;

color: #666666;
}

`