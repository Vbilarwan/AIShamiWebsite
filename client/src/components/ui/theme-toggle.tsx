import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full hover:bg-muted dark:hover:bg-primary-light"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="fas fa-sun text-white"></i>
      ) : (
        <i className="fas fa-moon text-primary"></i>
      )}
    </Button>
  );
}
