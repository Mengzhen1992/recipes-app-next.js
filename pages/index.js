import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
/* import styles from "../styles/Home.module.css"; */

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>this is home page</HomeTitle>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-size: 4rem;
  font-family: var(--primary-text);
  margin-top: 4em;
`;
