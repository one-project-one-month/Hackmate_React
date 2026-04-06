import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import SwipeAction from "../components/SwipeAction";
import SwipeHint from "../components/SwipeHint";
import { useAppDispatch } from "@/hooks/useAppHook";
import { setFeedProjects, setProjectsLoading, setProjectsError } from "../slice";
import { getFeedProjects, getMyProjects } from "../api/api";

// BrowseProjectsPage.tsx
export default function BrowseProjectsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadFeed = async () => {
      dispatch(setProjectsLoading(true));
      try {
        const [feed, owned] = await Promise.all([
          getFeedProjects(),
          getMyProjects(),
        ]);
        
        // Filter out projects that the user has already created
        const ownedIds = new Set(owned.map((p) => p.id));
        const filteredFeed = feed.filter((p) => !ownedIds.has(p.id));
        
        console.log("=== FEED FETCH SUCCESS ===");
        console.log("feed length:", feed.length);
        console.log("filtered feed length:", filteredFeed.length);
        
        dispatch(setFeedProjects(filteredFeed));
      } catch (err: any) {
        dispatch(setProjectsError(err.message || "Failed to load projects"));
        console.error("Feed fetch error:", err);
      } finally {
        dispatch(setProjectsLoading(false));
      }
    };
    loadFeed();
  }, [dispatch]);

  return (
    <div className="min-h-screen py-5 px-15 flex flex-col justify-start items-start">
      {/* Header section */}
      <div className="">
        <h1 className="text-5xl font-bold font-serif text-zinc-200 leading-relaxed">
          Browse Projects
        </h1>
        <p className="text-zinc-400 mb-8">
          Explore all available projects and quickly find what you are looking
          for.
        </p>
      </div>
      <ProjectCard />
      <SwipeHint />
      <SwipeAction />
    </div>
  );
}
