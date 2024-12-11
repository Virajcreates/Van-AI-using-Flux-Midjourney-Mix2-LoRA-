# Van-AI Image Generation Website

Welcome to the **Van-AI Image Generation Website**! This platform leverages the Hugging Face API to generate stunning images using the **Flux Midjourney Mix2-LoRA** model.

## **Website Link**
Explore the site: [Van-AI Image Generation](https://van-ai-using-flux-midjourney-mix2-lo-ra.vercel.app/)

## **Features**
- Generate AI-powered images from prompts.
- Powered by the Hugging Face Flux Midjourney Mix2-LoRA model.
- Seamless and user-friendly interface.

## **How It Works**
1. **Input a Prompt**: Enter a description of the image you'd like to generate.
2. **AI Generates the Image**: The Hugging Face model processes the prompt and generates an image.
3. **Download or Share**: Download the generated image or share it with others.

## **Technologies Used**
- **Frontend**: Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
- **Styling**: Tailwind CSS for modern and responsive design.
- **AI Model**: Flux Midjourney Mix2-LoRA from [Hugging Face](https://huggingface.co/).
- **Deployment**: Hosted on [Vercel](https://vercel.com/).

## **Environment Variables**
The application requires the following environment variable for accessing the Hugging Face API:

```env
VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

### **Setting Up Environment Variables on Vercel**
1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard).
2. Navigate to **Settings > Environment Variables**.
3. Add the variable:
   - Key: `VITE_HUGGINGFACE_API_KEY`
   - Value: Your Hugging Face API Key.
4. Redeploy the project.

## **Development Setup**

### Prerequisites
- [Node.js](https://nodejs.org/) installed (version 16 or higher).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Add a `.env.local` file for local development:
   ```env
   VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## **Deployment**
This project is deployed on [Vercel](https://vercel.com/). To deploy your own instance:

1. Push your code to GitHub.
2. Connect the GitHub repository to Vercel.
3. Add the environment variable `VITE_HUGGINGFACE_API_KEY` in the Vercel dashboard.
4. Trigger a new deployment.

## **Usage Instructions**
1. Visit the website: [Van-AI Image Generation](https://van-ai-using-flux-midjourney-mix2-lo-ra.vercel.app/).
2. Enter your desired prompt.
3. Click "Generate" to create an AI image.
4. View, download, or share your generated image.

## **Contributing**
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## **License**
This project is licensed under the [MIT License](LICENSE).

## **Contact**
For any questions or issues, feel free to open an issue or reach out:
- **Email**: vdyurkeri@gmail.com
- **GitHub**: [GitHub Profile](https://github.com/Virajcreates)

