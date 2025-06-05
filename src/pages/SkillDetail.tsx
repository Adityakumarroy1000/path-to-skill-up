
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ExternalLink, Play, BookOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SkillPathSelector from "@/components/SkillPathSelector";

const SkillDetail = () => {
  const { id } = useParams();
  const [completedResources, setCompletedResources] = useState<string[]>([]);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  // Mock data - in real app this would come from an API
  const getSkillData = (skillId: string) => {
    const skills: Record<string, any> = {
      "1": {
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
        toolsNeeded: ["Code Editor (VS Code)", "Browser (Chrome/Firefox)", "Git", "Node.js"],
        paths: [
          {
            id: "frontend",
            title: "Frontend Development",
            description: "Focus on user interfaces and client-side development",
            duration: "3-4 months",
            difficulty: "Beginner",
            icon: "🎨"
          },
          {
            id: "backend",
            title: "Backend Development",
            description: "Learn server-side programming and databases",
            duration: "4-5 months",
            difficulty: "Intermediate",
            icon: "⚙️"
          },
          {
            id: "fullstack",
            title: "Full-Stack Development",
            description: "Master both frontend and backend development",
            duration: "6-8 months",
            difficulty: "Advanced",
            icon: "🚀"
          }
        ]
      },
      "4": {
        id: 4,
        title: "Guitar Playing",
        description: "Learn to play guitar from beginner to advanced level",
        icon: "🎸",
        category: "Music",
        level: "Beginner",
        students: "4.2k",
        duration: "6-12 months",
        rating: 4.6,
        color: "from-amber-500 to-orange-600",
        overview: "Master the guitar with structured lessons covering everything from basic chords to advanced techniques. Perfect for both acoustic and electric guitar enthusiasts.",
        careerOpportunities: [
          "Session Musician ($30k-$80k)",
          "Music Teacher ($25k-$60k)",
          "Band Member ($20k-$100k+)",
          "Solo Artist (Variable)"
        ],
        toolsNeeded: ["Guitar (Acoustic/Electric)", "Pick", "Tuner", "Amplifier (for electric)"],
        paths: [
          {
            id: "acoustic",
            title: "Acoustic Guitar",
            description: "Learn fingerpicking, strumming, and acoustic techniques",
            duration: "4-6 months",
            difficulty: "Beginner",
            icon: "🎼"
          },
          {
            id: "electric",
            title: "Electric Guitar",
            description: "Master riffs, solos, and electric guitar effects",
            duration: "6-8 months",
            difficulty: "Intermediate",
            icon: "⚡"
          },
          {
            id: "classical",
            title: "Classical Guitar",
            description: "Learn classical techniques and repertoire",
            duration: "8-12 months",
            difficulty: "Advanced",
            icon: "🏛️"
          }
        ]
      },
      "5": {
        id: 5,
        title: "Singing",
        description: "Develop your vocal skills and performance abilities",
        icon: "🎤",
        category: "Music",
        level: "Beginner",
        students: "3.8k",
        duration: "4-8 months",
        rating: 4.7,
        color: "from-pink-500 to-rose-600",
        overview: "Improve your singing voice with professional techniques covering breath control, pitch accuracy, and stage presence.",
        careerOpportunities: [
          "Professional Singer ($25k-$200k+)",
          "Vocal Coach ($30k-$70k)",
          "Choir Director ($35k-$65k)",
          "Voice Actor ($40k-$90k)"
        ],
        toolsNeeded: ["Microphone", "Audio Interface", "Recording Software", "Practice Space"],
        paths: [
          {
            id: "pop",
            title: "Pop/Contemporary",
            description: "Learn modern singing techniques for popular music",
            duration: "3-5 months",
            difficulty: "Beginner",
            icon: "🎵"
          },
          {
            id: "classical",
            title: "Classical/Opera",
            description: "Master classical vocal techniques and repertoire",
            duration: "6-12 months",
            difficulty: "Advanced",
            icon: "🎭"
          },
          {
            id: "jazz",
            title: "Jazz/Blues",
            description: "Learn improvisation and jazz vocal styling",
            duration: "5-8 months",
            difficulty: "Intermediate",
            icon: "🎷"
          }
        ]
      }
    };

    return skills[skillId] || skills["1"]; // Default to web development
  };

  const skill = getSkillData(id || "1");

  const getRoadmapStages = (skillId: string, pathId: string) => {
    // Web Development roadmaps
    if (skillId === "1") {
      if (pathId === "frontend") {
        return [
          {
            id: "stage1",
            title: "HTML & CSS Fundamentals",
            description: "Learn the foundation of web development",
            duration: "3-4 weeks",
            resources: [
              {
                id: "html-basics",
                title: "HTML Full Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "4.5 hours",
                description: "Complete HTML tutorial covering all elements and semantic markup",
                url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
                difficulty: "Beginner"
              },
              {
                id: "css-basics",
                title: "CSS Complete Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "11 hours",
                description: "Master CSS styling, layouts, and responsive design",
                url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
                difficulty: "Beginner"
              },
              {
                id: "flexbox-guide",
                title: "CSS Flexbox Guide",
                type: "Interactive Tutorial",
                provider: "CSS-Tricks",
                duration: "2 hours",
                description: "Complete guide to CSS Flexbox with examples",
                url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                difficulty: "Beginner"
              }
            ]
          },
          {
            id: "stage2",
            title: "JavaScript Fundamentals",
            description: "Master JavaScript programming basics",
            duration: "4-5 weeks",
            resources: [
              {
                id: "js-basics",
                title: "JavaScript Full Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "8 hours",
                description: "Complete JavaScript course from basics to advanced concepts",
                url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                difficulty: "Beginner"
              },
              {
                id: "js-dom",
                title: "DOM Manipulation Tutorial",
                type: "Video Course",
                provider: "Web Dev Simplified",
                duration: "1.5 hours",
                description: "Learn to manipulate HTML elements with JavaScript",
                url: "https://www.youtube.com/watch?v=y17RuWkWdn8",
                difficulty: "Intermediate"
              }
            ]
          },
          {
            id: "stage3",
            title: "React Development",
            description: "Build dynamic user interfaces with React",
            duration: "6-8 weeks",
            resources: [
              {
                id: "react-basics",
                title: "React Full Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "12 hours",
                description: "Complete React tutorial covering components, hooks, and state management",
                url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                difficulty: "Intermediate"
              },
              {
                id: "react-hooks",
                title: "React Hooks Tutorial",
                type: "Video Course",
                provider: "Codevolution",
                duration: "3 hours",
                description: "Master React Hooks for modern component development",
                url: "https://www.youtube.com/watch?v=cF2lQ_gZeA8",
                difficulty: "Intermediate"
              }
            ]
          }
        ];
      }
      
      if (pathId === "backend") {
        return [
          {
            id: "stage1",
            title: "Node.js Fundamentals",
            description: "Learn server-side JavaScript development",
            duration: "3-4 weeks",
            resources: [
              {
                id: "nodejs-basics",
                title: "Node.js Full Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "8.5 hours",
                description: "Complete Node.js tutorial covering servers, APIs, and modules",
                url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
                difficulty: "Beginner"
              },
              {
                id: "express-tutorial",
                title: "Express.js Tutorial",
                type: "Video Course",
                provider: "Programming with Mosh",
                duration: "1 hour",
                description: "Learn Express.js framework for building web applications",
                url: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
                difficulty: "Beginner"
              }
            ]
          },
          {
            id: "stage2",
            title: "Database & APIs",
            description: "Work with databases and create RESTful APIs",
            duration: "4-5 weeks",
            resources: [
              {
                id: "mongodb-tutorial",
                title: "MongoDB Complete Course",
                type: "Video Course",
                provider: "FreeCodeCamp",
                duration: "7 hours",
                description: "Learn MongoDB database operations and integration",
                url: "https://www.youtube.com/watch?v=c2M-rlkkT5o",
                difficulty: "Intermediate"
              },
              {
                id: "rest-api",
                title: "REST API Tutorial",
                type: "Video Course",
                provider: "Web Dev Simplified",
                duration: "2.5 hours",
                description: "Build RESTful APIs with Node.js and Express",
                url: "https://www.youtube.com/watch?v=fgTGADljAeg",
                difficulty: "Intermediate"
              }
            ]
          }
        ];
      }
    }
    
    // Guitar roadmaps
    if (skillId === "4") {
      if (pathId === "acoustic") {
        return [
          {
            id: "stage1",
            title: "Guitar Basics",
            description: "Learn fundamental guitar techniques",
            duration: "4-6 weeks",
            resources: [
              {
                id: "guitar-setup",
                title: "Guitar Setup & Tuning",
                type: "Video Tutorial",
                provider: "JustinGuitar",
                duration: "30 mins",
                description: "Learn proper guitar setup, tuning, and basic maintenance",
                url: "https://www.youtube.com/watch?v=BnMqAhWNyyM",
                difficulty: "Beginner"
              },
              {
                id: "first-chords",
                title: "Your First Guitar Chords",
                type: "Video Course",
                provider: "JustinGuitar",
                duration: "2 hours",
                description: "Learn essential beginner chords: A, D, E, G, C",
                url: "https://www.youtube.com/watch?v=NGXSoJPBFJo",
                difficulty: "Beginner"
              }
            ]
          },
          {
            id: "stage2",
            title: "Strumming & Rhythm",
            description: "Master basic strumming patterns and rhythm",
            duration: "3-4 weeks",
            resources: [
              {
                id: "strumming-patterns",
                title: "Basic Strumming Patterns",
                type: "Video Tutorial",
                provider: "GuitarLessons365",
                duration: "45 mins",
                description: "Learn essential strumming patterns for popular songs",
                url: "https://www.youtube.com/watch?v=oXerhAA_5Lk",
                difficulty: "Beginner"
              },
              {
                id: "rhythm-guitar",
                title: "Rhythm Guitar Fundamentals",
                type: "Video Course",
                provider: "Marty Music",
                duration: "1.5 hours",
                description: "Develop timing and rhythm skills for acoustic guitar",
                url: "https://www.youtube.com/watch?v=v0_PLs4xdwc",
                difficulty: "Beginner"
              }
            ]
          },
          {
            id: "stage3",
            title: "Fingerpicking & Advanced Techniques",
            description: "Learn fingerpicking and advanced acoustic techniques",
            duration: "6-8 weeks",
            resources: [
              {
                id: "fingerpicking-basics",
                title: "Fingerpicking for Beginners",
                type: "Video Course",
                provider: "Steve Stine Guitar",
                duration: "3 hours",
                description: "Master fingerpicking technique and patterns",
                url: "https://www.youtube.com/watch?v=NZWMrm8lDmA",
                difficulty: "Intermediate"
              }
            ]
          }
        ];
      }
    }

    // Singing roadmaps
    if (skillId === "5") {
      if (pathId === "pop") {
        return [
          {
            id: "stage1",
            title: "Vocal Fundamentals",
            description: "Learn proper breathing and vocal technique",
            duration: "3-4 weeks",
            resources: [
              {
                id: "breathing-technique",
                title: "Proper Breathing for Singers",
                type: "Video Tutorial",
                provider: "Superior Singing Method",
                duration: "1 hour",
                description: "Master diaphragmatic breathing and breath support",
                url: "https://www.youtube.com/watch?v=F6Noi7qzl3E",
                difficulty: "Beginner"
              },
              {
                id: "vocal-warmups",
                title: "Daily Vocal Warm-ups",
                type: "Video Tutorial",
                provider: "Vocal Coach",
                duration: "30 mins",
                description: "Essential warm-up exercises to protect your voice",
                url: "https://www.youtube.com/watch?v=9c6SzwB0tgg",
                difficulty: "Beginner"
              }
            ]
          },
          {
            id: "stage2",
            title: "Pitch & Tone Development",
            description: "Improve pitch accuracy and vocal tone",
            duration: "4-5 weeks",
            resources: [
              {
                id: "pitch-training",
                title: "Pitch Training Exercises",
                type: "Video Course",
                provider: "New York Vocal Coaching",
                duration: "2 hours",
                description: "Develop perfect pitch and interval recognition",
                url: "https://www.youtube.com/watch?v=m-l7TO01-Sg",
                difficulty: "Intermediate"
              },
              {
                id: "vocal-tone",
                title: "Finding Your Voice",
                type: "Video Tutorial",
                provider: "Cheryl Porter Vocal Coach",
                duration: "45 mins",
                description: "Discover and develop your unique vocal tone",
                url: "https://www.youtube.com/watch?v=R8OOWcsFj0A",
                difficulty: "Intermediate"
              }
            ]
          }
        ];
      }
    }

    // Default empty roadmap
    return [];
  };

  const roadmapStages = selectedPath ? getRoadmapStages(id || "1", selectedPath) : [];

  const toggleResourceCompletion = (resourceId: string) => {
    setCompletedResources(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const totalResources = roadmapStages.reduce((total, stage) => total + stage.resources.length, 0);
  const completedCount = completedResources.length;
  const progressPercentage = totalResources > 0 ? (completedCount / totalResources) * 100 : 0;

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Course": return <BookOpen className="w-4 h-4" />;
      case "Project": return <Play className="w-4 h-4" />;
      case "Tutorial": return <BookOpen className="w-4 h-4" />;
      case "Video Course": return <Play className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Skill Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{skill.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{skill.title}</h1>
                <Badge variant="secondary">{skill.level}</Badge>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{skill.students} students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>{skill.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{skill.rating} rating</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{skill.category}</span>
                </div>
              </div>
              
              {selectedPath && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                      <span>Progress</span>
                      <span>{completedCount} / {totalResources} completed</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  <Button size="lg">
                    {progressPercentage > 0 ? "Continue Learning" : "Start Learning"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {!selectedPath ? (
          <SkillPathSelector
            skillTitle={skill.title}
            paths={skill.paths}
            onPathSelect={setSelectedPath}
          />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Roadmap */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Roadmap</h2>
                <Button variant="outline" onClick={() => setSelectedPath(null)}>
                  Change Path
                </Button>
              </div>
              
              {roadmapStages.map((stage, stageIndex) => (
                <Card key={stage.id} className="overflow-hidden dark:bg-gray-800">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {stageIndex + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl dark:text-white">{stage.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {stage.description} • {stage.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {stage.resources.map((resource) => (
                        <div key={resource.id} className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
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
                                <h4 className="font-semibold text-gray-900 dark:text-white">{resource.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {resource.type}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {resource.difficulty}
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-2">{resource.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="dark:text-white">About This Skill</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.overview}</p>
                </CardContent>
              </Card>

              {/* Career Opportunities */}
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="dark:text-white">Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.careerOpportunities.map((career: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{career}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools Needed */}
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="dark:text-white">Tools You'll Need</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.toolsNeeded.map((tool: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillDetail;
