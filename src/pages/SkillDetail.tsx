
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Users, Star, ExternalLink, Play, BookOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const SkillDetail = () => {
  const { id } = useParams();
  const [completedResources, setCompletedResources] = useState<string[]>([]);

  // Mock data - in real app this would come from an API
  const skill = {
    id: 1,
    title: "Web Development",
    description: "Master the art of building modern, responsive websites and web applications",
    icon: "💻",
    category: "Programming",
    level: "Beginner",
    students: "12.5k",
    duration: "3-6 months",
    rating: 4.8,
    color: "from-blue-500 to-purple-600",
    overview: "This comprehensive web development roadmap will take you from complete beginner to job-ready developer. You'll learn HTML, CSS, JavaScript, and modern frameworks while building real projects.",
    careerOpportunities: [
      "Frontend Developer ($50k-$120k)",
      "Full-Stack Developer ($60k-$140k)",
      "Web Designer ($40k-$90k)",
      "UI/UX Developer ($55k-$130k)"
    ],
    toolsNeeded: ["Code Editor (VS Code)", "Browser (Chrome/Firefox)", "Git", "Node.js"]
  };

  const roadmapStages = [
    {
      id: "stage1",
      title: "Foundation",
      description: "Master the building blocks of web development",
      duration: "4-6 weeks",
      resources: [
        {
          id: "html-basics",
          title: "HTML Fundamentals",
          type: "Course",
          provider: "FreeCodeCamp",
          duration: "8 hours",
          description: "Learn HTML structure, elements, and semantic markup",
          url: "https://freecodecamp.org",
          difficulty: "Beginner"
        },
        {
          id: "css-basics",
          title: "CSS Complete Guide",
          type: "Course",
          provider: "MDN Web Docs",
          duration: "12 hours",
          description: "Styling, layouts, flexbox, and responsive design",
          url: "https://developer.mozilla.org",
          difficulty: "Beginner"
        },
        {
          id: "js-basics",
          title: "JavaScript Fundamentals",
          type: "Course",
          provider: "JavaScript.info",
          duration: "20 hours",
          description: "Variables, functions, DOM manipulation, and events",
          url: "https://javascript.info",
          difficulty: "Beginner"
        }
      ]
    },
    {
      id: "stage2",
      title: "Intermediate Skills",
      description: "Build dynamic websites and learn modern tools",
      duration: "6-8 weeks",
      resources: [
        {
          id: "responsive-design",
          title: "Responsive Web Design",
          type: "Project",
          provider: "FreeCodeCamp",
          duration: "15 hours",
          description: "Build responsive layouts with CSS Grid and Flexbox",
          url: "https://freecodecamp.org",
          difficulty: "Intermediate"
        },
        {
          id: "js-projects",
          title: "JavaScript Projects",
          type: "Projects",
          provider: "The Odin Project",
          duration: "25 hours",
          description: "Calculator, To-do app, and Weather app projects",
          url: "https://theodinproject.com",
          difficulty: "Intermediate"
        },
        {
          id: "git-github",
          title: "Git & GitHub Mastery",
          type: "Course",
          provider: "Git Tutorial",
          duration: "6 hours",
          description: "Version control, branching, and collaboration",
          url: "https://git-scm.com",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      id: "stage3",
      title: "Advanced & Frameworks",
      description: "Learn modern frameworks and build real applications",
      duration: "8-12 weeks",
      resources: [
        {
          id: "react-basics",
          title: "React.js Complete Course",
          type: "Course",
          provider: "React Official Docs",
          duration: "30 hours",
          description: "Components, state, hooks, and modern React patterns",
          url: "https://react.dev",
          difficulty: "Advanced"
        },
        {
          id: "portfolio-project",
          title: "Build Your Portfolio",
          type: "Project",
          provider: "Self-guided",
          duration: "20 hours",
          description: "Create a professional portfolio showcasing your projects",
          url: "#",
          difficulty: "Advanced"
        },
        {
          id: "deployment",
          title: "Deploy Your Apps",
          type: "Tutorial",
          provider: "Netlify & Vercel",
          duration: "4 hours",
          description: "Learn to deploy and host your web applications",
          url: "https://netlify.com",
          difficulty: "Advanced"
        }
      ]
    }
  ];

  const toggleResourceCompletion = (resourceId: string) => {
    setCompletedResources(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const totalResources = roadmapStages.reduce((total, stage) => total + stage.resources.length, 0);
  const completedCount = completedResources.length;
  const progressPercentage = (completedCount / totalResources) * 100;

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Course": return <BookOpen className="w-4 h-4" />;
      case "Project": return <Play className="w-4 h-4" />;
      case "Tutorial": return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl">🌱</div>
              <h1 className="text-xl font-bold text-gray-900">SkillSprout</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/skills">
                <Button variant="ghost">Browse Skills</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Skill Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{skill.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{skill.title}</h1>
                <Badge variant="secondary">{skill.level}</Badge>
              </div>
              <p className="text-xl text-gray-600 mb-4">{skill.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{skill.students} students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{skill.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{skill.rating} rating</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">{skill.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{completedCount} / {totalResources} completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <Button size="lg">
                  {progressPercentage > 0 ? "Continue Learning" : "Start Learning"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Roadmap */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Roadmap</h2>
            
            {roadmapStages.map((stage, stageIndex) => (
              <Card key={stage.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {stageIndex + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{stage.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {stage.description} • {stage.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {stage.resources.map((resource) => (
                      <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <button
                            onClick={() => toggleResourceCompletion(resource.id)}
                            className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              completedResources.includes(resource.id)
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-green-400'
                            }`}
                          >
                            {completedResources.includes(resource.id) && (
                              <CheckCircle className="w-4 h-4" />
                            )}
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getResourceIcon(resource.type)}
                              <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {resource.difficulty}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-2">{resource.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>By {resource.provider}</span>
                                <span>{resource.duration}</span>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  View Resource
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>About This Skill</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{skill.overview}</p>
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skill.careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools Needed */}
            <Card>
              <CardHeader>
                <CardTitle>Tools You'll Need</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skill.toolsNeeded.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
