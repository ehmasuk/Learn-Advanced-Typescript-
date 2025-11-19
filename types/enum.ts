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

console.log(user);
