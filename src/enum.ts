//! enum  is not a recommanded way for mongoose enum schemas

enum StatusType {
  Verified = "verified",
  Unverified = "unverified",
}

enum RolesType {
  Admin = "admin",
  User = "user",
  Editor = "editor",
  Viewer = "viewer",
}

interface UserType {
  status: StatusType;
  roles: RolesType[];
}

const user: UserType = {
  status: StatusType.Unverified,
  roles: [RolesType.User, RolesType.Editor],
};

// ! Alternative and modern way (RECOMANDED)

type AltStatusType = "verified" | "unverified";

const perintStatus = (status: AltStatusType): void => {
  console.log(status);
};

perintStatus("verified");

console.log(user);
