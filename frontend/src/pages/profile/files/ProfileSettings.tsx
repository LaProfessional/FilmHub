import type { FormData } from './ProfilePage';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import styles from './ProfilePage.module.scss';
import React from 'react';
import { useTranslation } from "react-i18next";

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
  handleSubmit
}) => {
  const { t } = useTranslation();

  const handleTriggerAvatarChange = () => {
    const input = document.getElementById('avatarUpload') as HTMLInputElement | null;
    input?.click();
  };

  return (
    <div className={styles.tabContent}>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <div className={styles.formGroup}>
          <label>{t("Username")}</label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChangeTextData}
            placeholder={t("EnterUsername")}
            variant={'inputCategory'}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("Email")}</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeTextData}
            placeholder={t("EnterYourEmail")}
            variant={'inputCategory'}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("CurrentPassword")}</label>
          <Input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChangeTextData}
            placeholder={t("EnterCurrentPassword")}
            variant={'inputCategory'}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("NewPassword")}</label>
          <Input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChangeTextData}
            placeholder={t("EnterNewPassword")}
            variant={'inputCategory'}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("ConfirmPassword")}</label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangeTextData}
            placeholder={t("RepeatNewPassword")}
            variant={'inputCategory'}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("AboutMe")}</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChangeTextData}
            rows={4}
            className={styles.textareaField}
          />
        </div>
        <div className={styles.formGroup}>
          <label>{t("ProfileAvatar")}</label>
          <div className={styles.avatarUpload}>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
            <Button variant='' children={<span>{t("ChangePhoto")}</span>} onClick={handleTriggerAvatarChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
      <h3>Привязанные аккаунты</h3>
      <div className="flex flex-row justify-between">
        <a href="#" title="Google">
          <img width={20} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
        </a>
        <a href="#" title="VK">
          <img width={20} src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="VK" />
        </a>
        <a href="#" title="Facebook">
          <img width={20} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
        </a>
      </div>
        </div>
        <button type="submit" className={styles.saveButton}>
          {t("SaveChanges")}
        </button>
      </form>
    </div>
  );
};
