import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SkillCard = styled.div`
  flex: 1 1 45%;
  min-width: 280px;
  max-width: 45%;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary}22;
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: default;

  &:hover {
    box-shadow: 0 4px 16px ${({ theme }) => theme.primary}55;
    background-color: ${({ theme }) => theme.primary}11;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary}33;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.card_light};
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary}22;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px ${({ theme }) => theme.primary}66;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = React.memo(() => {
  return (
    <Container id="Skills">
      <Title>Skills</Title>
      <Wrapper>
        {skills.map((skill, index) => (
          <SkillCard key={`skill-${index}`}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((item, index_x) => (
                <SkillItem key={`skill-x-${index_x}`}>
                  <SkillImage src={item.image} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </Wrapper>
    </Container>
  );
});

export default Skills;
