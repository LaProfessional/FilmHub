import { flagModel, FlagBage } from "@/entities/flags";
import { FlagAddModal } from "@/features/flag-add-modal/ui/FlagAddModal";

export function StoryLevel() {
  const flags = flagModel.getAllFlags();

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-2">
        {flags.map((flag, index) => (
          <li className="" key={index}>
            <FlagBage {...flag} />
          </li>
        ))}
      </ul>

      <FlagAddModal />
    </div>
  );
}
