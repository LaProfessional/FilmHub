import {
  Bell,
  Camera,
  CheckCircle,
  Download,
  Edit,
  Eye,
  Heart,
  Home,
  Lock,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Upload,
  User,
} from "lucide-react";

interface IconEntry {
  name: string;
  icon: React.ElementType;
}

export const PresentIconPalette = () => {
  const icons: IconEntry[] = [
    { name: "Home", icon: Home },
    { name: "Search", icon: Search },
    { name: "Menu", icon: Menu },
    { name: "User", icon: User },
    { name: "Settings", icon: Settings },
    { name: "Bell", icon: Bell },
    { name: "Camera", icon: Camera },
    { name: "Heart", icon: Heart },
    { name: "Star", icon: Star },
    { name: "CheckCircle", icon: CheckCircle },
    { name: "Plus", icon: Plus },
    { name: "Trash2", icon: Trash2 },
    { name: "Edit", icon: Edit },
    { name: "Eye", icon: Eye },
    { name: "Lock", icon: Lock },
    { name: "LogOut", icon: LogOut },
    { name: "Download", icon: Download },
    { name: "Upload", icon: Upload },
  ];

  return (
    <section>
      <h2>Выберите иконку</h2>

      <div className="flex justify-between gap-2 flex-wrap mt-2">
        {icons.map(({ name, icon: Icon }) => (
          <div
            className="border border-solid border-[#d9d9d9] p-2 cursor-pointer"
            key={name}
            title={name}
          >
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
};
