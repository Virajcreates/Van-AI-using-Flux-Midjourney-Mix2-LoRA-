import { Loader2 } from "lucide-react";

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
        <Loader2 className="h-12 w-12 text-blue-400 animate-spin relative" />
      </div>
      <p className="text-blue-200/70 animate-pulse">Creating your masterpiece...</p>
    </div>
  );
}