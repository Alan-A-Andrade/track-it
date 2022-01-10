
import Header from "../Header"
import Menu from "../Menu";
import Background from "../../GenericComponents/Background";
import styled from "styled-components";
import Calendar from 'react-calendar'
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from "axios";

import dayjs from "dayjs";

export default function HistoryPage() {

  const { token } = useContext(UserContext);

  const [historyData, setHistoryData] = useState([])

  let navigate = useNavigate()


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
    let arrayPost = []
    for (let i = 0; i < array.length; i++) {
      let total = array[i].habits.length
      let numbCompletedHabits = 0
      for (let j = 0; j < total; j++) {
        if (array[i].habits[j].done === true) {
          numbCompletedHabits++
        }

      }

      if (numbCompletedHabits / total === 1) {
        arrayPost.push({ date: array[i].habits[0].date, className: "day-done" })
      }
      else {
        arrayPost.push({ date: array[i].habits[0].date, className: "day-not-done" })
      }

    }
    return (arrayPost)
  }

  function setClass(date) {
    const dateobj =
      historyData.find((x) => {
        return (
          date.getDay() === new Date(x.date).getDay() &&
          date.getMonth() === new Date(x.date).getMonth() &&
          date.getDate() === new Date(x.date).getDate()
        );
      });
    return dateobj ? dateobj.className : "";
  }

  function goToDay(date) {
    const dateobj =
      historyData.find((x) => {
        return (
          date.getDay() === new Date(x.date).getDay() &&
          date.getMonth() === new Date(x.date).getMonth() &&
          date.getDate() === new Date(x.date).getDate()
        );
      });
    return dateobj ? navigate(dateobj.date) : "break";
  }

  return (
    <HistoryStyled>
      <Header></Header>
      <TitleWrapper>
        <h1>Histórico</h1>
      </TitleWrapper >
      <CalendarWrapper>
        <Calendar

          locale="pt-Br"
          calendarType="US"

          formatDay={(locale, date) => dayjs(date).format("DD")}
          tileClassName={({ activeStartDate, date, view }) => setClass(date)}
          onClickDay={(value, event) => goToDay(value)}

        />
      </CalendarWrapper>
      <Menu></Menu>
      <Background></Background>
    </HistoryStyled>
  )


}

const HistoryStyled = styled.div`

width: 100%;
height: 100%;

padding: 77px 0px;

.react-calendar {
  width: 335px;
  max-width: 100%;
  background: white;
  font-family: 'Lexend Deca', sans-serif;
  line-height: 1.125em;
  border-radius: 10px;
}

.react-calendar--doubleView {
  width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer>* {
  width: 50%;
  margin: 0.5em;
}

.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}

.react-calendar button:enabled:hover {
  cursor: pointer;
}

.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
  font-size: 0.9em;
}

.react-calendar__navigation button {
  min-width: 44px;
  background: none;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
}

.react-calendar__navigation button[disabled] {
  background-color: #f0f0f0;
}

.react-calendar__month-view{
  background-color: transparent;
}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
  
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  
}

.react-calendar__month-view__days__day {
  font-size: 0.9em;
}

.react-calendar__month-view__days__day--weekend {
  color: #d10000;
}

.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile {
  width: 45px !important;
  height: 45px !important;
  text-align: center;
  padding: 0.75em 0.5em;
  background: none;
}

.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}

.react-calendar__tile--now {
  background: #ffff76 !important;

  &::after {
    content: "";
    background-color: transparent !important;
}
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}

.react-calendar__tile--hasActive {
  background: #76baff;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}

.react-calendar__tile--active {
  background: #126BA5 !important;
  color: black !important;
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}


.day-done{
  position: relative;
  background: transparent;
  z-index:10;


&::after {
    content: "";
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    left: 0.38em;
    top: 0.35em;
    border-radius:100%;
    background-color: #8FC549;;
    z-index: -1; 
}
}


.day-not-done{
  position: relative;
  background: transparent;
  z-index:10;


&::after {
    content: "";
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    left: 0.38em;
    top: 0.35em;
    border-radius:100%;
    background-color: #E75766;;
    z-index: -1; 
}
}

`

const CalendarWrapper = styled.div`

width:100%;

padding: 0px 18px;

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
color: #BABABA;
}

mark{
  all: unset;
  color: #8FC549
}


`