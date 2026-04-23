import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(to right, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const SkillCard = styled(motion.div)`
  flex: 1 1 45%;
  min-width: 280px;
  max-width: 45%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.glass_border};
  border-radius: 24px;
  padding: 32px;
  box-shadow: ${({ theme }) => theme.glass_shadow};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.4);
    transform: translateY(-8px) !important; // override framer motion y temporarily
    border: 1px solid ${({ theme }) => theme.primaryLight};
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.primaryLight};
  letter-spacing: 0.5px;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.glass_border};
  border-radius: 12px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryLight});
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px rgba(138, 43, 226, 0.6);
    border-color: transparent;
    transform: scale(1.05);
  }
`;

const SkillImage = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const Skills = React.memo(() => {
  return (
    <Container id="Skills">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <Title>Technical Skills</Title>
      </motion.div>
      <Wrapper>
        {skills.map((skill, index) => (
          <SkillCard 
            key={`skill-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
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
