import styled from "styled-components";

export default function InputBox(Props) {

  return (
    <InputStyled
      type={Props.type}
      placeholder={Props.placeholder}
      required={true}
      value={Props.value}
      disabled={Props.isLoading}
      onChange={e => Props.onChange({ ...Props.inputState, [Props.stateKey]: e.target.value })}
      isLoading={Props.isLoading}
    />
  )
}


const InputStyled = styled.input`

width: 303px;
height: 45px;

background: ${props => props.isLoading ? "#F2F2F2" : "#FFFFFF"};
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;

font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;

color: #AFAFAF;

padding-left: 0.5em;

&::placeholder{

font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;

color: #DBDBDB;
opacity: 1;
}

`