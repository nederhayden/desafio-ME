import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  height: 100px;
  border: 1px solid purple;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #028dcd;
  border: 1px solid purple;
  border-radius: 0px 12px 12px 0px;
  width: 250px;
`;

export const DivTicket = styled.div`
  border: 1px solid purple;
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
  border: 1px solid purple;
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

// export const DivPerson = styled.div`
//   background: yellow;
//   margin-left: 0px;
// `;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  border: 1px solid purple;
  text-align: end;
  margin-right: 12px;

  h3 {
    color: rgb(210, 138, 30);
  }
`;

// export const DivPrice = styled.div`
//   background: green;
// `;
