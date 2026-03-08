import { api } from "@/lib/axios";
import { mockProjects } from "@/features/projects/mock";
import type { Project } from "@/features/projects/types/projectModel";

const USE_MOCK = true;

export const getProjects = async (): Promise<Project[]> => {
  if (USE_MOCK) return mockProjects;
  const response = await api.get("/projects");
  return response.data;
};

export const getProjectById = async (
  id: number,
): Promise<Project | undefined> => {
  if (USE_MOCK) return mockProjects.find((p) => p.id === id);
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const applyToProject = async (projectId: number): Promise<void> => {
  if (USE_MOCK) return;
  await api.post(`/projects/${projectId}/apply`);
};

export const createProject = async (data: Partial<Project>): Promise<void> => {
  if (USE_MOCK) return;
  await api.post("/projects", data);
};
