import styled from "styled-components";

export const Loader = styled.div`
  align-self: center;
  cursor: progress;
  border: 16px solid #5a5858;
  border-top: 16px solid rgb(246, 107, 14);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
