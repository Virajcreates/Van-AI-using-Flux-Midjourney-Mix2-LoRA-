const API_URL = "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA";

export async function generateImage(prompt: string): Promise<Response> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const blob = await response.blob();
  return new Response(blob, { status: 200 });
}