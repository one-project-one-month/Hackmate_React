export type ProjectRole = {
  id: number;
  label: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  type: string;
  image_url: string | null;
  github_repo: string | null;
  created_by_user_id: number;
  is_active: boolean;
  like_count: number;
  dislike_count: number;
  required_roles: (ProjectRole | string)[];
  created_at: string;
  updated_at: string;
};

export type ActionType = "delete" | "leave" | null;
