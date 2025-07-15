
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import AgentCard from '@/components/AgentCard';
import { Sparkles, Building2, Zap } from 'lucide-react';

const Index = () => {
  const [userInput, setUserInput] = useState('');
  const [showInputPrompt, setShowInputPrompt] = useState(false);

  const handleAnalyzePrompt = () => {
    setShowInputPrompt(true);
  };

  const agents = [
    {
      type: 'TASK_AUTOMATION' as const,
      title: 'Task Automation Evaluator',
      description: 'Analyze workflows and identify automation opportunities for maximum efficiency gains.'
    },
    {
      type: 'LLM_SELECTOR' as const,
      title: 'LLM Model Selector',
      description: 'Get personalized recommendations for the best language models for your specific use case.'
    },
    {
      type: 'COST_ESTIMATOR' as const,
      title: 'Inference Cost Estimator',
      description: 'Calculate accurate cost projections for your AI inference workloads and usage patterns.'
    },
    {
      type: 'ROI_CALCULATOR' as const,
      title: 'ROI Calculator',
      description: 'Measure the return on investment and business impact of your AI implementations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enterprise AI Assistant Hub</h1>
              <p className="text-gray-600 mt-1">Centralized tool to evaluate automation, select LLMs, estimate costs, and calculate ROI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Input Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800">Describe Your Business Need</CardTitle>
                <CardDescription>Tell us about your task, workflow, or business requirement to get AI-powered insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Example: I need to automate customer support ticket classification and routing for 1000+ daily tickets. Looking for cost-effective AI solution with high accuracy..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[120px] text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
            {showInputPrompt && !userInput.trim() && (
              <p className="text-amber-600 text-sm mt-2 flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                Please describe your business need above to get personalized AI insights
              </p>
            )}
          </CardContent>
        </Card>

        {/* Agent Cards Grid */}
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
          <p className="text-gray-500 text-sm">
            Powered by advanced AI agents • Get comprehensive insights for your enterprise AI strategy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
