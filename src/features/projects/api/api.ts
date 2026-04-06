import { api } from "@/lib/axios";
import type { Project } from "@/features/projects/types/projectModel";
import type { CreateProjectValues } from "@/features/projects/types/createProjectSchema";

// Helper to robustly extract arrays from Laravel responses (handles pagination, wrapper objects, etc)
const extractArray = (data: any): Project[] => {
  if (Array.isArray(data)) return data;
  if (data?.content && Array.isArray(data.content)) return data.content;
  if (data?.content?.data && Array.isArray(data.content.data)) return data.content.data;
  if (data?.data && Array.isArray(data.data)) return data.data;
  return [];
};

// Browse page feed — recommended projects
export const getFeedProjects = async (): Promise<Project[]> => {
  const response = await api.get("/feed");
  return extractArray(response.data);
};

// My created projects
export const getMyProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects/own");
  return extractArray(response.data);
};

// All projects (joined + created — for the "Joined" tab)
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get("/projects");
    return extractArray(response.data);
  } catch (error) {
    console.warn("Backend missing /projects route (ProjectController@index). Returning empty joined projects for now.");
    return []; // Graceful fallback
  }
};

// Like a project (metric for recommendation algo)
export const likeProject = async (projectId: number): Promise<void> => {
  await api.post("/feed/metric/like", { project_id: projectId });
};

// Dislike a project (metric for recommendation algo)
export const dislikeProject = async (projectId: number): Promise<void> => {
  await api.post("/feed/metric/dislike", { project_id: projectId });
};

// Apply/join a project (sends a join request)
export const applyToProject = async (projectId: number): Promise<void> => {
  await api.post(`/projects/${projectId}/join-requests`);
};

// Delete a project
export const deleteProject = async (projectId: number): Promise<void> => {
  await api.delete(`/projects/${projectId}`);
};

// Create a project
export const createProject = async (data: CreateProjectValues): Promise<void> => {
  await api.post("/projects", data);
};
