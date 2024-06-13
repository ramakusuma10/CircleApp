import { UserEntity } from "../../entities/user";

export type UserSearch = Pick<
  UserEntity,
  "avatar" | "fullname" | "username" | "bio"
> & {
  isFollowed: true;
};
