import { useState } from 'react';
import styles from './ProfilePage.module.scss';

import { Button } from '@/shared/ui/Button';


import { ProfileSettingsTab } from './ProfileSettings';
/* при надобности создать и использовать
import { FlagsTab } from './FlagsTab';
import { CollectionsTab } from './CollectionsTab';
import { AchievementsTab } from './AchievementsTab';
import { SettingsTab } from './SettingsTab'; */

// по хорошему надо бы запихнуть в интерфейсы
export interface FormData {
  username: string;
  email: string;
  bio: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  socialLinks: string[];
  city?: string;
  country?: string;
  tel?: string;
}


export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile-settings');

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    bio: '',
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
    { id: 'profile-settings', label: 'Настройка профиля' },
    { id: 'flags', label: 'Флаги' },
    { id: 'collections', label: 'Коллекции' },
    { id: 'achievements', label: 'Достижения' },
    { id: 'settings', label: 'Настройки' },
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
{/*          Доп инфа в шапке профиля опционально 
            <div className={styles.address}>
            <p className={styles.state}>{formData.city}</p>
            <span className={styles.country}>{formData.country}</span>
          </div> */}
        </div>
      </div>

      <div className={styles.mainBd}>
        <div className={styles.leftSide}>
          <div className={styles.profileSide}>
            {/* <p className={styles.mobileNo}><span>{formData.tel}</span></p> */}
            <p className={styles.userMail}><span> {formData.email}</span></p>
            <div className={styles.userBio}>
              <h3>О себе</h3>
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
