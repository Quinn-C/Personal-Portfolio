import Container from "components/Layout/Container";
import { Paragraph } from "pages/blog";
import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";
import { ChildrenStringProps } from "lib/types";

const Step = ({ title, children }: ChildrenStringProps) => (
  <StepLi>
    <div>
      <svg viewBox="0 0 24 24">
        <g
          fill="none"
          stroke={COLOR_SPOTIFY_GREEN}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </g>
      </svg>
      <h5>{title}</h5>
    </div>
    <p>{children}</p>
  </StepLi>);

export default function AboutMe() {
  
  return (
    <Container title="About me - Joan Qing Chen">
      <h1>Facts about me</h1>
      <ul>
        <Step title="I am based in Reading now, and have been living in the UK for 6 years.">
        </Step>
      </ul>
      <ul>
        <Step title="Currently, I’m learning about Python, Data structure, Algorithms and Unity.">
        </Step>
      </ul>
      <ul>
        <Step title="One thing I know I do better than most is explaining stuff to people who don't know it.">
        </Step>
      </ul>
      <ul>
        <Step title="One thing I cannot live without is yoga and meditation.">
        </Step>
      </ul>
      <ul>
        <Step title="An accomplishment I’m proud of is keeping a healthy diet and exercise daily.">
        </Step>
      </ul>
      <ul>
        <Step title="I love birds and visit the Bird World based in Surrey several times a year. ">
        </Step>
      </ul>
      <p>More facts and lovely pictures will come soon...</p>
    </Container>
  );
}
