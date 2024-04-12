import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import { Height } from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 10px;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  color: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  /* padding: 0px 0px 80px 0px; */
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const index = () => {
  return (
    <Container>
      <Wrapper>
        <GitHubCalendar  username="shubham-bhutada" />
      </Wrapper>
    </Container>
  );
};

export default index;
