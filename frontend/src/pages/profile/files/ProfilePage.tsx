import { useState } from 'react';
import styles from './ProfilePage.module.scss';

import { Button } from '@/shared/ui/Button';

import { useTranslation } from "react-i18next";

import { ProfileSettingsTab } from './ProfileSettings';
/* при надобности создать и использовать
import { FlagsTab } from './FlagsTab';
import { CollectionsTab } from './CollectionsTab';
import { AchievementsTab } from './AchievementsTab';
import { SettingsTab } from './SettingsTab'; */


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
  const [activeTab, setActiveTab] = useState<string>('profile-settings');
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    username: 'UserName',
    email: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    socialLinks: ['https://', 'https://']
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);


  const handleChangeTextData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



    // для  инпта выбора аватара
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
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImg}>
          {avatarPreview ? (
            <img src={avatarPreview} width="150" alt="Preview" />
          ) : (
            <img src="./bg.jpg" width="150" alt="Profile" />
          )}
        </div>
        <div className={styles.profileNavInfo}>
          <span className={styles.userName}>{formData.username}</span>
        </div>
      </div>

      <div className={styles.mainBd}>
        <div className={styles.leftSide}>
          <div className={styles.profileSide}>
            {/* <p className={styles.mobileNo}><span>{formData.tel}</span></p> */}
            <p className={styles.userMail}><span> {formData.email}</span></p>
            <div className={styles.userBio}>
              <h3>{t("AboutMe")}</h3>
              <p className={styles.bio}>{formData.bio}</p>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.tabNavigation}>
            {tabs.map(tab => (
              <Button
                variant='tabBtn'
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className={styles.profileBody}>
            {activeTab === 'profile-settings' && (
              <ProfileSettingsTab
                formData={formData}
                handleChangeTextData={handleChangeTextData}
                handleAvatarChange={handleAvatarChange}
                handleSubmit={handleSubmit}
              />
            )}
{/*         
            отсальные вкладки отдельными файлами сделать и импортиировать
  
            {activeTab === 'flags' && <FlagsTab />}
            {activeTab === 'collections' && <CollectionsTab />}
            {activeTab === 'achievements' && <AchievementsTab />}
            {activeTab === 'settings' && <SettingsTab />} */}
          </div>
        </div>
      </div>
    </div>
  );
};
