
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Camera, User } from "lucide-react";

const ProfileSetup = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    occupation: "",
    profileImage: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData({
          ...profileData,
          profileImage: event.target?.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate profile setup - store in localStorage
    setTimeout(() => {
      localStorage.setItem("userProfile", JSON.stringify(profileData));
      localStorage.setItem("profileCompleted", "true");
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Tell us a bit about yourself to personalize your learning experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSetup} className="space-y-6">
              {/* Profile Image Upload */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profileData.profileImage} />
                    <AvatarFallback className="text-2xl">
                      <User className="w-8 h-8" />
                    </AvatarFallback>
                  </Avatar>
                  <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer transition-colors">
                    <Camera className="w-4 h-4" />
                    <input
                      id="profile-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click the camera icon to upload your profile picture
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Occupation */}
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  type="text"
                  placeholder="e.g. Student, Developer, Designer"
                  value={profileData.occupation}
                  onChange={handleInputChange}
                />
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Input
                  id="bio"
                  name="bio"
                  type="text"
                  placeholder="Tell us a bit about yourself"
                  value={profileData.bio}
                  onChange={handleInputChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Setting up profile..." : "Complete Setup"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
