import styled from "styled-components";

export default function Background() {

  return (
    <BackgroundStyled>
    </BackgroundStyled>
  )

}

const BackgroundStyled = styled.div`

width: 100%;
height: 100%;

z-index: -1;
position: fixed;
top:0px;
left:0px;

background-color: #E5E5E5;

`