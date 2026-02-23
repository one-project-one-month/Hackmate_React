import { useQuery } from "@tanstack/react-query";
import { api } from "./../../lib/axios";

export const useProjects = () => {
  useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/projects");
      return res.data;
    },
  });
};

export const useMockProject = () => {
  return {
    data: [
      { id: "project A", description: "hello world" },
      { id: "project A", description: "hello world" },
    ],
    isLoading: false,
    isError: false,
  };
};
