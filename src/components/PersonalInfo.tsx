
import React from "react";

type PersonalInfoProps = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  role,
  description,
  imageUrl,
}) => {
  return (
    <section className="py-12 px-4 md:py-16 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover profile-picture"
            tabIndex={0}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800" tabIndex={0}>{name}</h2>
          <p className="text-purple-dark font-medium text-lg mt-2" tabIndex={0}>{role}</p>
          <p className="mt-4 text-gray-600 leading-relaxed" tabIndex={0}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
