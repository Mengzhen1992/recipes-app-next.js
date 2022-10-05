import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Veggie() {
  return (
    <>
      <Head>
        <title>Recipes Veggie</title>
      </Head>
      <VeggieTextContainer>
        <VeggieText>This is Veggie page</VeggieText>
      </VeggieTextContainer>
      <ImageContainer>
        <Image
          src="/images/unsplash.jpg"
          alt="unsplash"
          layout="responsive"
          width={2400}
          height={1596}
        />
      </ImageContainer>
    </>
  );
}

const VeggieTextContainer = styled.section`
  display: flex;
  justify-content: center;
`;
const VeggieText = styled.p`
  font-size: 2rem;
  font-family: var(--primary-text);
  margin-top: 1em;
`;

const ImageContainer = styled.div`
  margin: 2em 5em;
`;
