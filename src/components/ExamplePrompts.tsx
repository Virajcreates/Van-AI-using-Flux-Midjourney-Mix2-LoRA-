import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EXAMPLE_PROMPTS } from "@/lib/constants";
import { Lightbulb } from "lucide-react";

interface ExamplePromptsProps {
  onSelect: (prompt: string) => void;
  isVisible: boolean;
}

export function ExamplePrompts({ onSelect, isVisible }: ExamplePromptsProps) {
  if (!isVisible) return null;

  return (
    <Card className="absolute z-10 w-full mt-2 p-4 bg-blue-950/90 border-blue-800/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-blue-400" />
        <h3 className="text-sm font-medium text-blue-200">Example Prompts</h3>
      </div>
      <ScrollArea className="h-[200px] pr-4">
        <div className="space-y-3">
          {EXAMPLE_PROMPTS.map((prompt) => (
            <div key={prompt.id} className="space-y-1">
              <div className="text-xs text-blue-400">{prompt.category}</div>
              <Button
                variant="ghost"
                className="w-full justify-start text-left text-sm text-blue-100 hover:bg-blue-900/50 hover:text-blue-200"
                onClick={() => onSelect(prompt.text)}
              >
                {prompt.text}
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}