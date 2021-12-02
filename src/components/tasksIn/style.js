import styled from 'styled-components';

export const InputContainer = styled.div`
  max-width: 800px;
  width: 100%;
  h1{
    font-size: 40px;
    line-height: 50px;
    margin: 30px 0;
  }

  .input-area {
    width: 100%;
    input {
      width: 100%;
      margin: 10px 0;
      padding: 10px 10px;
      outline: none;
      border: none;
      background-color: transparent;
      border-bottom: 2px solid #fff;
      color:#fff;
    }

    input::placeholder {color: #fff;}

    .add-btn {
      transition: 0.5s all ease;
      font-size: 50px;
      margin: 15px 0;
      cursor: pointer;
    }

    .add-btn:hover {
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 520px){
    h1{
      font-size: 30px;
      line-height: 40px;
    }
  }
`;