
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Search, Calculator, TrendingUp, Sparkles, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const agents = [
    {
      type: 'TASK_AUTOMATION',
      title: 'Task Automation AI',
      description: 'Intelligent analysis of workflows to identify automation opportunities and efficiency improvements.',
      shortDescription: 'Automate repetitive tasks and workflows',
      path: '/task-automation',
      icon: Bot,
      color: 'text-blue-600'
    },
    {
      type: 'LLM_SELECTOR',
      title: 'AI Model Selector',
      description: 'Smart recommendations for the optimal language model based on your specific requirements and constraints.',
      shortDescription: 'Choose the best AI model for your needs',
      path: '/llm-selector',
      icon: Search,
      color: 'text-purple-600'
    },
    {
      type: 'COST_ESTIMATOR',
      title: 'AI Cost Estimator',
      description: 'Precise cost calculations for AI inference workloads with detailed breakdown and projections.',
      shortDescription: 'Calculate AI implementation costs',
      path: '/cost-estimator',
      icon: Calculator,
      color: 'text-orange-600'
    },
    {
      type: 'ROI_CALCULATOR',
      title: 'AI ROI Calculator',
      description: 'Comprehensive return on investment analysis for your AI implementation strategy.',
      shortDescription: 'Measure AI investment returns',
      path: '/roi-calculator',
      icon: TrendingUp,
      color: 'text-green-600'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant AI-powered insights and recommendations in seconds'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Built for business-critical decisions with reliability and accuracy'
    },
    {
      icon: Cpu,
      title: 'Advanced AI',
      description: 'Powered by state-of-the-art machine learning algorithms'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            4 Powerful AI Agents Ready
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transform Your Business with
            <span className="gradient-primary bg-clip-text text-transparent"> AI Agents</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select an AI agent below to get intelligent insights for your business challenges. 
            Each agent specializes in different aspects of AI implementation and optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Bot className="h-5 w-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your AI Agent</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each agent is specially designed to solve specific business challenges with AI precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card key={agent.type} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className={`h-6 w-6 ${agent.color} group-hover:text-primary-foreground`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground">{agent.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{agent.shortDescription}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{agent.description}</p>
                  
                  <Link to={agent.path}>
                    <Button className="w-full bg-primary hover:bg-primary/90 group">
                      <div className="flex items-center justify-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <span>Try This AI Agent</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border shadow-xl">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our AI Agents?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
