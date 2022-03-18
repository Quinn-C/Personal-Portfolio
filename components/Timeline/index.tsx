import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

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
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <br/>
      <h3>Education</h3>
      <Year>University of Liverpool</Year>
      <ul>
        <Step title="Sep 2016 - Sep 2017 | Liverpool, UK  ">
        M.S. in Operations and Supply Chain Management | Merit
        </Step>
      </ul>
      <Divider />
      <Year>Jiangnan University</Year>
      <ul>
        <Step title="Sep 2012 - June 2016 | Wuxi, China  ">
        B.S in Chemical Engineering |  2:1      
        </Step>
      </ul>
      <br/>
    </>
  );

  return (
    <>
      <h3>Professional Experience</h3>
      <Year>MeSign Technology Limited - Business Operations Manager </Year>
      <h5>Dec 2018 - Jul 2021 | Reading, UK</h5>
      <ul>
        <Step title="Trained onboarding employees on the company's products and services. ">
        </Step>
        <Step title="Led a customer facing team of 3 in an agile way. ">
        </Step>
        <Step title="At the same time, directed sales, technical support, compliance, and risk analysis of international markets.
">
        </Step>
      </ul>
      <Divider />
      <Year>Huawei Technologies (UK) Co., Ltd. - Project Management Specialist </Year>
      <h5>Nov 2017- Aug 2018 | Reading, UK</h5>
      <ul>
        <Step title="Used ERP system and PowerBI to manage the consistency of inventory accounting goods for multiple projects. ">
        </Step>
        <Step title="Trained site engineers on accounting on-site inventories by using internal applications.  ">
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
