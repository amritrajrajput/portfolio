import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { createGlobalStyle } from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const GlobalStyle = createGlobalStyle`
  /* Override vertical timeline line color */
  .vertical-timeline::before {
    background: ${({ theme }) => theme.primary} !important;
    z-index: 0 !important;
  }

  /* Override timeline element content background and border for dark theme */
  .vertical-timeline-element-content {
    background: ${({ theme }) => theme.card} !important;
    border: 1px solid ${({ theme }) => theme.primary} !important;
    box-shadow: 0 2px 12px ${({ theme }) => theme.primary} !important;
    color: ${({ theme }) => theme.text_primary} !important;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${({ theme }) => theme.primary} !important;
  }

  /* Timeline icon container styles */
  .vertical-timeline-element-icon {
    z-index: 10 !important;
    background: ${({ theme }) => theme.bgLight} !important;
    padding: 0 !important;
    border-radius: 50% !important;
  }

  /* Timeline icon image styles */
  .vertical-timeline-element-icon img {
    opacity: 1 !important;
    position: relative;
    z-index: 11 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 50% !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <>
      <GlobalStyle />
      <Container id="Experience">
        <Wrapper>
          <Title>Experience</Title>
          <Desc
            style={{
              marginBottom: "40px",
            }}
          >
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </Wrapper>
      </Container>
    </>
  );
};

export default Experience;
