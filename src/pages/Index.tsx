
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredSkills = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and modern frameworks",
      icon: "💻",
      students: "12.5k",
      duration: "3-6 months",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Master SEO, social media, and content marketing",
      icon: "📈",
      students: "8.2k",
      duration: "2-4 months",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Python Programming",
      description: "From basics to data science and automation",
      icon: "🐍",
      students: "15.3k",
      duration: "4-8 months",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { icon: Users, label: "Active Learners", value: "50,000+" },
    { icon: BookOpen, label: "Free Resources", value: "10,000+" },
    { icon: Target, label: "Skills Available", value: "25+" },
    { icon: TrendingUp, label: "Success Rate", value: "87%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🌱</div>
              <h1 className="text-xl font-bold text-gray-900">SkillSprout</h1>
            </div>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Master Any Skill with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              100% Free Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Discover curated learning pathways that guide you from beginner to expert using the best free resources on the internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/skills">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Learning Today
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              View All Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your journey with our most popular skills, each with a structured roadmap and hand-picked resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredSkills.map((skill, index) => (
              <Card key={skill.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{skill.students} students</span>
                    <span>{skill.duration}</span>
                  </div>
                  <Link to={`/skill/${skill.id}`}>
                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have successfully mastered new skills and advanced their careers with SkillSprout.
          </p>
          <Link to="/skills">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Explore All Skills
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-2xl">🌱</div>
              <h3 className="text-xl font-bold">SkillSprout</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering learners worldwide with free, high-quality education resources.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 SkillSprout. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
