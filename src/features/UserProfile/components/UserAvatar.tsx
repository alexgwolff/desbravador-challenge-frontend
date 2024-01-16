import styled from "styled-components";

const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 8rem;
  block-size: 8rem;
`;

const UserImg = styled.img`
  border-radius: 2rem;

  inline-size: inherit;
  block-size: inherit;
`;

type UserAvatarProps = {
  src: string;
};

function UserAvatar(props: UserAvatarProps): JSX.Element {
  const { src } = props;

  return (
    <UserAvatarContainer>
      <UserImg alt="Avatar" src={src} />
    </UserAvatarContainer>
  );
}

export default UserAvatar;
