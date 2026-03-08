import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getProjects,
  getProjectById,
  applyToProject,
  createProject,
} from "../api/api";

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};

export const useGetProjectById = (id: number) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => getProjectById(id),
  });
};

export const useApplyToProject = () => {
  return useMutation({
    mutationFn: applyToProject,
  });
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: createProject,
  });
};
