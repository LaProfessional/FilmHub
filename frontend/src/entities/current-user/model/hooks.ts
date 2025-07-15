import { useSelector } from "react-redux";
import { selectUserInfo } from "./currentUserSlice";

export function useCurrentUser() {
  const user = useSelector(selectUserInfo);

  return user;
}
