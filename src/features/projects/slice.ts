import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Project } from "./types/projectModel";
import { type ActionType } from "./types/projectModel";

export type ProjectTab = "created" | "joined";

type ProjectsState = {
  // Browse feed
  feedProjects: Project[];
  currentIndex: number;
  applied: number[];

  // My projects page
  myProjects: Project[];
  joinedProjects: Project[];
  activeTab: ProjectTab;
  searchQuery: string;

  // Shared
  selectedProject: Project | null;
  activeAction: ActionType;
  isLoading: boolean;
  error: string | null;
};

const initialState: ProjectsState = {
  feedProjects: [],
  currentIndex: 0,
  applied: [],

  myProjects: [],
  joinedProjects: [],
  activeTab: "created",
  searchQuery: "",

  selectedProject: null,
  activeAction: null,
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Browse feed
    setFeedProjects: (state, action: PayloadAction<Project[]>) => {
      state.feedProjects = action.payload;
      state.currentIndex = 0;
    },
    applyProject: (state) => {
      const current = state.feedProjects[state.currentIndex];
      if (current) {
        state.applied.push(current.id);
        state.currentIndex += 1;
      }
    },
    skipProject: (state) => {
      state.currentIndex += 1;
    },
    resetQueue: (state) => {
      state.currentIndex = 0;
      state.applied = [];
    },

    // My projects page
    setMyProjects: (state, action: PayloadAction<Project[]>) => {
      state.myProjects = action.payload;
    },
    setJoinedProjects: (state, action: PayloadAction<Project[]>) => {
      state.joinedProjects = action.payload;
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.myProjects = state.myProjects.filter(p => p.id !== action.payload);
    },
    setActiveTab: (state, action: PayloadAction<ProjectTab>) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Shared
    setSelectedProject: (state, action: PayloadAction<Project | null>) => {
      state.selectedProject = action.payload;
    },
    setActiveAction: (state, action: PayloadAction<ActionType>) => {
      state.activeAction = action.payload;
    },
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProjectsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setFeedProjects,
  applyProject,
  skipProject,
  resetQueue,
  setMyProjects,
  setJoinedProjects,
  removeProject,
  setActiveTab,
  setSearchQuery,
  setSelectedProject,
  setActiveAction,
  setProjectsLoading,
  setProjectsError,
} = projectsSlice.actions;

export default projectsSlice.reducer;
