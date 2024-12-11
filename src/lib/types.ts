export interface GenerationResponse {
  image: string;
  error?: string;
}

export interface GenerationState {
  loading: boolean;
  error: string | null;
  image: string | null;
}