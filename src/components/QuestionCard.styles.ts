import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #213162;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 8px 0px rgb(1, 29, 72);
  text-align: center;

  p {
    font-size: 1rem;
    color: white;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.85rem;
    width: 100%;
    height: 40px;
    margin: 8px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#b0cd38" : !correct && userClicked ? "#ed5e5e" : "white"};
    border: ${({ correct, userClicked }) =>
      correct ? "#b0cd38" : !correct && userClicked ? "#ed5e5e" : "white"};
    /* box-shadow: 0px 5px 0px rgb(133, 148, 185); */
    box-shadow: ${({ correct, userClicked }) =>
      correct
        ? "0px 5px 0px rgb(122,152,1)"
        : !correct && userClicked
        ? "0px 5px 0px rgb(139,50,50)"
        : "0px 5px 0px rgb(133, 148, 185)"};
    border-radius: 10px;
    color: ${({ correct, userClicked }) =>
      correct ? "white" : !correct && userClicked ? "white" : "#213162"};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;
