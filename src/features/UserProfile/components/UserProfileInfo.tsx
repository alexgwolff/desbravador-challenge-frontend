import Container from "../../../components/Container/Container";
import Text from "../../../components/Text/Text";

import UserProfileInfoStatistics from "./UserProfileStatistics";

type UserProfileInfoProps = {
  username: string;
  name: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
};

function UserProfileInfo(props: UserProfileInfoProps) {
  const { username, name, email, bio, followers, following } = props;

  return (
    <Container gap={0.5} direction="column" alignItems="flex-start">
      <Text bold> {username} </Text>

      <Container direction="column" alignItems="flex-start">
        <Text bold>{name}</Text>
        <Text>{bio}</Text>
        <Text size="small">{email}</Text>
      </Container>

      <Container gap={1}>
        <UserProfileInfoStatistics label="Followers" value={followers} />
        <UserProfileInfoStatistics label="Following" value={following} />
      </Container>
    </Container>
  );
}

export default UserProfileInfo;
