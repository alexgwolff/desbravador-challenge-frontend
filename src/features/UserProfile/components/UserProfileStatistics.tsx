import Text from "../../../components/Text/Text";

type UserProfileInfoStatisticsProps = {
  label: string;
  value: string | number;
};

function UserProfileInfoStatistics(
  props: UserProfileInfoStatisticsProps
): JSX.Element {
  const { label, value } = props;

  return (
    <Text bold>
      {value} {label}
    </Text>
  );
}

export default UserProfileInfoStatistics;
