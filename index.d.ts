export interface User {
  id: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  profileImageUrl: string | null;
  email: string | null;
  phone: string | null;
  expriesAt: Date;
  createdAt: Date;
}

export interface UserInfo {
  sessionId: string | null;
  user: User | null;
}
