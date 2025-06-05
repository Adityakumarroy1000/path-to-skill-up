
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  icon: string;
}

interface SkillPathSelectorProps {
  skillTitle: string;
  paths: SkillPath[];
  onPathSelect: (pathId: string) => void;
}

const SkillPathSelector = ({ skillTitle, paths, onPathSelect }: SkillPathSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Choose Your {skillTitle} Path
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Select the learning path that best fits your goals
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Card key={path.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="text-4xl mb-3">{path.icon}</div>
              <CardTitle className="group-hover:text-blue-600 transition-colors">
                {path.title}
              </CardTitle>
              <CardDescription>{path.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">{path.duration}</span>
                <Badge variant="secondary">{path.difficulty}</Badge>
              </div>
              <Button 
                className="w-full" 
                onClick={() => onPathSelect(path.id)}
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
