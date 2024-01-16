import styled from "styled-components";

import Container from "../../../components/Container/Container";
import Text from "../../../components/Text/Text";

import { ReactComponent as GitIconComponent } from "../assets/git.svg";
import { ReactComponent as StarIconComponent } from "../assets/star.svg";

const GitIcon = styled(GitIconComponent)`
  max-block-size: 2rem;
  max-inline-size: 2rem;

  min-block-size: 2rem;
  min-inline-size: 2rem;
`;

const StarIcon = styled(StarIconComponent)`
  max-block-size: 1.5rem;
  max-inline-size: 1.5rem;

  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
`;

export type UserRepoInfoProps = {
  name: string;
  id: string;
  description: string;
  stars: number;
};

const UserRepoInfoContainer = styled(Container)`
  border-radius: 0.5rem;
  block-size: fit-content;
  inline-size: -webkit-fill-available;
  padding: 0.5rem;

  cursor: pointer;

  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);

  &:hover {
    background-color: #c1c1c1;
  }
`;

function UserRepoInfo(props: UserRepoInfoProps) {
  const { name, description, stars } = props;

  return (
    <UserRepoInfoContainer
      gap={1}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
    >
      <Container justifyContent="space-between" gap={1}>
        <Container direction="row" gap={2}>
          <GitIcon />
          <Container direction="column" alignItems="flex-start">
            <Text bold>{name}</Text>
            <Text>{description}</Text>
          </Container>
        </Container>
        <Container>
          <StarIcon />
          <Text bold>{stars}</Text>
        </Container>
      </Container>
    </UserRepoInfoContainer>
  );
}

export default UserRepoInfo;
