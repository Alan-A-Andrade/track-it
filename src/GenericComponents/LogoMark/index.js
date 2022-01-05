import styled from "styled-components";

import LogoMarkIcon from "../../assets/LogoMark.svg"

export default function LogoMark() {

  return (
    <LogoMarkStyled>
      <img src={LogoMarkIcon} alt="Logo" />
    </LogoMarkStyled>
  )

}

const LogoMarkStyled = styled.div`



`