import type { FormData } from './ProfilePage';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as VkIcon } from '@/shared/assets/profile/vk.svg';
import { ReactComponent as FacebookIcon } from '@/shared/assets/profile/facebook.svg';
import { ReactComponent as GoogleIcon } from '@/shared/assets/profile/google.svg';

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


const inputFields = [
  { label: t('Username'), type: 'text', name: 'username', value: formData.username, placeholder: t('EnterUsername') },
  { label: t('Email'), type: 'email', name: 'email', value: formData.email, placeholder: t('EnterYourEmail') },
  { label: t('CurrentPassword'), type: 'password', name: 'currentPassword', value: formData.currentPassword, placeholder: t('EnterCurrentPassword') },
  { label: t('NewPassword'), type: 'password', name: 'newPassword', value: formData.newPassword, placeholder: t('EnterNewPassword') },
  { label: t('ConfirmPassword'), type: 'password', name: 'confirmPassword', value: formData.confirmPassword, placeholder: t('RepeatNewPassword') },
];


  return (
    <section className="p-4">
      <h3 className="sr-only">{t('ProfileSettings')}</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-5"
      >

        {inputFields.map(Field=>{
          return(
            <div className="flex-1 mb-3.5 md:basis-[calc(50%-10px)] w-full md:w-auto">
              <label className="block mb-2 min-w-[250px] font-semibold text-primary text-xl">
                {Field.label}
              </label>
              <Input
                type={Field.type}
                name={Field.name}
                value={Field.value}
                onChange={handleChangeTextData}
                placeholder={Field.placeholder}
              />
            </div>
          )
        })}


        <div className="flex-1 mb-3.5 md:flex-[1_1_calc(50%-0.625rem)] w-full md:w-auto">
          <label className=" block mb-2 min-w-[250px] font-semibold text-primary text-xl">
            {t('AboutMe')}
          </label>
          <Textarea
            value={formData.bio}
            onChange={handleChangeTextData}
            rows={4}
          />
        </div>


        <div className="flex-1 mb-3.5 md:flex-[1_1_calc(50%-0.625rem)] w-full md:w-auto">
          <label className=" block mb-2 min-w-[250px] font-semibold text-primary text-xl">
            {t('ProfileAvatar')}
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <Button type="button" onClick={handleTriggerAvatarChange}>
              <span>{t('ChangePhoto')}</span>
            </Button>
          </div>
        </div>


        <div className="flex-1 mb-3.5 md:flex-[1_1_calc(50%-0.625rem)] w-full md:w-auto">
          <label className=" block mb-2 min-w-[250px] font-semibold text-primary text-xl">
            {t('LinkedAccounts')}
          </label>
          <div className="flex items-center mt-2">
            <a href="#" title="Google" className="pr-8">
              <GoogleIcon width={30} style={{ filter: 'grayscale(100%) brightness(0.7)' }} />
            </a>
            <a href="#" title="VK" className="pr-8">
              <VkIcon width={30} height={30} style={{ filter: 'grayscale(100%) brightness(0.7)' }} />
            </a>
            <a href="#" title="Facebook" className="pr-8">
              <FacebookIcon width={30} style={{ filter: 'grayscale(100%) brightness(0.7)' }} />
            </a>
          </div>
        </div>

        <div className="w-full">
          <Button type="submit">{t('SaveChanges')}</Button>
        </div>
      </form>
    </section>
  );
};
