import styled from "styled-components";

import Text from "../Text/Text";

const ButtonNative = styled.button`
  inline-size: fit-content;
  block-size: fit-content;

  border-radius: 0.5rem;
  padding: 0.5rem;

  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`;

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

function Button(props: ButtonProps) {
  const { label, disabled, onPress } = props;

  return (
    <ButtonNative onClick={onPress} disabled={disabled}>
      <Text bold>{label}</Text>
    </ButtonNative>
  );
}

export default Button;
