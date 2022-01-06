import styled from "styled-components";
import Loader from "react-loader-spinner";


export default function ConfirmButton(Props) {

  return (
    <ButtonStyled isLoading={Props.isLoading} type="submit" disabled={Props.isLoading}>
      {Props.isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={13} width={100} /> : Props.text}

    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`



width: 303px;
height: 45px;
left: 36px;
top: 381px;

background: #52B6FF;
border-radius: 5px;


font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
opacity: ${props => props.isLoading ? 0.7 : 1}


`