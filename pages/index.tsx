import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
//import { Posts } from "components/Posts";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/profile-jc.png";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Joan Qing Chen</h1>
          <h2>Full Stack Software Engineer</h2>
          <p>
          Hi there, I am a coding Bootcamp graduate with an engineering academic background and a passion in technology.
          <br/>
          <br/>
          Having been working in tech companies for 3 years, I have seen how greatly technology enables businesses and people to solve problems. I was inspired to be a software engineer as my future career path, so I can develop or create solutions to problems.  –&nbsp;
            {" while you're here "}
            <Link href="/about-me">
              <a>learn more about me.</a>
            </Link>
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Lasha"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Projects />
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
