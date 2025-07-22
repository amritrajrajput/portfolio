import React from "react";
import styled from "styled-components";
import {
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 1rem 2rem;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 2rem;
  transition: transform 0.3s, color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Amrit Raj Rajput</Logo>

        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>

        <SocialMedia>
          <SocialMediaIcon
            href="https://twitter.com/AmritRajRa4312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon
            href="https://linkedin.com/in/amrit-raj-rajput-569547271/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon
            href="https://instagram.com/amritrajrajput14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </SocialMediaIcon>
        </SocialMedia>

        <Copyright>
          &copy; {new Date().getFullYear()} Amrit Raj Rajput. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
