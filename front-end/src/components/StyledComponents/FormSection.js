import styled from 'styled-components';

const FormSection = styled.section`
  align-items: center;
  background: #0fa36b;
  color: #464646;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  justify-content: center;
  width: 100%;

  h1 {
    animation: shake 1.5s infinite ease;
    color: aliceblue;
    font-family: Montserrat , sans-serif;
    font-size: 3em;
    font-weight: 900;
  }

  object {
    animation: shake 1s infinite ease;
    max-height: 80vh;
  }

  @keyframes shake {

    0% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(-5deg);
    }

    100% {
      transform: rotate(5deg);
    }
  }

  @keyframes clink {

    0% {
      transform: rotate(-10deg);
    }

    50% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(-10deg);
    }
  }
`;

export default FormSection;
