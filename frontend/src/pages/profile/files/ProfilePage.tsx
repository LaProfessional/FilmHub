import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsTab } from './ProfileSettings';
// import { FlagsTab } from './FlagsTab';
// import { CollectionsTab } from './CollectionsTab';
// import { AchievementsTab } from './AchievementsTab';
// import { SettingsTab } from './SettingsTab';

export interface FormData {
  username: string;
  email: string;
  bio: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  socialLinks: string[];
}

export const ProfilePage = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<string>('profile-settings');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    username: 'UserName',
    email: 'gdetytposhta@asdasd.okay',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    socialLinks: ['https://', 'https://'],
  });

  const handleChangeTextData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('форма отправлена', formData);
  };

  const tabs = [
    { id: 'profile-settings', label: t('ProfileSettings') },
    { id: 'flags', label: t('Flags') },
    { id: 'collections', label: t('Collections') },
    { id: 'achievements', label: t('Achievements') },
    { id: 'settings', label: t('Settings') },
  ];

  return (
    <div className="min-h-screen px-4 pt-10 md:pt-[70px] bg-bgPrimary text-colorPrimary">
      <section className=" relative flex w-full flex-col items-center rounded-xl p-8 text-center shadow-md md:h-[200px] bg-secondary md:flex-row md:items-stretch md:px-5 md:text-left">
        <h2 className="sr-only">{t('UserProfileHeader')}</h2>

        <div className="relative h-auto w-full md:h-[200px] md:w-[330px]">
          <img
            src={avatarPreview || './bg.jpg'}
            alt={t('ProfilePicture')}
            className="relative mx-auto h-[200px] w-[200px] rounded-full border-4 border-gray-100 object-cover shadow-lg md:absolute md:left-12 md:h-[210px] md:w-[210px]"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center pt-5 md:pt-[60px]">
          <span className="mb-1 text-3xl font-semibold">{formData.username}</span>
        </div>
      </section>

      <div className="flex w-full flex-col gap-5 py-5 md:flex-row">
        <aside className="w-full md:w-[300px]">
          <div className="h-full rounded-lg bg-secondary p-[30px] shadow-md md:p-5 md:text-center">
            <p className="mb-1.5 text-sm text-primary">
              <span>{formData.email}</span>
            </p>

            <section className="my-3.5">
              <h3 className="mb-2.5 text-base text-primary">{t('AboutMe')}</h3>
              <p className="whitespace-pre-line break-words text-xs leading-snug">
                {formData.bio}
              </p>
            </section>
          </div>
        </aside>

        <div className="flex-1 rounded-lg bg-secondary shadow-md">
          <nav className="flex flex-wrap gap-2 p-4" aria-label="Profile Tabs">
            {tabs.map(tab => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? 'page' : undefined}
                className={activeTab === tab.id ? 'bg-primary text-white' : ''}
              >
                {tab.label}
              </Button>
            ))}
          </nav>

          <section className="p-5">
            {activeTab === 'profile-settings' && (
              <ProfileSettingsTab
                formData={formData}
                handleChangeTextData={handleChangeTextData}
                handleAvatarChange={handleAvatarChange}
                handleSubmit={handleSubmit}
              />
            )}
            {/* {activeTab === 'flags' && <FlagsTab />} */}
            {/* {activeTab === 'collections' && <CollectionsTab />} */}
            {/* {activeTab === 'achievements' && <AchievementsTab />} */}
            {/* {activeTab === 'settings' && <SettingsTab />} */}
          </section>
        </div>
      </div>
    </div>
  );
};
