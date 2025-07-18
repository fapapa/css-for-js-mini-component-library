/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "0.5rem",
    "--padding": "0rem",
    "--radius": "0.25rem",
  },
  medium: {
    "--height": "0.75rem",
    "--padding": "0rem",
    "--radius": "0.25rem",
  },
  large: {
    "--height": "1rem",
    "--padding": "0.25rem",
    "--radius": "0.5rem",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <ProgressContainer
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={SIZES[size]}
      >
        <Trimmer>
          <ProgressValue value={value} style={SIZES[size]}>
            <VisuallyHidden id="loadinglabel">{value}%</VisuallyHidden>
          </ProgressValue>
        </Trimmer>
      </ProgressContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ProgressContainer = styled.div`
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
`;

const Trimmer = styled.div`
  width: 100%;
  border-radius: calc(var(--radius) - var(--padding));
  overflow: hidden; /* Trim the right side corners when approaching full */
`;

const ProgressValue = styled.div`
  width: ${(props) => props.value}%;
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: calc(var(--radius) - var(--padding)) 0 0
    calc(var(--radius) - var(--padding));
`;

export default ProgressBar;
