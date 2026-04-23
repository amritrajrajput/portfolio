import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  width: 350px;
  height: 520px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.glass_border};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.glass_shadow};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) !important;
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.4);
    border: 1px solid ${({ theme }) => theme.primaryLight};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease-in-out;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryLight};
  background: rgba(138, 43, 226, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5;
`;

const Button = styled.a`
  margin-top: auto;
  width: 100%;
  padding: 10px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 240, 255, 0.5);
    filter: brightness(1.1);
  }
`;

const ProjectCard = React.memo(({ project }) => {
  return (
    <Card initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.slice(0, 4).map((tag, index) => (
          <Tag key={`tag-${index}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {(project.github || project.webapp) && (
        <Button href={project.github || project.webapp} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      )}
    </Card>
  );
});

export default ProjectCard;
