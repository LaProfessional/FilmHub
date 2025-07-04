import type { FormData } from './ProfilePage';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import styles from './ProfileSettings.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Textarea } from '@/shared/ui/Textarea';

import { ReactComponent as VkIcon} from '@/shared/assets/profile/vk.svg';
import { ReactComponent as FacebookIcon} from '@/shared/assets/profile/facebook.svg';
import { ReactComponent as GoogleIcon} from '@/shared/assets/profile/google.svg';

interface Props {
  formData: FormData;
  handleChangeTextData: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const ProfileSettingsTab: React.FC<Props> = ({
  formData,
  handleChangeTextData,
  handleAvatarChange,
  handleSubmit,

}) => {
  const { t } = useTranslation();

  const handleTriggerAvatarChange = () => {
    const input = document.getElementById('avatarUpload') as HTMLInputElement | null;
    input?.click();
  };

  return (
    <section className={styles.tabContent}>
      <h3 className={styles.hidden}>{t('ProfileSettings')}</h3>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <div className={styles.profileSettingsContentCell}>
          <label>{t('Username')}</label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChangeTextData}
            placeholder={t('EnterUsername')}
            variant={'inputCategory'}
          />
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('Email')}</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeTextData}
            placeholder={t('EnterYourEmail')}
            variant={'inputCategory'}
          />

        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('CurrentPassword')}</label>
          <Input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChangeTextData}
            placeholder={t('EnterCurrentPassword')}
            variant={'inputCategory'}
          />
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('NewPassword')}</label>
          <Input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChangeTextData}
            placeholder={t('EnterNewPassword')}
            variant={'inputCategory'}
          />
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('ConfirmPassword')}</label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangeTextData}
            placeholder={t('RepeatNewPassword')}
            variant={'inputCategory'}
          />
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('AboutMe')}</label>
          <Textarea
            variant='descriptionMovie'
            value={formData.bio}
            onChange={handleChangeTextData}
            rows={4} 
          />
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t('ProfileAvatar')}</label>
          <div className={styles.avatarUpload}>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
            <Button variant="uploadButton" onClick={handleTriggerAvatarChange}>
              <span>{t('ChangePhoto')}</span>
            </Button>
          </div>
        </div>

        <div className={styles.profileSettingsContentCell}>
          <label>{t("LinkedAccounts")}</label>
          <div className={styles.LinkedIconsContainer}>
            <a href="#" title="Google">
               <GoogleIcon width={30} style={{ filter:'grayscale(100%) brightness(0.7)' }} />
            </a>
            <a href="#" title="VK">
              <VkIcon width={30} height={30} style={{ filter:'grayscale(100%) brightness(0.7)' }} />
            </a>
            <a href="#" title="Facebook">
              <FacebookIcon width={30} style={{ filter:'grayscale(100%) brightness(0.7)' }}/>
            </a>
            
          </div>
        </div>

        <Button variant="uploadButton">
          {t('SaveChanges')}
        </Button>
      </form>
    </section>
  );
};
