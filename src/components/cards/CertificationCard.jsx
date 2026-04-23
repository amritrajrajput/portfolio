import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.a)`
  width: 350px;
  min-height: 120px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.glass_border || 'rgba(138, 43, 226, 0.2)'};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.glass_shadow || 'none'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.4);
    border: 1px solid ${({ theme }) => theme.primaryLight || '#8a2be2'};
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: contain;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
`;

const Issuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary || '#8a2be2'};
`;

const CertificationCard = ({ cert }) => {
  return (
    <Card 
      href={cert.link} 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
    >
      <Image src={cert.img} alt={cert.issuer} />
      <Details>
        <Title>{cert.title}</Title>
        <Issuer>{cert.issuer}</Issuer>
      </Details>
    </Card>
  );
};

export default CertificationCard;
