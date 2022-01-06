
import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {

  const { token, setToken } = useContext(UserContext);

  const percentage = 66;


  return (
    <HeaderStyled>
      <Link style={{ textDecoration: 'none' }} to="/habitos">
        <h1>Hábitos</h1>
      </Link>
      <Link tyle={{ textDecoration: 'none' }} to="/hoje">
        <TodayProgressBar>
          <h1 className="progress-bar-text">Hoje</h1>
          <CircularProgressbar
            value={percentage}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          />
        </TodayProgressBar>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/historico">
        <h1>Histórico</h1>
      </Link>
    </HeaderStyled>
  )

}

const HeaderStyled = styled.nav`

width: 100%;
height: 70px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

position:fixed;
bottom: 0px;
left: 0px;
z-index:10;

padding: 0px 18px;

display: flex;
align-items: center;
justify-content: space-between;

h1{
  font-style: normal;
font-weight: normal;
font-size: 17.976px !important;
line-height: 22px;
text-align: center;

color: #52B6FF !important;
}

`
const TodayProgressBar = styled.div`

width: 91px;
height: 91px;
position: relative;
bottom: 20px;

.progress-bar-text{
  position: absolute;
font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF !important;

bottom: 34px;
left:25px;
}

`

