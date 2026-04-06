import { useState, useRef, type ChangeEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, ChevronDown, ImageIcon, AlertCircle } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

import { createProject } from "../api/api";
import {
  createProjectSchema,
  type CreateProjectValues,
} from "../types/createProjectSchema";

const PLATFORM_OPTIONS = ["Mobile", "Website", "Desktop", "Game"] as const;
const STATUS_OPTIONS = ["Ongoing", "Planning"] as const;
const ROLE_OPTIONS = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "DevOps Engineer",
  "Project Manager",
  "QA Engineer",
  "Data Scientist",
  "Full Stack Developer",
];

export default function CreateProjectPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [roleSearch, setRoleSearch] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);

  // --- react-hook-form + zod ---
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateProjectValues>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "",
      github_repo: "",
      is_active: true,
      required_roles: [],
    },
  });

  // Watched values for UI rendering
  const selectedPlatforms = watch("type");
  const selectedRoles = watch("required_roles");

  // --- Helpers ---
  const platformList = selectedPlatforms
    ? selectedPlatforms.split(", ").filter(Boolean)
    : [];

  const togglePlatform = (platform: string) => {
    const updated = platformList.includes(platform)
      ? platformList.filter((p) => p !== platform)
      : [...platformList, platform];
    setValue("type", updated.join(", "), { shouldValidate: true });
  };

  const toggleRole = (role: string) => {
    const current = selectedRoles ?? [];
    const exists = current.includes(role);
    const updated = exists
      ? current.filter((r) => r !== role)
      : [...current, role];
    setValue("required_roles", updated, { shouldValidate: true });
  };

  const filteredRoles = ROLE_OPTIONS.filter((role) =>
    role.toLowerCase().includes(roleSearch.toLowerCase())
  );

  const handleImageClick = () => fileInputRef.current?.click();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  // --- Submit ---
  const onSubmit = async (data: CreateProjectValues) => {
    setServerError(null);
    try {
      await createProject({
        title: data.title,
        description: data.description,
        type: data.type,
        github_repo: data.github_repo || undefined,
        is_active: data.is_active,
        required_roles: data.required_roles,
      });
      navigate({ to: "/projects" });
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.content ||
        "Failed to create project. Please check your inputs.";
      setServerError(typeof msg === "string" ? msg : JSON.stringify(msg));
      console.error("Create project error:", err?.response?.data || err);
    }
  };

  return (
    <div className="min-h-screen py-5 px-15 flex flex-col justify-start items-start">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold font-serif text-cyan-50 leading-relaxed tracking-tight">
          Create Projects
        </h1>
        <p className="text-zinc-400 text-lg font-medium">
          Explore all available projects and quickly find what you're looking
          for.
        </p>
      </div>

      {/* Server error banner */}
      {serverError && (
        <div className="w-full max-w-[947px] mb-4 flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={18} />
          <span>{serverError}</span>
        </div>
      )}

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[947px] bg-white/10 rounded-[32px] p-8 flex flex-col gap-6"
      >
        {/* ── Project Image Upload ── */}
        <div className="flex flex-col gap-3">
          <label className="font-serif font-semibold text-xl text-cyan-50">
            Project Image
          </label>
          <div
            onClick={handleImageClick}
            className="w-full h-[173px] border-2 border-cyan-900 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-cyan-600 transition-colors group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleImageChange}
              className="hidden"
              id="project-image-upload"
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Project preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <>
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <ImageIcon
                    size={28}
                    className="text-zinc-400 group-hover:text-cyan-400 transition-colors"
                  />
                </div>
                <p className="text-cyan-50 text-sm font-medium">
                  Click to upload image
                </p>
                <p className="text-zinc-400 text-xs mt-1">
                  PNG, JPG up to 10MB
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── Project Name + Duration ── */}
        <div className="flex gap-10">
          <div className="flex flex-col gap-3 flex-1">
            <label
              htmlFor="project-name"
              className="font-serif font-semibold text-xl text-cyan-50"
            >
              Project Name
            </label>
            <input
              id="project-name"
              type="text"
              {...register("title")}
              className="w-full h-12 px-4 bg-transparent border border-cyan-400 rounded-xl text-cyan-50 placeholder:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
            {errors.title && (
              <p className="text-red-400 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <label
              htmlFor="project-duration"
              className="font-serif font-semibold text-xl text-cyan-50"
            >
              Project Duration
            </label>
            <input
              id="project-duration"
              type="text"
              placeholder="DD/MM/YY"
              className="w-full h-12 px-4 bg-transparent border border-cyan-900 rounded-xl text-cyan-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* ── Platform + Status ── */}
        <div className="flex gap-10">
          {/* Platform checkboxes */}
          <div className="flex flex-col gap-4 flex-1">
            <label className="font-semibold text-lg text-white tracking-tight">
              Platform
            </label>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {PLATFORM_OPTIONS.map((platform) => (
                <label
                  key={platform}
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => togglePlatform(platform)}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      platformList.includes(platform)
                        ? "bg-cyan-500 border-cyan-500"
                        : "border-gray-500 group-hover:border-cyan-600"
                    }`}
                  >
                    {platformList.includes(platform) && (
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M1 5L4.5 8.5L11 1.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-300 font-medium">{platform}</span>
                </label>
              ))}
            </div>
            {errors.type && (
              <p className="text-red-400 text-sm">{errors.type.message}</p>
            )}
          </div>

          {/* Status radios */}
          <Controller
            control={control}
            name="is_active"
            render={({ field }) => (
              <div className="flex flex-col gap-4 flex-1">
                <label className="font-semibold text-lg text-white tracking-tight">
                  Status
                </label>
                <div className="flex flex-col gap-4">
                  {STATUS_OPTIONS.map((status) => {
                    const isSelected =
                      status === "Ongoing" ? field.value : !field.value;
                    return (
                      <label
                        key={status}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => field.onChange(status === "Ongoing")}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? "border-cyan-400"
                              : "border-gray-500 group-hover:border-cyan-600"
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                          )}
                        </div>
                        <span className="text-gray-300 font-medium">
                          {status}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          />
        </div>

        {/* ── Required Role + GitHub Repository ── */}
        <div className="flex gap-10">
          {/* Required Role dropdown */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="font-semibold text-lg text-white tracking-tight">
              Required Role
            </label>
            <div className="relative">
              <div
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="w-full h-[52px] px-4 bg-transparent border border-cyan-900 rounded-xl flex items-center justify-between cursor-pointer hover:border-cyan-600 transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <Search size={20} className="text-zinc-400 shrink-0" />
                  <span className="text-zinc-400 truncate text-sm">
                    {selectedRoles.length > 0
                      ? selectedRoles.join(", ")
                      : "Search and select roles..."}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-cyan-500 transition-transform shrink-0 ${roleDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>

              {roleDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-cyan-900 rounded-xl z-50 overflow-hidden shadow-xl shadow-black/30">
                  <div className="p-3 border-b border-zinc-800">
                    <input
                      type="text"
                      value={roleSearch}
                      onChange={(e) => setRoleSearch(e.target.value)}
                      placeholder="Search roles..."
                      className="w-full bg-transparent text-cyan-50 text-sm placeholder:text-zinc-500 focus:outline-none"
                      id="role-search-input"
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto custom-scrollbar">
                    {filteredRoles.map((role) => {
                      const isChecked = selectedRoles.includes(role);
                      return (
                        <div
                          key={role}
                          onClick={() => toggleRole(role)}
                          className={`px-4 py-2.5 cursor-pointer flex items-center gap-3 hover:bg-cyan-900/30 transition-colors ${
                            isChecked ? "bg-cyan-900/20" : ""
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked
                                ? "bg-cyan-500 border-cyan-500"
                                : "border-zinc-600"
                            }`}
                          >
                            {isChecked && (
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 12 10"
                                fill="none"
                              >
                                <path
                                  d="M1 5L4.5 8.5L11 1.5"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-300 text-sm">
                            {role}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            {errors.required_roles && (
              <p className="text-red-400 text-sm">
                {errors.required_roles.message}
              </p>
            )}
          </div>

          {/* GitHub Repository */}
          <div className="flex flex-col gap-3 flex-1">
            <label
              htmlFor="github-repo"
              className="font-semibold text-lg text-white tracking-tight"
            >
              GitHub Repository
            </label>
            <input
              id="github-repo"
              type="text"
              {...register("github_repo")}
              placeholder="https://github.com/username/repository"
              className="w-full h-[52px] px-4 bg-transparent border border-cyan-500/50 rounded-[10px] text-cyan-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-base tracking-tight"
            />
            {errors.github_repo && (
              <p className="text-red-400 text-sm">
                {errors.github_repo.message}
              </p>
            )}
          </div>
        </div>

        {/* ── Description ── */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="project-description"
            className="font-semibold text-lg text-white tracking-tight"
          >
            Description
          </label>
          <textarea
            id="project-description"
            {...register("description")}
            placeholder="Enter project description..."
            rows={3}
            className="w-full px-4 py-3 bg-transparent border border-cyan-500/50 rounded-[10px] text-cyan-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none text-base"
          />
          {errors.description && (
            <p className="text-red-400 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* ── Submit ── */}
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            id="submit-project-btn"
            className="px-16 py-3 bg-cyan-600/50 border border-cyan-600 rounded-xl text-zinc-100 font-medium text-base hover:bg-cyan-600/70 transition-all shadow-md hover:shadow-cyan-900/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Project"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
