import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <HeaderText>This is Header component</HeaderText>
    </header>
  );
}

const HeaderText = styled.h1`
  font-family: var(--primary-text);
  font-size: 3rem;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  border-bottom: 2px solid gray;
`;
