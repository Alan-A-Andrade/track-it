import styled from "styled-components";
import checkIcon from "../../assets/check-icon.svg"


export default function UserHistoryPageHabit(Props) {

  return (
    <UserHistoryPageHabitStyled>
      <h1>{Props.data.name}</h1>
      <CheckBox done={Props.data.done}>
        {Props.data.done ? <img src={checkIcon} alt="" /> : <h1>X</h1>}
      </CheckBox>
    </UserHistoryPageHabitStyled>
  )

}

const UserHistoryPageHabitStyled = styled.div`

width: 340px;
height: 94px;

background: #FFFFFF;
border-radius: 5px;
padding: 13px;
margin-top: 10px;

position: relative;

h1{
font-style: normal;
font-weight: normal;
font-size: 19.976px;
line-height: 25px;
color: #666666;
}

p{
  font-style: normal;
font-weight: normal;
font-size: 12.976px !important;
line-height: 16px;

color: #666666;
}

mark{
  all: unset;
  color: #8FC549
}

`
const CheckBox = styled.div`


width: 69px;
height: 69px;
right: 13px;
top: 13px;
position: absolute;

background: ${Props => !Props.done ? "#E75766" : "#8FC549"};
border: none;
box-sizing: border-box;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: center;

h1{
  padding-top: 0.1em;
  font-size: 3em;
  color: #ffffff;
}


`