# Projects Feature

## What this covers

- **Browse** — swipe/discover page
- **My Projects** — projects you own or joined
- **Create Project** — design pending, stub only

---

## Redux State

```ts
projects: Project[]
currentIndex: number
applied: number[]
myProjects: Project[]
selectedProject: Project | null
```

## Mock Data

Flipo `USE_MOCK` in `api.ts` when backend is ready:

```ts
const USE_MOCK = true;
```

---

## Routes

```
/browse           → BrowseProjectsPage
/projects         → MyProjectsPage
/projects/create  → CreateProjectPage
```

## Conventions

- Types from `types.ts` only
- Branch: `feat/component-name` → PR into `dev`
