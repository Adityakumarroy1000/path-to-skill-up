
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Play, Clock, BookOpen } from "lucide-react";

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
  const [websiteContent, setWebsiteContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchWebsiteContent = async (url: string) => {
    setIsLoading(true);
    try {
      // Since we can't directly fetch from external websites due to CORS,
      // we'll simulate fetching content for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulated content based on the URL
      if (url.includes('w3schools.com')) {
        setWebsiteContent(`
          <div class="tutorial-content">
            <h1>HTML Tutorial</h1>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
            
            <h2>What is HTML?</h2>
            <ul>
              <li>HTML stands for Hyper Text Markup Language</li>
              <li>HTML is the standard markup language for creating Web pages</li>
              <li>HTML describes the structure of a Web page</li>
              <li>HTML consists of a series of elements</li>
            </ul>
            
            <h2>HTML Elements</h2>
            <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
            <code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code>
            
            <h2>Basic HTML Structure</h2>
            <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
            
            <h2>Try It Yourself</h2>
            <p>Use our online editor to practice HTML coding!</p>
          </div>
        `);
      } else {
        setWebsiteContent(`
          <div class="tutorial-content">
            <h1>Tutorial Content</h1>
            <p>This is the fetched content from the website. In a real implementation, this would be the actual content from the URL.</p>
            <p>The content would be parsed and displayed in a readable format.</p>
          </div>
        `);
      }
    } catch (error) {
      console.error('Error fetching website content:', error);
      setWebsiteContent('<p>Error loading content. Please try again.</p>');
    } finally {
      setIsLoading(false);
    }
  };

  const embedUrl = getEmbedUrl(currentResource.url);
  const isWebsite = currentResource.type === "Website";

  const handleResourceSelect = (selectedResource: Resource) => {
    setCurrentResource(selectedResource);
    onResourceChange(selectedResource);
    setWebsiteContent(null); // Reset content when changing resources
  };

  const handleReadClick = () => {
    if (isWebsite) {
      fetchWebsiteContent(currentResource.url);
    }
  };

  useEffect(() => {
    setCurrentResource(resource);
    setWebsiteContent(null);
  }, [resource]);

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
          {/* Content Viewer */}
          <div className="lg:col-span-2">
            <Card className="mb-4">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {isWebsite ? <BookOpen className="w-5 h-5" /> : <Play className="w-5 h-5" />}
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
                {isWebsite && websiteContent ? (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <div 
                      className="prose prose-sm dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: websiteContent }}
                    />
                  </div>
                ) : embedUrl ? (
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
                        {isWebsite 
                          ? "Click 'Read' to fetch and display content from this website"
                          : "This resource opens in a new tab"
                        }
                      </p>
                      <div className="flex gap-2 justify-center">
                        {isWebsite ? (
                          <Button onClick={handleReadClick} disabled={isLoading}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            {isLoading ? 'Loading...' : 'Read'}
                          </Button>
                        ) : (
                          <Button asChild>
                            <a href={currentResource.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open Resource
                            </a>
                          </Button>
                        )}
                      </div>
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
                      {res.type === "Website" ? <BookOpen className="w-4 h-4 mt-1 flex-shrink-0" /> : <Play className="w-4 h-4 mt-1 flex-shrink-0" />}
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
