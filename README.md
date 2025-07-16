
# AI Agent Hub 🤖

A comprehensive web application featuring intelligent AI agents designed to help businesses automate tasks, select optimal AI models, estimate costs, and calculate ROI for AI implementations.

![AI Agent Hub Hero](./docs/images/hero-screenshot.png)

## 🚀 Overview

AI Agent Hub is a modern React-based web application that provides four specialized AI agents to solve different business challenges:

- **Task Automation AI** - Analyzes workflows and identifies automation opportunities
- **AI Model Selector** - Recommends optimal language models based on requirements
- **AI Cost Estimator** - Calculates precise costs for AI inference workloads
- **AI ROI Calculator** - Provides comprehensive return on investment analysis

## ✨ Features

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Dark/Light theme support
- Smooth animations and transitions
- Glass-morphism effects
- Professional gradient designs

### 🤖 Four Specialized AI Agents

#### 1. Task Automation AI
![Task Automation Screenshot](./docs/images/task-automation-screenshot.png)

- Analyzes current business workflows
- Identifies repetitive tasks suitable for automation
- Provides implementation recommendations
- Estimates time and cost savings

#### 2. AI Model Selector
![LLM Selector Screenshot](./docs/images/llm-selector-screenshot.png)

- Smart model recommendations based on use case
- Considers performance, cost, and technical requirements
- Compares different AI models
- Provides detailed analysis and reasoning

#### 3. AI Cost Estimator
![Cost Estimator Screenshot](./docs/images/cost-estimator-screenshot.png)

- Precise cost calculations for AI workloads
- Breakdown by usage patterns
- Scaling projections
- Budget planning assistance

#### 4. AI ROI Calculator
![ROI Calculator Screenshot](./docs/images/roi-calculator-screenshot.png)

- Comprehensive ROI analysis
- Time-to-value calculations
- Cost-benefit analysis
- Investment planning insights

### 🛠️ Technical Features
- Built with React 18 and TypeScript
- Styled with Tailwind CSS and shadcn/ui
- Responsive design with mobile-first approach
- State management with React Query
- Client-side routing with React Router
- Modern build system with Vite

## 🏗️ Architecture

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── AgentCard.tsx    # Individual agent cards
│   └── LoadingSpinner.tsx
├── pages/               # Route components
│   ├── Index.tsx        # Home page
│   ├── TaskAutomation.tsx
│   ├── LLMSelector.tsx
│   ├── CostEstimator.tsx
│   ├── ROICalculator.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
│   └── useAgentCall.ts  # AI agent interaction hook
├── services/            # API and external services
│   └── aiAgentService.ts
└── lib/                 # Utilities and helpers
    └── utils.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd ai-agent-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Screenshots

### Home Page
![Home Page](./docs/images/homepage-screenshot.png)
*Modern landing page with AI agent selection*

### Mobile Responsive Design
![Mobile View](./docs/images/mobile-screenshot.png)
*Fully responsive design across all devices*

### Dark Theme
![Dark Theme](./docs/images/dark-theme-screenshot.png)
*Beautiful dark mode implementation*

### AI Analysis Results
![Analysis Results](./docs/images/analysis-results-screenshot.png)
*Clean presentation of AI-generated insights*

## 🎯 Usage Guide

### Using AI Agents

1. **Navigate to Home Page**: Select the AI agent that matches your needs
2. **Describe Your Requirements**: Provide detailed information about your use case
3. **Get AI Analysis**: Click the analyze button to receive intelligent recommendations
4. **Review Results**: Read through the AI-generated insights and recommendations

### Example Use Cases

#### Task Automation
```
Input: "Our HR team manually schedules interviews by emailing candidates and coordinating times. This process takes about 3-4 hours daily..."

Output: Detailed automation strategy with tool recommendations, implementation steps, and cost-benefit analysis.
```

#### Model Selection
```
Input: "I need an AI model for customer support chatbot that can handle 1000+ conversations daily, must be cost-effective..."

Output: Comprehensive model comparison with specific recommendations based on requirements.
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **State Management**: TanStack React Query
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Charts**: Recharts (when needed)

## 🎨 Design System

The application uses a carefully crafted design system with:

- **Colors**: Purple and blue gradient theme with semantic color tokens
- **Typography**: Clear hierarchy with appropriate font weights and sizes
- **Spacing**: Consistent spacing scale for better visual rhythm
- **Components**: Reusable components following design patterns
- **Animations**: Smooth transitions and hover effects

## 📝 Component Documentation

### Key Components

#### `AgentCard`
Reusable card component for displaying AI agent information and handling interactions.

#### `useAgentCall`
Custom hook for managing AI agent API calls with loading states and error handling.

#### `Header` & `Footer`
Navigation components with responsive design and theme switching.

## 🚀 Deployment

### Using Lovable (Recommended)
1. Open your Lovable project
2. Click "Share" → "Publish"
3. Your app will be deployed automatically

### Manual Deployment
The application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project and upload the `dist` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem

## 🔮 Future Enhancements

- [ ] User authentication and personalized recommendations
- [ ] Save and export analysis results
- [ ] Integration with popular business tools
- [ ] Advanced analytics and reporting
- [ ] Mobile app version
- [ ] API for third-party integrations

## 📊 Performance

The application is optimized for performance with:
- Code splitting and lazy loading
- Tree shaking to reduce bundle size
- Optimized images and assets
- Efficient state management
- Fast build times with Vite

## 🌟 Acknowledgments

- Built with [Lovable](https://lovable.dev) - The fastest way to build web apps
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for businesses looking to leverage AI effectively**

For more information, visit our [documentation](./docs/) or check out the [live demo](https://your-demo-url.com).
