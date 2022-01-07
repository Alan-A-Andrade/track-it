
import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import LogoType from "../../GenericComponents/LogoType";

export default function Header() {

  const { token } = useContext(UserContext);

  return (
    <HeaderStyled>
      <LogoType />
      <UserPicture>
        <img src={token.image} alt="Avatar" />
      </UserPicture>
    </HeaderStyled>
  )

}

const HeaderStyled = styled.header`

width: 100%;
height: 70px;

background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

position:fixed;
top: 0px;
left: 0px;

padding: 0px 18px;

display: flex;
align-items: center;
justify-content: space-between;
z-index:10;
`

const UserPicture = styled.div`

display: flex;
align-items: center;
justify-content: center;

img{
  width: 51px;
  width: 51px;
  object-fit: contain;
  border-radius: 100%;
}

`