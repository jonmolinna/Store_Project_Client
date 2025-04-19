enum Role {
  USER = "user",
  ADMIN = "admin",
}

interface Profile {
  id: number;
  username: string;
  name: string;
  roles: Array<Role>;
}

interface Error {
  id: number;
  message: string;
}

export interface ProfileState {
  profile: Profile | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: Error | null;
}

export interface ProfileResponse {
    id: number;
    username: string;
    name: string;
    roles: Array<Role>;
}
