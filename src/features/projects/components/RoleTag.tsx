import type { ProjectRole } from "../types/projectModel";

type Props = {
  role: ProjectRole | string;
};

export default function RoleTag({ role }: Props) {
  const isString = typeof role === "string";
  const label = isString ? role : (role as ProjectRole).label;
  const keyIdentifier = isString ? role : (role as ProjectRole).id;

  return (
    <span
      key={keyIdentifier}
      className="bg-[#1e1e1e] border border-gray-700 text-sm px-6 py-2 rounded-full text-gray-300"
    >
      {label}
    </span>
  );
}
