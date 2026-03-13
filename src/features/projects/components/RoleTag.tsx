import type { ProjectRole } from "../types/projectModel";

type Props = {
  role: ProjectRole;
};

export default function RoleTag({ role }: Props) {
  return (
    <span
      key={role.id}
      className="bg-[#1e1e1e] border border-gray-700 text-sm px-6 py-2 rounded-full text-gray-300"
    >
      {role.label}
    </span>
  );
}
