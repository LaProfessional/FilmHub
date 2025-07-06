export type UserInfoShortProps = {
  name: string;
  email: string;
};

export function UserInfoShort(props: UserInfoShortProps) {
  const { name, email } = props;

  return (
    <section className="flex flex-col justify-start items-start">
      <div className="text-4xl">{name}</div>
      <div className="text-sm">{email}</div>
    </section>
  );
}
