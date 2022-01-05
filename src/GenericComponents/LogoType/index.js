import styled from "styled-components";
import LogoTypeIcon from "../../assets/LogoType.svg"

export default function LogoType() {

  return (
    <LogoTypeStyled>

      <img src={LogoTypeIcon} alt="Logotype" />
    </LogoTypeStyled>
  )

}

const LogoTypeStyled = styled.div`



`