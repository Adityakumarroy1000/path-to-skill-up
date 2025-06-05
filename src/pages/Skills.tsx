
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allSkills = [
    {
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
      hasPaths: true
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Master SEO, social media marketing, and content strategy",
      icon: "📈",
      category: "Marketing",
      level: "Beginner",
      students: "8.2k",
      duration: "2-4 months",
      rating: 4.7,
      color: "from-green-500 to-teal-600",
      tags: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      hasPaths: true
    },
    {
      id: 3,
      title: "Python Programming",
      description: "From basics to data science, automation, and web development",
      icon: "🐍",
      category: "Programming",
      level: "Beginner",
      students: "15.3k",
      duration: "4-8 months",
      rating: 4.9,
      color: "from-yellow-500 to-orange-600",
      tags: ["Python", "Data Science", "Automation", "Django"],
      hasPaths: true
    },
    {
      id: 4,
      title: "Guitar Playing",
      description: "Learn acoustic and electric guitar from beginner to advanced",
      icon: "🎸",
      category: "Music",
      level: "Beginner",
      students: "4.2k",
      duration: "6-12 months",
      rating: 4.6,
      color: "from-amber-500 to-orange-600",
      tags: ["Acoustic", "Electric", "Chords", "Scales"],
      hasPaths: true
    },
    {
      id: 5,
      title: "Singing",
      description: "Develop your vocal skills, breath control, and stage presence",
      icon: "🎤",
      category: "Music",
      level: "Beginner",
      students: "3.8k",
      duration: "4-8 months",
      rating: 4.7,
      color: "from-pink-500 to-rose-600",
      tags: ["Vocals", "Breath Control", "Performance", "Harmony"],
      hasPaths: true
    },
    {
      id: 6,
      title: "Graphic Design",
      description: "Master Photoshop, Illustrator, and design principles",
      icon: "🎨",
      category: "Design",
      level: "Beginner",
      students: "6.8k",
      duration: "2-5 months",
      rating: 4.6,
      color: "from-pink-500 to-red-600",
      tags: ["Photoshop", "Illustrator", "Design Theory", "Branding"],
      hasPaths: true
    },
    {
      id: 7,
      title: "Data Analysis",
      description: "Excel, SQL, and data visualization with Python/R",
      icon: "📊",
      category: "Data",
      level: "Intermediate",
      students: "9.1k",
      duration: "3-6 months",
      rating: 4.8,
      color: "from-purple-500 to-indigo-600",
      tags: ["Excel", "SQL", "Python", "Tableau"],
      hasPaths: true
    },
    {
      id: 8,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native or Flutter",
      icon: "📱",
      category: "Programming",
      level: "Intermediate",
      students: "5.4k",
      duration: "4-7 months",
      rating: 4.7,
      color: "from-cyan-500 to-blue-600",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      hasPaths: true
    }
  ];

  const categories = ["All", "Programming", "Marketing", "Design", "Data", "Music"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Button variant="ghost">Browse Skills</Button>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover structured roadmaps with curated free resources to master any skill you want.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden dark:bg-gray-800">
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{skill.icon}</div>
                  <Badge variant="secondary">{skill.level}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors dark:text-white">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-3">
                  {skill.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-3">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {skill.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {skill.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {skill.rating}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{skill.category}</div>
                </div>
                <Link to={`/skill/${skill.id}`}>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    View Roadmap
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">No skills found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
