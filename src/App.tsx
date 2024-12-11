import { useState } from 'react';
import { ThemeProvider } from "@/components/ThemeProvider";
import { PromptInput } from '@/components/PromptInput';
import { ImageOutput } from '@/components/ImageOutput';
import { generateImage } from '@/lib/api';
import { Palette } from 'lucide-react';
import type { GenerationState } from '@/lib/types';
import { useToast } from './hooks/use-toast';

function App() {
  const [state, setState] = useState<GenerationState>({
    loading: false,
    error: null,
    image: null,
  });
  const { toast } = useToast();

  const handleGenerate = async (prompt: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await generateImage(prompt);
      const imageUrl = URL.createObjectURL(await response.blob());
      setState({ loading: false, error: null, image: imageUrl });
      toast({
        title: "Image Generated Successfully",
        description: "Your artwork has been created!",
        duration: 3000,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate image';
      setState({
        loading: false,
        error: errorMessage,
        image: null,
      });
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: errorMessage,
        duration: 5000,
      });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative">
          <div className="container max-w-7xl mx-auto px-4 py-12">
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center">
                <Palette className="h-12 w-12 mr-3 text-blue-400" />
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Van AI
                </h1>
              </div>
              <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
                Transform your imagination into stunning artwork using advanced AI technology
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-blue-100">Create Your Vision</h2>
                <PromptInput 
                  onGenerate={handleGenerate} 
                  isLoading={state.loading} 
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-blue-100">Your Masterpiece</h2>
                <ImageOutput 
                  image={state.image} 
                  error={state.error}
                  isLoading={state.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;