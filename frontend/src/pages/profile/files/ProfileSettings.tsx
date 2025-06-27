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
          <label>{t("LinkedAccounts")}</label>
          <div className={styles.connectedAccounts}>
            <div className={styles.accountItem}>
              <span>Google</span>
              <button onClick={() => alert('hehe')} className={styles.connectBtn} type="button">
                {t("Connect")}
              </button>
            </div>
            <div className={styles.accountItem}>
              <span>Facebook</span>
              <button onClick={() => alert('not hehe')} className={styles.connectBtn} type="button">
                {t("Connect")}
              </button>
            </div>
            <div className={styles.accountItem}>
              <span>ВКонтакте</span>
              <button onClick={() => alert('hehe')} className={styles.connectBtn} type="button">
                {t("Connect")}
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.saveButton}>
          {t("SaveChanges")}
        </button>
      </form>
    </div>
  );
};
