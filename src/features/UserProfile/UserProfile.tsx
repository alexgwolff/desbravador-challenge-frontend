import * as React from "react";

import useSWR from "swr";

import { useParams } from "react-router-dom";

import UserAvatar from "./components/UserAvatar";
import UserProfileInfo from "./components/UserProfileInfo";

import { getUserProfile, type Repo } from "./UserProfileAPI";

import UserRepoList from "./components/UserRepoList";

import Container from "../../components/Container/Container";
import Filter from "../../components/Filter/Filter";

function sortRepoByStars(
  repoA: Repo,
  repoB: Repo,
  order: "asc" | "desc"
): number {
  if (order === "asc") {
    return repoA.stargazers_count - repoB.stargazers_count;
  }

  return repoB.stargazers_count - repoA.stargazers_count;
}

const UserProfile = () => {
  const { username } = useParams();

  const [order, setOrder] = React.useState<"asc" | "desc">("asc");

  const handlerOnChangeFilter = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const response = useSWR("/api/user", () => getUserProfile(username), {
    suspense: true,
  });

  const data = React.useMemo(() => {
    const result = response.data.data;

    if (result) {
      return {
        ...result,
        repos: result.repos.sort((repoA, repoB) =>
          sortRepoByStars(repoA, repoB, order)
        ),
      };
    }
  }, [response, order]);

  return (
    <Container
      direction="column"
      fullHeight
      gap={2}
      padding={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      overflow="hidden"
    >
      {data && (
        <>
          <Container gap={1} alignItems="flex-start">
            <UserAvatar src={data.avatar_url} />
            <UserProfileInfo
              bio={data.bio}
              email={data.email}
              name={data.name}
              username={data.login}
              followers={data.followers}
              following={data.following}
            />
          </Container>
          <Container fullWidth justifyContent="flex-end">
            <Filter
              label="Sort"
              order={order}
              onPress={handlerOnChangeFilter}
            />
          </Container>

          <UserRepoList repos={data.repos} />
        </>
      )}
    </Container>
  );
};

export default UserProfile;
