import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const Ticket = styled.div`
  padding: 8px;
  text-align: left;
  color: white;
  background-color: #028DCD;
  border-radius: 0px 12px 12px 0px;
  width: 250px;
  height: 120px;

  h2 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }

  h3 {
    font-size: 27px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  p {
    font-style: italic;
  }
`;

export const InfoPerson = styled.div`
  img {
    width: 18px;
  }
`;

export const Price = styled.div`
  text-align: end;
  margin-right: 12px;

  h3 {
    color: rgb(210, 138, 30);
  }
`;
