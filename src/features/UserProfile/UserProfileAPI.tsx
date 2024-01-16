const GIT_HUB_API_HEADERS = {
  "X-GitHub-Api-Version": "2022-11-28",
};

export type ResultOrData<T> =
  | { ok: true; data: T }
  | { ok: false; data?: undefined };

export type UserProfileInfo = {
  login: string;
  name: string;
  email: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
};

export type Repo = {
  name: string;
  id: string;
  description: string;
  full_name: string;
  stargazers_count: number;
};

export type UserProfile = UserProfileInfo & { repos: Repo[] };

export async function getUserProfileInfo(
  username: string
): Promise<ResultOrData<UserProfileInfo>> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { ...GIT_HUB_API_HEADERS },
    });

    if (!response.ok) {
      return { ok: false };
    }

    const data = await response.json();
    return { ok: true, data };
  } catch (error) {
    return { ok: false };
  }
}

export async function getUserRepos(
  username: string
): Promise<ResultOrData<Repo[]>> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: { ...GIT_HUB_API_HEADERS },
      }
    );

    if (!response.ok) {
      return { ok: false };
    }

    const data = await response.json();

    return { ok: true, data };
  } catch (error) {
    return { ok: false };
  }
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type getUserProfileReturn = ResultOrData<UserProfile>;

export async function getUserProfile(
  username: string
): Promise<getUserProfileReturn> {
  const [getUserProfileRequest, getUserReposRequest] = await Promise.all([
    getUserProfileInfo(username),
    getUserRepos(username),
    wait(600),
  ]);

  if (getUserProfileRequest.ok && getUserReposRequest.ok) {
    return {
      ok: true,
      data: {
        ...getUserProfileRequest.data,
        repos: getUserReposRequest.data,
      },
    };
  }

  return { ok: false };
}
