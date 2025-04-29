
import React from "react";
import WelcomeBanner from "@/components/WelcomeBanner";
import PersonalInfo from "@/components/PersonalInfo";
import InterestsList from "@/components/InterestsList";

const Index = () => {
  const interests = [
    {
      id: 1,
      title: "Cybersecurity",
      description: "I enjoy working on things that have a significant impact on people's lives positively. Cybersecurity is a field that protects both individuals and organizations."
    },
    {
      id: 2,
      title: "Exploring nature",
      description: "Nature provides a sense of peace and tranquility. It gives the opportunity for various forms of physical activity."
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Fascinated by how AI and ML are transforming industries, I enjoy learning and experimenting with different algorithms."
    },
    {
      id: 4,
      title: "Baking",
      description: "Baking allows me to relax and be as creative as I want. Creating something from scratch is a rewarding experience. "
    },
    {
      id: 5,
      title: "Reading",
      description: "I enjoy reading thriller and historical fiction books. This expands my imagination and knowledge!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WelcomeBanner 
        greeting="Hello, Welcome!" 
        message="Thank you for visiting my personal page. I'm excited to share a bit about myself with you."
      />
      
      <PersonalInfo 
        name="Syeda Jafri"
        role="Computer Science Student at UW"
        description="Hello! I am currently majoring in Applied Computing and minoring in Data Science at UWB. I enjoy learning new things and expanding my skills. My hobbies include baking, reading, and exploring new places!"
        imageUrl="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
      
      <InterestsList interests={interests} />
      
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© 2025 CSS 480 Landing Page | Created with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;

