import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg";

export function Logo() {
  return (
    <div className="flex gap-2">
      <LogoSvg />
      <h2>FilmHub</h2>
    </div>
  );
}
