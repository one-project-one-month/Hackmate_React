import React from "react";

interface ProfileStatProps {
  label: string;
  value: number | string;
}

const ProfileStat: React.FC<ProfileStatProps> = ({ label, value }) => {
  return (
    <div className="flex-1">
      <p className="text-white text-xl md:text-base lg:text-xl mb-1">{label}</p>

      <p className="text-lg md:text-xl lg:text-2xl text-white">{value}</p>
    </div>
  );
};

export default ProfileStat;
