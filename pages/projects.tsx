import Container from "components/Layout/Container";
import { ProjectList } from "components/ProjectList";
import { Paragraph } from "pages/blog";

export default function Testimonials() {
  return (
    <Container title="Projects - Joan Qing Chen">
      <h1>Projects</h1>
      <Paragraph>
        During my coding bootcamp journey with {" "}
        <a
          href={"https://www.schoolofcode.co.uk/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          School of Code
        </a>
        , I have done some team projects. In addition, I am working on my own side projects.
        <br />
        Here are the projects:
      </Paragraph>
      <ProjectList />
    </Container>
  );
}
