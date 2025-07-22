import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      "--height": "24px",
      "--icon-size": 16,
      "--padding-left": "24px",
      "--border-bottom": `1px solid ${COLORS.black}`,
      "--font-size": "14px",
    },
    large: {
      "--height": "36px",
      "--icon-size": 24,
      "--padding-left": "36px",
      "--border-bottom": `2px solid ${COLORS.black}`,
      "--font-size": "18px",
    },
  };

  return (
    <Wrapper style={SIZES[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={SIZES[size]["--icon-size"]} />
      <Input placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
  width: ${(props) => props.width}px;
  height: var(--height);
  padding-left: var(--padding-left);
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
}
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
