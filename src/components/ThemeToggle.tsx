
import { moon, sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <moon className="h-4 w-4" />
      ) : (
        <sun className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
