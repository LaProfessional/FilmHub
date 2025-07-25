import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSidebar } from './ProfileSidebar';
import { ProfileMain } from './ProfileBody';

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
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    username: 'UserName',
    email: 'gdetytposhta@asdasd.okay',
    bio: 'Lorem ipsum dolor sit amet...',
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

  return (
    <div className="min-h-screen px-4 pt-10 md:pt-[70px] bg-bgPrimary text-colorPrimary">
      <ProfileHeader avatarPreview={avatarPreview} username={formData.username} />
      <div className="flex w-full flex-col gap-5 py-5 md:flex-row">
        <ProfileSidebar email={formData.email} bio={formData.bio} />
        <ProfileMain
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          handleChangeTextData={handleChangeTextData}
          handleAvatarChange={handleAvatarChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
