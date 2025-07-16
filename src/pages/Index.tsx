
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Search, Calculator, TrendingUp, Sparkles, ArrowRight, Zap, Shield, Cpu, Star } from 'lucide-react';
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
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      type: 'LLM_SELECTOR',
      title: 'AI Model Selector',
      description: 'Smart recommendations for the optimal language model based on your specific requirements and constraints.',
      shortDescription: 'Choose the best AI model for your needs',
      path: '/llm-selector',
      icon: Search,
      gradient: 'from-purple-500 via-purple-600 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      type: 'COST_ESTIMATOR',
      title: 'AI Cost Estimator',
      description: 'Precise cost calculations for AI inference workloads with detailed breakdown and projections.',
      shortDescription: 'Calculate AI implementation costs',
      path: '/cost-estimator',
      icon: Calculator,
      gradient: 'from-orange-500 via-orange-600 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50'
    },
    {
      type: 'ROI_CALCULATOR',
      title: 'AI ROI Calculator',
      description: 'Comprehensive return on investment analysis for your AI implementation strategy.',
      shortDescription: 'Measure AI investment returns',
      path: '/roi-calculator',
      icon: TrendingUp,
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant AI-powered insights and recommendations in seconds',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Built for business-critical decisions with reliability and accuracy',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Advanced AI',
      description: 'Powered by state-of-the-art machine learning algorithms',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm mb-8">
              <Sparkles className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4 Powerful AI Agents Ready
              </span>
              <div className="flex ml-3 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-slate-900 dark:text-white">Transform Your</span>
              <br />
              <span className="text-slate-900 dark:text-white">Business with</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Select an AI agent below to get intelligent insights for your business challenges. 
              Each agent specializes in different aspects of AI implementation and optimization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <Bot className="h-6 w-6 mr-3" />
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-600 px-8 py-4 text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Choose Your AI Agent
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Each agent is specially designed to solve specific business challenges with AI precision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {agents.map((agent) => {
              const IconComponent = agent.icon;
              return (
                <Card key={agent.type} className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.bgGradient} dark:from-slate-700/20 dark:to-slate-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative pb-6 pt-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${agent.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {agent.title}
                          </CardTitle>
                          <CardDescription className="text-base text-slate-600 dark:text-slate-300 font-medium">
                            {agent.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-full">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-medium">AI Powered</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0 pb-8">
                    <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-base">
                      {agent.description}
                    </p>
                    
                    <Link to={agent.path}>
                      <Button className={`w-full bg-gradient-to-r ${agent.gradient} hover:shadow-lg text-white border-0 py-4 text-lg font-semibold group-hover:shadow-xl transition-all duration-300`}>
                        <div className="flex items-center justify-center space-x-3">
                          <Bot className="h-5 w-5" />
                          <span>Try This AI Agent</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Why Choose Our AI Agents?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
