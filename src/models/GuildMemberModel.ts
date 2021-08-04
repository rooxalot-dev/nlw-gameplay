import { UserType } from "./UserModel";

export type GuildMemberModel = {
  user: UserType;
  nick?: string;
};
