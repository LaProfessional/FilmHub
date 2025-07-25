import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsTab } from './ProfileSettingsTab';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  formData: any;
  handleChangeTextData: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function ProfileMain({
  activeTab,
  setActiveTab,
  formData,
  handleChangeTextData,
  handleAvatarChange,
  handleSubmit,
}: Props) {
  const { t } = useTranslation();

  const tabs = [
    { id: 'profile-settings', label: t('ProfileSettings') },
    { id: 'flags', label: t('Flags') },
    { id: 'collections', label: t('Collections') },
    { id: 'achievements', label: t('Achievements') },
    { id: 'settings', label: t('Settings') },
  ];

  return (
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
  );
}
