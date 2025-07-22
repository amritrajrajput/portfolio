// components/LinkItem.js
import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: block;
  width: 100%;
  padding: 14px 24px;
  text-align: center;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.text_secondary + 25};
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + "20"};
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const LinkItem = ({ href, label, emoji }) => {
  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      {emoji} {label}
    </Button>
  );
};

export default LinkItem;
