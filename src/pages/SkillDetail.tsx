
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, ChevronRight, Globe, Play, ExternalLink, List, Book, Video, Monitor } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SkillPathSelector from "@/components/SkillPathSelector";
import RoadmapDownloader from "@/components/RoadmapDownloader";

const SkillDetail = () => {
  const { id } = useParams();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  
  const skill = {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks like React",
    icon: "💻",
    category: "Programming",
    level: "Beginner",
    students: "12.5k",
    duration: "3-6 months",
    rating: 4.8,
    color: "from-blue-500 to-purple-600",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    overview: "Master web development from the ground up. This comprehensive path covers everything from basic HTML structure to modern React applications, giving you the skills to build responsive, interactive websites and web applications.",
    outcomes: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Create interactive web applications using React",
      "Understand modern web development tools and workflows",
      "Deploy applications to production environments",
      "Work with APIs and handle data in web applications"
    ],
    prerequisites: ["Basic computer literacy", "No prior programming experience required"]
  };

  const paths = [
    {
      id: "frontend-fundamentals",
      title: "Frontend Fundamentals",
      description: "Start with HTML, CSS, and JavaScript basics",
      duration: "3-4 months",
      difficulty: "Beginner",
      icon: "🎨",
      prerequisites: ["Basic computer skills"],
      outcomes: ["Build static websites", "Understand CSS layouts", "Write basic JavaScript"]
    },
    {
      id: "react-developer",
      title: "React Developer",
      description: "Learn modern React development and ecosystem",
      duration: "4-5 months",
      difficulty: "Intermediate",
      icon: "⚛️",
      prerequisites: ["HTML, CSS, JavaScript knowledge"],
      outcomes: ["Build React applications", "State management", "Component architecture"]
    },
    {
      id: "fullstack-developer",
      title: "Full-Stack Developer",
      description: "Complete frontend and backend development",
      duration: "6-8 months",
      difficulty: "Advanced",
      icon: "🚀",
      prerequisites: ["Frontend development experience"],
      outcomes: ["Build complete web applications", "Database design", "API development"]
    }
  ];

  const roadmapData = {
    english: [
      {
        phase: "Foundation",
        title: "HTML Fundamentals",
        description: "Learn the building blocks of web pages with HTML structure and semantic markup",
        duration: "2-3 weeks",
        topics: ["HTML structure and syntax", "Semantic HTML elements", "Forms and input types", "Accessibility basics"]
      },
      {
        phase: "Styling",
        title: "CSS Mastery",
        description: "Master CSS for beautiful, responsive designs",
        duration: "3-4 weeks",
        topics: ["CSS selectors and properties", "Flexbox and Grid", "Responsive design", "CSS animations"]
      }
    ],
    bangla: [
      {
        phase: "ভিত্তি",
        title: "HTML এর মূল বিষয়",
        description: "ওয়েব পেজের মূল কাঠামো HTML এর সাথে পরিচিত হন",
        duration: "২-৩ সপ্তাহ",
        topics: ["HTML গঠন এবং সিনট্যাক্স", "সিমান্টিক HTML এলিমেন্ট", "ফর্ম এবং ইনপুট প্রকার", "অ্যাক্সেসিবিলিটি মূল বিষয়"]
      }
    ],
    hindi: [
      {
        phase: "आधार",
        title: "HTML के मूल सिद्धांत",
        description: "वेब पेजों के निर्माण खंडों को HTML संरचना के साथ सीखें",
        duration: "2-3 सप्ताह",
        topics: ["HTML संरचना और सिंटैक्स", "सिमेंटिक HTML तत्व", "फॉर्म और इनपुट प्रकार", "पहुंच की मूल बातें"]
      }
    ]
  };

  const handlePathSelect = (pathId: string, language: string) => {
    setSelectedPath(pathId);
    setSelectedLanguage(language);
  };

  const currentRoadmap = roadmapData[selectedLanguage as keyof typeof roadmapData] || roadmapData.english;

  if (!selectedPath) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl">🌱</div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">SkillSprout</h1>
              </Link>
              <div className="flex items-center space-x-4">
                <Link to="/skills">
                  <Button variant="ghost">Browse Skills</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <ThemeToggle />
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SkillPathSelector 
            skillTitle={skill.title}
            paths={paths}
            onPathSelect={handlePathSelect}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl">🌱</div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">SkillSprout</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/skills">
                <Button variant="ghost">Browse Skills</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPath(null)}
            className="mb-4 flex items-center gap-2"
          >
            ← Back to Path Selection
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {skill.title} Learning Roadmap
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Your personalized path to mastering {skill.title.toLowerCase()}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bangla">বাংলা</SelectItem>
                    <SelectItem value="hindi">हिंदी</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Download Button */}
              <RoadmapDownloader skillTitle={skill.title} roadmap={currentRoadmap} />
            </div>
          </div>
        </div>

        {/* Roadmap Timeline - Restored Boxed Design */}
        <div className="space-y-8">
          {currentRoadmap.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                        {item.phase}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                        {item.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-blue-100 mt-2">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Topics:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <ChevronRight className="w-3 h-3 text-blue-500" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Tracking Placeholder */}
        <Card className="mt-8 p-6 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Ready to Start Learning?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Track your progress and earn certificates as you complete each phase
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Start Learning Journey
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SkillDetail;
