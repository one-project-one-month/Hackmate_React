import { useProjects, useMockProject } from '../api'

export function BrowseProjectsPage() {
  const { data, isLoading, isError } = useMockProject()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return <div>{JSON.stringify(data)}</div>
}
