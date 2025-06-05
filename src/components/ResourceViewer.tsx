
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Play, Clock } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  type: string;
  provider: string;
  duration: string;
  description: string;
  url: string;
  difficulty: string;
}

interface ResourceViewerProps {
  resource: Resource;
  allResources: Resource[];
  onClose: () => void;
  onResourceChange: (resource: Resource) => void;
}

const ResourceViewer = ({ resource, allResources, onClose, onResourceChange }: ResourceViewerProps) => {
  const [currentResource, setCurrentResource] = useState(resource);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(currentResource.url);

  const handleResourceSelect = (selectedResource: Resource) => {
    setCurrentResource(selectedResource);
    onResourceChange(selectedResource);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-bold dark:text-white">Learning Resources</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="mb-4">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Play className="w-5 h-5" />
                  <CardTitle className="text-lg dark:text-white">{currentResource.title}</CardTitle>
                  <Badge variant="outline">{currentResource.type}</Badge>
                  <Badge variant="secondary">{currentResource.difficulty}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>By {currentResource.provider}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentResource.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {embedUrl ? (
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <iframe
                      src={embedUrl}
                      title={currentResource.title}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This resource opens in a new tab
                      </p>
                      <Button asChild>
                        <a href={currentResource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Resource
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-300 mt-4">{currentResource.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Resource List */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">All Resources</h3>
            <div className="space-y-3">
              {allResources.map((res) => (
                <Card 
                  key={res.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    currentResource.id === res.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleResourceSelect(res)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2">
                      <Play className="w-4 h-4 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm dark:text-white truncate">{res.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{res.provider}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{res.type}</Badge>
                          <span className="text-xs text-gray-500">{res.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceViewer;
