import { z } from "zod";

export const createProjectSchema = z.object({
  title: z
    .string()
    .min(1, "Project name is required")
    .max(100, "Project name must be under 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description must be under 1000 characters"),
  type: z.string().min(1, "Select at least one platform"),
  github_repo: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  is_active: z.boolean(),
  required_roles: z
    .array(z.string())
    .min(1, "Select at least one role"),
});

export type CreateProjectValues = z.infer<typeof createProjectSchema>;
