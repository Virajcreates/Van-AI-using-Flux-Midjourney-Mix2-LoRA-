import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LoadingAnimation } from "./LoadingAnimation";

interface ImageOutputProps {
  image: string | null;
  error: string | null;
  isLoading: boolean;
}

export function ImageOutput({ image, error, isLoading }: ImageOutputProps) {
  return (
    <Card className="overflow-hidden bg-blue-950/40 backdrop-blur supports-[backdrop-filter]:bg-blue-950/20 border-blue-800/50">
      <AspectRatio ratio={1}>
        {isLoading ? (
          <LoadingAnimation />
        ) : error ? (
          <div className="flex items-center justify-center h-full p-8">
            <p className="text-center text-lg text-red-400">{error}</p>
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Generated artwork"
            className="object-cover w-full h-full rounded-md"
          />
        ) : (
          <div className="flex items-center justify-center h-full p-8">
            <p className="text-center text-lg text-blue-200/70">
              Your artistic creation will appear here
            </p>
          </div>
        )}
      </AspectRatio>
    </Card>
  );
}