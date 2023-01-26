import styled from "styled-components";

export const ProfileCardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 15px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0 0px;
  }
  h2 {
    margin: 0 auto;
    font-size: 35px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

type ButtonColor = {
  color: string;
  width: string;
};

export const Buttons = styled.button<ButtonColor>`
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: ${(props) => props.width};
  height: 50px;
  border-radius: 10px;
  color: white;
  margin-top: 5px;
`;
