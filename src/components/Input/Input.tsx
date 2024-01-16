import styled from "styled-components";

const InputNative = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

type InputProps = {
  value?: string;
  placeholder?: string;
  onEnter?: (value: string) => void;
  onChange?: (value: string) => void;
};

function Input(props: InputProps) {
  const { value, placeholder, onChange, onEnter } = props;

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handlerOnPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter?.(event.currentTarget.value);
    }
  };

  return (
    <InputNative
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handlerOnChange}
      onKeyUp={handlerOnPress}
    />
  );
}

export default Input;
