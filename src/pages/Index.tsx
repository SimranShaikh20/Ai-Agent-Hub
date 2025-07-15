
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Search, Calculator, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
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
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'LLM_SELECTOR',
      title: 'AI Model Selector',
      description: 'Smart recommendations for the optimal language model based on your specific requirements and constraints.',
      shortDescription: 'Choose the best AI model for your needs',
      path: '/llm-selector',
      icon: Search,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      type: 'COST_ESTIMATOR',
      title: 'AI Cost Estimator',
      description: 'Precise cost calculations for AI inference workloads with detailed breakdown and projections.',
      shortDescription: 'Calculate AI implementation costs',
      path: '/cost-estimator',
      icon: Calculator,
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      type: 'ROI_CALCULATOR',
      title: 'AI ROI Calculator',
      description: 'Comprehensive return on investment analysis for your AI implementation strategy.',
      shortDescription: 'Measure AI investment returns',
      path: '/roi-calculator',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Agent Hub</h1>
                <p className="text-gray-600 mt-1">Choose your AI assistant for business optimization</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>4 AI Agents Ready</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to AI Agent Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select an AI agent below to get intelligent insights for your business challenges. 
            Each agent specializes in different aspects of AI implementation and optimization.
          </p>
        </div>

        {/* AI Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card key={agent.type} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${agent.gradient} text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{agent.title}</CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">{agent.shortDescription}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">{agent.description}</p>
                  
                  <Link to={agent.path}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${agent.gradient} hover:opacity-90 text-white border-0 shadow-sm group-hover:shadow-md transition-all duration-300`}
                    >
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

        {/* Features Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Agents?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Analysis</h4>
              <p className="text-gray-600 text-sm">Get immediate insights powered by advanced AI algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data-Driven</h4>
              <p className="text-gray-600 text-sm">Recommendations based on real-world data and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Ready</h4>
              <p className="text-gray-600 text-sm">Built for business-critical decisions and scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
            <Bot className="h-4 w-4" />
            <span>Powered by advanced AI agents • Enterprise-grade insights for your business strategy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
