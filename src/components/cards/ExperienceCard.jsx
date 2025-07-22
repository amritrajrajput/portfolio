import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  flex-wrap: wrap;
  background-color: #000000;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(88, 166, 255, 0.2);
  transition: background-color 0.3s ease-in-out;
`;

const ImageWrapper = styled.div`
  flex: 0 0 50px;
  max-width: 50px;
  margin-top: 4px;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    flex: 0 0 40px;
    max-width: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50px;
  max-width: 50px;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
    max-width: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease-in-out;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  transition: color 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
  flex-wrap: wrap;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.card_light};
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(88, 166, 255, 0.3);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: default;
  user-select: none;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 12px rgba(88, 166, 255, 0.6);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceCard = React.memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={
            experience?.role === "Campus Representative"
              ? "https://raw.githubusercontent.com/amritrajrajput/my-assets/main/assets-port/experience/gdg.png"
              : experience?.img
          }
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
        // maxWidth: "100%",
        overflow: "hidden",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <ImageWrapper>
          <Image
            src={
              experience?.role === "Campus Representative"
                ? "https://raw.githubusercontent.com/amritrajrajput/my-assets/main/assets-port/experience/gdg.png"
                : experience?.img
            }
          />
        </ImageWrapper>
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={`skill-${index}`}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
});

export default ExperienceCard;
