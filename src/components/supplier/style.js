import styled from "styled-components";

export const DivSupplier = styled.div`
  margin: 24px 12px;
  padding: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid steelblue;
  display: flex;
  justify-content: space-between;
`;

export const DivContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    padding-bottom: 6px;
    color: rgba(128, 128, 128, 0.555);
    font-size: 18px;
    font-weight: 200;
  }
`;

export const DivRow = styled.div`
  padding-bottom: 6px;
  flex-direction: row;
  display: flex;
  font-weight: 500;
  font-size: 20px;
  color: rgb(0, 119, 255);
`;

export const DivCode = styled.div`
  background-color: lightblue;
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  padding: 4px;
  border-radius: 18px;
`;

export const DivValue = styled.div`
  padding-bottom: 8px;
`;

export const DivContainer2 = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const DivNameEmail = styled.div`
  padding-bottom: 8px;
  span {
    display: flex;
    flex-direction: row;
  }
  p1 {
    color: #028dcd;
  }
`;

export const DivPhoneFax = styled.div`
  span {
    display: flex;
    flex-direction: row;
  }
`;

export const DivSpan = styled.span`
  color: ${props => props.color ? props.color : '#000' };
  margin-left: 5px;
`;

export const DivContainer3 = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 18px;
  }
  p {
    padding-bottom: 8px;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;