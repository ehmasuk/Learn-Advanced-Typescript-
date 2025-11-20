/**
 * ! Omit and Pick will not work for fixed types
 * ! Supporse moderator cannot be admin
 */

// fixed type
type Roles = "admin" | "user" | "editor" | "viewer";

interface Moderator {
  name: string;
  role: Exclude<Roles, "admin">; //? Omit or Pick will not work here
}
