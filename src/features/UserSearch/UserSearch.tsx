import * as React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";

import { ReactComponent as GitHubIconComponent } from "./assets/Github.svg";

const GithubIcon = styled(GitHubIconComponent)`
  inline-size: 10rem;
  block-size: 10rem;
`;

function UserSearch() {
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = React.useState("");

  const handlerOnChange = (value: string) => {
    setUserSearch(value);
  };

  const handlerOnSearch = () => {
    setUserSearch(userSearch);
    navigate(`/user/${userSearch}`);
  };

  return (
    <Container
      direction="column"
      gap={2}
      onPressEnter={handlerOnSearch}
      fullHeight
      fullWidth
    >
      <Text bold size="large">
        GitHub User Profile
      </Text>
      <GithubIcon />
      <Container direction="column" gap={2} padding={1}>
        <Input
          value={userSearch}
          placeholder="Type username"
          onChange={handlerOnChange}
        />
        <Button
          onPress={handlerOnSearch}
          label="Search"
          disabled={!userSearch}
        />
      </Container>
    </Container>
  );
}

export default UserSearch;
