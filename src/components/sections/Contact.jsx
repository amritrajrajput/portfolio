import React from "react";
import styled from "styled-components";
import LinkItem from "../../LinkItem"; // Adjust the import path as necessary

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 32px;
  text-align: center;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 500px;
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Title>Connect With Me</Title>
      <Subtitle>Explore my work and reach out below 👇</Subtitle>
      <LinkList>
        <LinkItem
          href="https://www.linkedin.com/in/amrit-raj-rajput-569547271/"
          label="LinkedIn Profile"
          emoji="💼"
        />
        <LinkItem
          href="https://github.com/amritrajrajput"
          label="GitHub Repos"
          emoji="👨‍💻"
        />
        <LinkItem
          href="https://linktr.ee/amritrajrajput14"
          label="My Linktree"
          emoji="🌐"
          className="linktree-link"
        />
        <LinkItem
          href="https://twitter.com/AmritRajRa4312"
          label="Twitter (X)"
          emoji="🐦"
        />
        <LinkItem
          href="https://www.instagram.com/amritrajrajput14"
          label="Instagram"
          emoji="📸"
        />
      </LinkList>
    </Container>
  );
};

export default Contact;
