export type UserInfoShortProps = {
  name: string;
  email: string;
};

export function UserInfoShort(props: UserInfoShortProps) {
  const { name, email } = props;

  return (
    <section className="flex flex-col justify-start items-start bg-white">
      <div className="text-4xl">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-50">{email}</div>
    </section>
  );
}
