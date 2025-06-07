
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useState } from "react";

interface SkillPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  icon: string;
  prerequisites?: string[];
  outcomes?: string[];
}

interface SkillPathSelectorProps {
  skillTitle: string;
  paths: SkillPath[];
  onPathSelect: (pathId: string, language: string) => void;
}

const SkillPathSelector = ({ skillTitle, paths, onPathSelect }: SkillPathSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getLanguageDisplay = (lang: string) => {
    switch (lang) {
      case 'bangla': return 'বাংলা';
      case 'hindi': return 'हिंदी';
      case 'english': return 'English';
      default: return 'English';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Choose Your {skillTitle} Path
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Select the learning path that best fits your goals and experience level
        </p>
        
        {/* Language Selector */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Learning Language:</span>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bangla">বাংলা (Bangla)</SelectItem>
              <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Card key={path.id} className="hover:shadow-lg transition-shadow cursor-pointer group border-2 hover:border-blue-300 dark:hover:border-blue-600">
            <CardHeader className="text-center">
              <div className="text-4xl mb-3">{path.icon}</div>
              <CardTitle className="group-hover:text-blue-600 transition-colors text-lg">
                {path.title}
              </CardTitle>
              <CardDescription className="text-sm">{path.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-300 font-medium">{path.duration}</span>
                <Badge className={getDifficultyColor(path.difficulty)}>
                  {path.difficulty}
                </Badge>
              </div>
              
              {path.prerequisites && path.prerequisites.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Prerequisites:</p>
                  <div className="space-y-1">
                    {path.prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span>{prereq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {path.outcomes && path.outcomes.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">You'll learn:</p>
                  <div className="space-y-1">
                    {path.outcomes.slice(0, 3).map((outcome, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">Selected Language:</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {getLanguageDisplay(selectedLanguage)}
                </p>
              </div>
              
              <Button 
                className="w-full mt-4" 
                onClick={() => onPathSelect(path.id, selectedLanguage)}
              >
                Start This Path
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillPathSelector;
