import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background: #344d90;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 1.35rem;
    margin-bottom: 20px;
    padding: 5px 40px;
    border-radius: 10px;
    background: #ffc500;
  }

  h1 {
    color: white;
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(3px 3px #105dcb);
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: #5cc5ef;
    border: #5cc5ef;
    box-shadow: 0px 5px 0px rgb(1, 117, 164);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: white;
    outline: none;
    font-size: 20px;
  }

  .start {
    max-width: 200px;
  }

  .start:hover,
  .next:hover {
    background: white;
    color: #5cc5ef;
    box-shadow: 0px 5px 0px #5cc5ef;
  }
`;
