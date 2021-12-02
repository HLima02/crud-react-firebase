import styled from 'styled-components';

export const ContainerList = styled.div`
  padding: 30px 0;
  max-width: 800px;
  width: 100%;

  h2 {font-size: 30px; margin-bottom: 35px;}
  .taskItem {
    background-color: #0000AA;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 25px;
    border-radius: 20px;

    h3{font-size: 18px; margin-bottom: 10px;}
    p{font-size: 13px;}

    .btn-area {
      display: flex;

      .edit {margin: 0 5px;}

      .edit, .exclude {
        font-size: 23px;
        cursor: pointer;
        transition: 0.3s ease;
      }
      .edit:hover, .exclude:hover {
        transform: scale(1.2);
      }
    }
  }

  @media only screen and (max-width: 520px){
    h2 {font-size: 25px; margin-bottom: 35px;}

    .taskItem {
      margin: 15px 0;
      padding: 8px 18px;

      h3{font-size: 15px; margin-bottom: 10px;}
      p{font-size: 11px;}
    }
  }
`;