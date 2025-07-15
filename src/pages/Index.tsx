
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import AgentCard from '@/components/AgentCard';
import { Bot, Zap, Sparkles, ChevronRight } from 'lucide-react';

const Index = () => {
  const [userInput, setUserInput] = useState('');
  const [showInputPrompt, setShowInputPrompt] = useState(false);

  const handleAnalyzePrompt = () => {
    setShowInputPrompt(true);
  };

  const agents = [
    {
      type: 'TASK_AUTOMATION' as const,
      title: 'Task Automation AI',
      description: 'Intelligent analysis of workflows to identify automation opportunities and efficiency improvements.'
    },
    {
      type: 'LLM_SELECTOR' as const,
      title: 'AI Model Selector',
      description: 'Smart recommendations for the optimal language model based on your specific requirements and constraints.'
    },
    {
      type: 'COST_ESTIMATOR' as const,
      title: 'AI Cost Estimator',
      description: 'Precise cost calculations for AI inference workloads with detailed breakdown and projections.'
    },
    {
      type: 'ROI_CALCULATOR' as const,
      title: 'AI ROI Calculator',
      description: 'Comprehensive return on investment analysis for your AI implementation strategy.'
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
                <p className="text-gray-600 mt-1">Intelligent AI agents for automation, model selection, cost analysis, and ROI calculation</p>
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
        {/* Input Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800">Describe Your Business Challenge</CardTitle>
                <CardDescription>Provide details about your task, workflow, or business requirement for AI-powered insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Example: I need to automate customer support ticket classification and routing for 1000+ daily tickets. Looking for cost-effective AI solution with high accuracy..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[120px] text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
            {showInputPrompt && !userInput.trim() && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-700 text-sm flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Please describe your business challenge above to get personalized AI insights
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* AI Agents Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Available AI Agents</h2>
          <p className="text-gray-600 mb-6">Select an AI agent to analyze your business challenge</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <AgentCard
              key={agent.type}
              type={agent.type}
              title={agent.title}
              description={agent.description}
              userInput={userInput}
              onAnalyze={handleAnalyzePrompt}
            />
          ))}
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
