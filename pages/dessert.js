import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Dessert() {
  return (
    <>
      <Head>
        <title>Recipes Dessert</title>
      </Head>
      <DessertContainer>
        <DessertText>This is Dessert page</DessertText>
      </DessertContainer>
      <ImageContainer>
        <Image
          src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
          alt="dessert"
          layout="responsive"
          width={2400}
          height={1599}
        />
      </ImageContainer>
    </>
  );
}

const DessertContainer = styled.section`
  display: flex;
  justify-content: center;
`;
const DessertText = styled.p`
  font-size: 2rem;
  font-family: var(--primary-text);
  margin-top: 1em;
`;
const ImageContainer = styled.div`
  margin: 2em 5em;
`;
