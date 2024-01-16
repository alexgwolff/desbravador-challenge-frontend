import styled from "styled-components";

import type { StyledProps } from "../../helpers/StyledProps";

type TextProps = {
  bold?: boolean;
  size?: "small" | "normal" | "large";
  children: React.ReactNode;
};

const TextContainer = styled.span<StyledProps<TextProps>>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  color: #24292f;

  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  font-size: ${(props) => {
    if (props.$size === "small") return "0.75rem";
    if (props.$size === "normal") return "1rem";
    if (props.$size === "large") return "1.5rem";
  }};
`;

function Text(props: TextProps) {
  const { children, bold, size } = props;

  return (
    <TextContainer $bold={bold} $size={size}>
      {children}
    </TextContainer>
  );
}

export default Text;
