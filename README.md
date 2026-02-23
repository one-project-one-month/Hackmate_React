## hackmate (frontend)

### 1. Project Structure

package manager -pnpm

We use feature base structure where we seperate the bussiness logic and the routing logic. Each feature cotains pages, components, api hooks and redux slices.

```
├── src
│   ├── app
│   │   ├── providers.tsx
│   │   ├── router.tsx
│   │   └── store.ts
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── ui
│   ├── config
│   ├── features
│   │   ├── auth
│   │   ├── chat
│   │   ├── noti
│   │   ├── profile
│   │   └── projects
│   ├── hooks
│   ├── index.css
│   ├── lib
│   │   ├── axios.ts
│   │   ├── utils
│   │   └── utils.ts
│   ├── main.tsx
│   ├── routes
│   │   ├── index.tsx
│   │   ├── projects
│   │   └── __root.tsx
│   ├── routeTree.gen.ts
│   └── types
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

- src/app/ => global providers, redux store
- src/lib => utilities, axios instances
- src/components/ => reusable ui components across the project
- src/routes/ => that's where we define routes
- src/index.css => global style

#### In each feature

In each feature, I set the structure as components, pages, api and slice. All the reusabile ui comonent goes into the components. For pages, i set them as a final component ready for route.

All routes are declared in src/routes/

### 2. naming style

- file & folder PascalCase for components and pages camelCase for function and hooks
-
