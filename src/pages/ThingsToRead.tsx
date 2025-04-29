
import React from "react";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const ThingsToRead = () => {
  // List of reading resources with links
  const readingLinks = [
    {
      id: 1,
      title: "CSS-Tricks - A Complete Guide to Flexbox",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      category: "Web Development"
    },
    {
      id: 2,
      title: "MDN Web Docs - JavaScript Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      category: "Programming"
    },
    {
      id: 3,
      title: "Smashing Magazine - Web Design Articles",
      url: "https://www.smashingmagazine.com/category/web-design/",
      category: "Design"
    },
    {
      id: 4,
      title: "The New Yorker - Technology Section",
      url: "https://www.newyorker.com/tag/technology",
      category: "Technology News"
    },
    {
      id: 5,
      title: "Nature - Scientific Research Articles",
      url: "https://www.nature.com/",
      category: "Science"
    },
    {
      id: 6,
      title: "A List Apart - Web Design & Development Articles",
      url: "https://alistapart.com/",
      category: "Web Industry"
    },
    {
      id: 7,
      title: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      category: "React"
    },
    {
      id: 8,
      title: "Hacker News",
      url: "https://news.ycombinator.com/",
      category: "Tech News"
    },
    {
      id: 9,
      title: "Machine Learning Mastery",
      url: "https://machinelearningmastery.com/blog/",
      category: "AI & ML"
    },
    {
      id: 10,
      title: "UW CSE News",
      url: "https://www.cs.washington.edu/news",
      category: "UW Computer Science"
    }
  ];

  // Focus on the first link when pressing Tab from the section header
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);
  
  const focusOnFirstLink = () => {
    if (firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 px-4 md:py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            tabIndex={0} // Make heading focusable
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                focusOnFirstLink();
              }
            }}
          >
            Things to Read
          </h1>
          <p className="text-lg text-gray-600 mb-8" tabIndex={0}>
            Here's a collection of interesting resources that I enjoy reading.
            Press Tab to navigate through the links, and Enter to open them.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-4">
              {readingLinks.map((link, index) => (
                <li 
                  key={link.id} 
                  className="bg-white p-4 rounded-md shadow-sm border border-gray-100 transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-purple-300"
                >
                  <div className="flex items-start gap-3">
                    <Book className="text-purple w-5 h-5 mt-0.5" />
                    <div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-purple-dark hover:underline focus:outline-none focus:text-purple"
                        ref={index === 0 ? firstLinkRef : undefined}
                        aria-label={`Read ${link.title} about ${link.category}`}
                      >
                        {link.title}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{link.category}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-purple hover:bg-purple-dark"
              aria-label="Scroll to top"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p tabIndex={0}>© 2025 CSS 480 Landing Page | Created with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default ThingsToRead;
