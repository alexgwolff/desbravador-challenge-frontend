import styled, { css } from "styled-components";

import type { StyledProps } from "../../helpers/StyledProps";

type ContainerProps = {
  gap?: number;
  direction?: "column" | "row";

  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";

  alignContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "space-between"
    | "space-around"
    | "space-evenly";

  justifyItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";

  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "space-between"
    | "space-around"
    | "space-evenly";

  fullWidth?: boolean;
  fullHeight?: boolean;

  overflow?: "hidden" | "scroll" | "auto" | "visible";
  overflowX?: "hidden" | "scroll" | "auto" | "visible";
  overflowY?: "hidden" | "scroll" | "auto" | "visible";

  padding?: number;

  children: React.ReactNode;
  onPressEnter?: () => void;
  onClick?: () => void;
  className?: string;
};

const ContainerWrapper = styled.div<StyledProps<ContainerProps>>`
  display: flex;
  gap: ${(props) => props.$gap}rem;

  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
  ${({ $overflowX }) => $overflowX && `overflow-x: ${$overflowX};`}
  ${({ $overflowY }) => $overflowY && `overflow-y: ${$overflowY};`}
  ${({ $padding }) => $padding && `padding: ${$padding}rem;`}
  ${({ $alignContent }) => $alignContent && `align-content: ${$alignContent};`}
  ${({ $alignItems }) => $alignItems && `align-items: ${$alignItems};`}
  ${({ $justifyItems }) => $justifyItems && `justify-items: ${$justifyItems};`}
  ${({ $justifyContent }) =>
    $justifyContent && `justify-content: ${$justifyContent};`}


  ${({ $direction }) =>
    $direction &&
    css`
      flex-direction: ${$direction};
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      inline-size: 100%;
    `}


  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      block-size: 100%;
    `}
`;

function Container(props: ContainerProps) {
  const {
    gap = 0,
    padding = 0,
    alignContent = "center",
    alignItems = "center",
    justifyContent = "center",
    justifyItems,
    fullHeight = false,
    fullWidth = false,
    overflow,
    overflowX,
    overflowY,
    direction,
    children,
    className,
    onPressEnter,
    onClick,
  } = props;

  const handlerOnPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onPressEnter?.();
    }
  };

  return (
    <ContainerWrapper
      className={className}
      onKeyUp={handlerOnPressEnter}
      onClick={onClick}
      $padding={padding}
      $gap={gap}
      $direction={direction}
      $alignContent={alignContent}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $justifyItems={justifyItems}
      $fullHeight={fullHeight}
      $fullWidth={fullWidth}
      $overflow={overflow}
      $overflowX={overflowX}
      $overflowY={overflowY}
    >
      {children}
    </ContainerWrapper>
  );
}

export default Container;
