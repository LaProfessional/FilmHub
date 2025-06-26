import type { FormData } from './ProfilePage';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import styles from './ProfilePage.module.scss';
import React from 'react';

interface Props {
  formData: FormData;
  handleChangeTextData: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const handleTriggerAvatarChange = () => {
  const input = document.getElementById('avatarUpload') as HTMLInputElement | null;
  input?.click();
};

export const ProfileSettingsTab: React.FC<Props> = ({
  formData,
  handleChangeTextData,
  handleAvatarChange,
  handleSubmit
}) => (
  <div className={styles.tabContent}>
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <div className={styles.formGroup}>
        <label>Имя пользователя</label>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChangeTextData}
          placeholder="Введите имя пользователя"
          variant={'inputCategory'}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Электронная почта</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeTextData}
          placeholder="Введите электронную почту"
          variant={'inputCategory'}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Текущий пароль</label>
        <Input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChangeTextData}
          placeholder="Введите текущий пароль"
          variant={'inputCategory'}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Новый пароль</label>
        <Input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChangeTextData}
          placeholder="Введите новый пароль"
          variant={'inputCategory'}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Подтвердите пароль</label>
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChangeTextData}
          placeholder="Повторите новый пароль"
          variant={'inputCategory'}
        />
      </div>
      <div className={styles.formGroup}>
        <label>О себе</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChangeTextData}
          rows={4}
          className={styles.textareaField}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Аватар профиля</label>
        <div className={styles.avatarUpload}>


      <input
        type="file"
        id="avatarUpload"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
      <Button variant='' children={<span>Изменить фото</span>} onClick={handleTriggerAvatarChange}/>
        




        </div>
      </div>
      <div className={styles.formGroup}>
        <label>Привязанные аккаунты</label>
        <div className={styles.connectedAccounts}>
          <div className={styles.accountItem}>
            <span> Google </span>
            <button onClick={()=>alert('hehe')} className={styles.connectBtn} type="button">Привязать</button>
          </div>
          <div className={styles.accountItem}>
            <span>Facebook</span>
            <button onClick={()=>alert('not hehe')} className={styles.connectBtn} type="button">Привязать</button>
          </div>
          <div className={styles.accountItem}>
            <span>ВКонтакте</span>
            <button onClick={()=>alert('hehe')} className={styles.connectBtn} type="button">Привязать</button>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.saveButton}>
        Сохранить изменения
      </button>
    </form>
  </div>
);
