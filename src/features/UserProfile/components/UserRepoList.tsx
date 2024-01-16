import Container from "../../../components/Container/Container";

import UserRepoInfo from "./UserRepoInfo";

import type { Repo } from "../UserProfileAPI";

type UserRepoListProps = { repos: Repo[] };

function UserRepoList(props: UserRepoListProps) {
  const { repos } = props;

  return (
    <Container
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      gap={1}
      overflowY="auto"
      overflowX="hidden"
      fullHeight
      fullWidth
    >
      {repos.map((repo) => (
        <UserRepoInfo
          key={repo.id}
          id={repo.id}
          name={repo.full_name}
          description={repo.description}
          stars={repo.stargazers_count}
        />
      ))}
    </Container>
  );
}

export default UserRepoList;
