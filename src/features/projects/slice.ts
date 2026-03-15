import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Project } from "./types/projectModel";
import { mockProjects } from "./mock";
import { type ActionType } from "./types/projectModel";

type ProjectsState = {
  projects: Project[];
  currentIndex: number;
  applied: number[];
  myProjects: Project[];
  selectedProject: Project | null;
  activeAction: ActionType;
};

const initialState: ProjectsState = {
  projects: mockProjects,
  currentIndex: 0,
  applied: [],
  myProjects: [],
  selectedProject: null,
  activeAction: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    applyProject: (state) => {
      const current = state.projects[state.currentIndex];
      if (current) {
        state.applied.push(current.id);
        state.currentIndex += 1;
      }
    },
    skipProject: (state) => {
      state.currentIndex += 1;
    },
    setSelectedProject: (state, action: PayloadAction<Project | null>) => {
      state.selectedProject = action.payload;
    },
    setMyProjects: (state, action: PayloadAction<Project[]>) => {
      state.myProjects = action.payload;
    },
    resetQueue: (state) => {
      state.currentIndex = 0;
      state.applied = [];
    },
    setActiveAction: (state, action: PayloadAction<ActionType>) => {
      state.activeAction = action.payload;
    },
  },
});

export const {
  applyProject,
  skipProject,
  setSelectedProject,
  setMyProjects,
  resetQueue,
  setActiveAction,
} = projectsSlice.actions;

export default projectsSlice.reducer;
