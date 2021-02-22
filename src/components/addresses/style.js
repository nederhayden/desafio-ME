import styled from "styled-components";

export const DivAddresses = styled.div`
  margin: 8px;

  span {
    display: flex;
    flex-direction: row;
    h1 {
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
  margin: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  padding: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid steelblue;
  p {
    color: rgba(128, 128, 128, 0.555);
    padding-bottom: 8px;
  }
`;

export const DivSpan = styled.span`
  margin-left: 8px;
  padding-bottom: 8px;
  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const DivSpanName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const DivRow = styled.span`
  display: flex;
  flex-direction: row;
`;

export const DivPadding = styled.span`
  padding-left: 12px;
`;

export const DivFont = styled.span`
  font-style: italic;
`;
