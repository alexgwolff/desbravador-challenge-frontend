import styled from "styled-components";

import Container from "../Container/Container";
import Text from "../Text/Text";

import { ReactComponent as ArrowAscComponent } from "./ArrowAsc.svg";
import { ReactComponent as ArrowDescComponent } from "./ArrowDesc.svg";

const FilterContainer = styled(Container)`
  background-color: #f6f8fa;
  padding: 0.5rem;
  min-width: 1rem;
  width: fit-content;
  border: 1px solid rgba(31, 35, 40, 0.15);
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    outline-style: solid;
    outline-color: #0366d6;
    outline-offset: 0.1rem;
  }
`;

const ArrowAsc = styled(ArrowAscComponent)`
  inline-size: 1rem;
  block-size: 1rem;
`;

const ArrowDesc = styled(ArrowDescComponent)`
  inline-size: 1rem;
  block-size: 1rem;
`;

type FilterProps = {
  label: string;
  order: "asc" | "desc";
  onPress?: () => void;
};

function Filter(props: FilterProps) {
  const { label, order, onPress } = props;

  return (
    <FilterContainer onClick={onPress} gap={0.5}>
      <Text bold> {label} </Text>
      {order === "asc" && <ArrowAsc />}
      {order === "desc" && <ArrowDesc />}
    </FilterContainer>
  );
}

export default Filter;
