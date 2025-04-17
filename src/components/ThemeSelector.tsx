
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme, THEMES } from "@/context/ThemeContext";
import { Check, Palette } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ThemeSelector = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  const handleThemeChange = (value: string) => {
    setTheme(value as keyof typeof THEMES);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
          aria-label="เปลี่ยนธีม"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        <div className="space-y-4">
          <h4 className="font-medium text-center">เลือกธีมสี</h4>
          <RadioGroup 
            value={currentTheme} 
            onValueChange={handleThemeChange}
            className="grid grid-cols-2 gap-2"
          >
            {Object.keys(themes).map((themeKey) => {
              const theme = themes[themeKey as keyof typeof THEMES];
              return (
                <div 
                  key={themeKey} 
                  className={cn(
                    "relative flex items-center space-x-2 rounded-md border p-2 cursor-pointer",
                    currentTheme === themeKey && "border-primary"
                  )}
                  onClick={() => handleThemeChange(themeKey)}
                >
                  <RadioGroupItem value={themeKey} id={themeKey} className="sr-only" />
                  <div 
                    className="h-8 w-8 rounded-full border shadow"
                    style={{
                      background: `hsl(${theme.primary})`,
                      borderColor: `hsl(${theme.secondary})`,
                    }}
                  />
                  <Label htmlFor={themeKey} className="flex-1 cursor-pointer">
                    {theme.name}
                  </Label>
                  {currentTheme === themeKey && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSelector;
