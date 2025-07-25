import { useTranslation } from 'react-i18next';

interface Props {
  email: string;
  bio: string;
}

export function ProfileSidebar({ email, bio }: Props) {
  const { t } = useTranslation();

  return (
    <aside className="w-full md:w-[300px]">
      <div className="h-full rounded-lg bg-secondary p-[30px] shadow-md md:p-5 md:text-center">
        <p className="mb-1.5 text-sm text-primary">
          <span>{email}</span>
        </p>

        <section className="my-3.5">
          <h3 className="mb-2.5 text-base text-primary">{t('AboutMe')}</h3>
          <p className="whitespace-pre-line break-words text-xs leading-snug">
            {bio}
          </p>
        </section>
      </div>
    </aside>
  );
}
