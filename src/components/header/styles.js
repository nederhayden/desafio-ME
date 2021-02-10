import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  height: 100px;
`;

export const DivTicketPerson = styled.div`
  display: flex;
`;

export const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #028dcd;
  border-radius: 0px 12px 12px 0px;
  width: 250px;
`;

export const DivTicket = styled.div`
  h2 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }

  h3 {
    font-size: 27px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  p {
    font-style: italic;
  }
`;

export const InfoPerson = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 18px;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: end;
  margin-right: 12px;

  h2 {
    color: rgb(210, 138, 30);
    font-size: 22px;
  }
  h3 {
    font-size: 16px;
  }
`;

export const DivSpan = styled.span`
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-left: 6px;
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  span {
    margin-left: 6px;
  }
`;
