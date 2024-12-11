import { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ExamplePrompts } from './ExamplePrompts';

interface PromptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [showExamples, setShowExamples] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt.trim());
    }
  };

  const handleExampleSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setShowExamples(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowExamples(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Card className="p-8 bg-blue-950/40 backdrop-blur supports-[backdrop-filter]:bg-blue-950/20 border-blue-800/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Textarea
              placeholder="Describe your imagination in detail..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={() => setShowExamples(true)}
              className="min-h-[200px] text-lg p-4 resize-none bg-blue-950/30 border-blue-800/50 placeholder:text-blue-200/50 text-blue-100"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-500 text-white"
            disabled={isLoading || !prompt.trim()}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            {isLoading ? 'Creating Your Masterpiece...' : 'Generate Artwork'}
          </Button>
        </form>
      </Card>
      <ExamplePrompts 
        isVisible={showExamples} 
        onSelect={handleExampleSelect}
      />
    </div>
  );
}