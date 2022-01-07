
import Header from "../Header"
import Menu from "../Menu";
import Background from "../../GenericComponents/Background";
import styled from "styled-components";

export default function HistoryPage() {

  return (
    <HistoryStyled>
      <Header></Header>
      <TitleWrapper>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </TitleWrapper >
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
color: #BABABA;
}

mark{
  all: unset;
  color: #8FC549
}

`