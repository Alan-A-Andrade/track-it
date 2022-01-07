import styled from "styled-components";
import WeekdayBox from "../../GenericComponents/WeekdayBox";
import trashCanIcon from "../../assets/trashcan-icon.svg"

export default function UserSavedHabit(Props) {

  return (
    <UserHabitBox>
      <h1>{Props.data.name}</h1>
      <div className="week-list">
        {Array.from(Array(7).keys()).map((el) => <WeekdayBox key={el} state={Props.data} createMode={false} weekday={el} />)}
      </div>
      <img onClick={() => Props.deleteFunction(Props.data.id)} className="delete-icon" src={trashCanIcon} alt="Deletar hábito" />
    </UserHabitBox>
  )

}

const UserHabitBox = styled.div`

width: 340px;
height: 91px;

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

.delete-icon{
  position: absolute;
  top: 11px;
  right: 11px;

}
.week-list{
  padding-top: 8px;
  display: flex;
  gap: 4px;
}

`