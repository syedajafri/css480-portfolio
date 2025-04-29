
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveVertical } from "lucide-react";

type Interest = {
  id: number;
  title: string;
  description: string;
};

type InterestsListProps = {
  interests: Interest[];
};

const InterestsList: React.FC<InterestsListProps> = ({ interests: initialInterests }) => {
  const [interests, setInterests] = useState<Interest[]>(initialInterests);
  const [sortOrder, setSortOrder] = useState<"default" | "alphabetical">("default");

  const handleReorder = () => {
    if (sortOrder === "default") {
      // Sort alphabetically
      const sortedInterests = [...interests].sort((a, b) => 
        a.title.localeCompare(b.title)
      );
      setInterests(sortedInterests);
      setSortOrder("alphabetical");
    } else {
      // Reset to default order
      setInterests([...initialInterests]);
      setSortOrder("default");
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800" tabIndex={0}>My Interests</h2>
          <Button 
            onClick={handleReorder} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleReorder();
              }
            }}
            variant="outline" 
            className="mt-2 md:mt-0 border-purple hover:border-purple-dark hover:bg-purple/5 text-purple-dark"
            aria-label={sortOrder === "default" ? "Sort interests alphabetically" : "Reset interests to default order"}
          >
            <MoveVertical className="mr-2 h-4 w-4" />
            {sortOrder === "default" ? "Sort Alphabetically" : "Reset to Default"}
          </Button>
        </div>
        
        <ul className="space-y-4" role="list" aria-label="List of my interests">
          {interests.map((interest) => (
            <li
              key={interest.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-purple-300"
              tabIndex={0}
            >
              <h3 className="font-semibold text-lg text-purple-dark">{interest.title}</h3>
              <p className="mt-2 text-gray-600">{interest.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InterestsList;
