import styled from "styled-components";
import Container from "components/Layout/Container";
//import { Posts } from "components/Posts";

export default function Blog() {
  return (
    <Container title="Blog - Joan Qing Chen">
      <h1>Blog</h1>
      <Paragraph>
        When I started my journey in the coding bootcamp, I found out writing down what I have learned every day or week is a great way to cement my knowledge. 
        {" "}
        <br />
        Initially, I started the 100DaysOfCodeChallenge on Twitter, but gradually I found I want to write down more details in different topics of what I have learned in a frequncy of weeks. So I decided to write blogs to record my code learning journey after graduating from the bootcamp.

        <br />

        Blogs will be here soon!
      </Paragraph>
      {/* <Posts title="All Stories" /> */}
    </Container>
  );
}

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
