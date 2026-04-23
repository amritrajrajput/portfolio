import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 54px;
  line-height: 68px;
  text-align: left;
  background: linear-gradient(to right, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
    text-align: left; // Ensure center alignment on mobile
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
    width: 100%;
    gap: 0;
  }
`;

const TextLoopLabel = styled.span`
  text-align: left;
  flex-shrink: 0;
  @media (max-width: 960px) {
    margin-bottom: 4px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 10px ${({ theme }) => theme.primary};
`;

const TextLoopType = styled(Span)`
  display: inline-block;
  word-break: break-word;
  @media (max-width: 960px) {
    width: 100%;
    text-align: left;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: left;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 300px;
  padding: 16px 0;
  text-align: center;
  border-radius: 50px;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.white};
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  box-shadow: 0 4px 20px rgba(138, 43, 226, 0.4);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 50px;
    background: linear-gradient(135deg, ${({ theme }) => theme.secondary}, ${({ theme }) => theme.primary});
    z-index: -1;
    transition: opacity 0.4s ease-in-out;
    opacity: 0;
  }

  &:hover {
    box-shadow: 0 6px 30px rgba(0, 240, 255, 0.6);
    transform: translateY(-3px) scale(1.02);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 4px solid transparent;
  background-image: linear-gradient(${({theme}) => theme.bg}, ${({theme}) => theme.bg}), linear-gradient(135deg, ${({theme}) => theme.primary}, ${({theme}) => theme.secondary});
  background-origin: border-box;
  background-clip: content-box, border-box;
  object-fit: cover;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 0 50px rgba(0, 240, 255, 0.7);
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

// Add animation to image
const AnimatedImg = styled(Img).attrs({
  loading: "lazy",
  width: 400,
  height: 400,
})`
  animation: float 4s ease-in-out infinite;
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px) scale(1.02); }
    100% { transform: translateY(0px); }
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  // Smooth scroll to About section
  const handleScroll = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="About" aria-label="Hero Section">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  <TextLoopLabel>I am a</TextLoopLabel>
                  <TextLoopType>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </TextLoopType>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Linktree
              </ResumeButton>
              {/* Removed unnecessary navigation button */}
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <AnimatedImg src={HeroImg} alt={Bio.name + " profile"} />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </section>
  );
};

export default Hero;
