import styled from "styled-components";

export const DivAddresses = styled.div`
  margin: 8px;
  
  span {
    display: flex;
    flex-direction: row;
    h1{
      margin-left: 8px;
    }
    button {
      padding: 8px;
      border: none;
      border-radius: 20px;
      background-color: lightblue;
    }
  }
`;

export const DivCard = styled.div`
  margin: 8px 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid steelblue;
  padding: 8px;
`;
