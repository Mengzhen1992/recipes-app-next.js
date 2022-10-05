import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>This is Footer component</FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--primary-color);
`;
const FooterText = styled.p`
  font-family: var(--primary-text);
  font-size: 3rem;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  border-top: 2px solid gray;
`;
