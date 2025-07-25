import { useTranslation } from 'react-i18next';

interface Props {
  avatarPreview: string | null;
  username: string;
}

export function ProfileHeader({ avatarPreview, username }: Props) {
  const { t } = useTranslation();

  return (
    <section className="relative flex w-full flex-col items-center rounded-xl p-8 text-center shadow-md md:h-[200px] bg-secondary md:flex-row md:items-stretch md:px-5 md:text-left">
      <h2 className="sr-only">{t('UserProfileHeader')}</h2>

      <div className="relative h-auto w-full md:h-[200px] md:w-[330px]">
        <img
          src={avatarPreview || './bg.jpg'}
          alt={t('ProfilePicture')}
          className="relative mx-auto h-[200px] w-[200px] rounded-full border-4 border-gray-100 object-cover shadow-lg md:absolute md:left-12 md:h-[210px] md:w-[210px]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center pt-5 md:pt-[60px]">
        <span className="mb-1 text-3xl font-semibold">{username}</span>
      </div>
    </section>
  );
}
