import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

export default function WeekdayBox(Props) {

  const [selected, setSelected] = useState(false);

  const weekdaysFirstLetter = ["D", "S", "T", "Q", "Q", "S", "S"]

  useEffect(() => {

    let stateObject = { ...Props.state }
    setSelected(stateObject.days.indexOf(Props.weekday) !== -1)

    // eslint-disable-next-line
  }, []);

  //state={newHabit} setState={setNewHabit}

  if (Props.createMode === true) {

    let stateObject = { ...Props.state }


    function handleOnClick() {

      if (selected) {

        stateObject.days = stateObject.days.filter((el) => el !== Props.weekday)

      }

      else {

        stateObject.days = [...stateObject.days, Props.weekday]

      }

      Props.setState(stateObject)
      setSelected(!selected)

    }


    return (
      <WeekDayWrapper isSelected={selected} onClick={handleOnClick}>
        <h1>{weekdaysFirstLetter[Props.weekday]}</h1>
      </WeekDayWrapper>
    )

  }

  else {



    return (
      <WeekDayWrapper isSelected={selected}>
        <h1>{weekdaysFirstLetter[Props.weekday]}</h1>
      </WeekDayWrapper>
    )

  }

}

const WeekDayWrapper = styled.div`

width: 30px;
height: 30px;

background: ${Props => Props.isSelected ? "#CFCFCF" : "#FFFFFF"} ;
border: 1px solid ${Props => Props.isSelected ? "#CFCFCF" : "#D5D5D5"};
box-sizing: border-box;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: center;
padding-top: 0.1em;


h1{
  font-style: normal;
font-weight: normal;
font-size: 19.976px;
line-height: 25px;

color: ${Props => Props.isSelected ? "#FFFFFF" : "#DBDBDB"};

}

`