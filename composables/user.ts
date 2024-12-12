import {type User} from "@prisma/client"

export const useUser = () => useState<User & { type: "admin" | "user" } | null | undefined>("user");

export const fetchUser = async () => {
  const user = useUser();
  const data = await $fetch<{ user: User }>("/api/me", {
    credentials: "include",
    headers: useRequestHeaders(),
  });
  user.value = data.user;
  return data.user
};