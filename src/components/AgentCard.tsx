
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAgentCall } from '@/hooks/useAgentCall';
import LoadingSpinner from './LoadingSpinner';
import { Bot, Search, Calculator, TrendingUp, Sparkles } from 'lucide-react';

interface AgentCardProps {
  type: 'TASK_AUTOMATION' | 'LLM_SELECTOR' | 'COST_ESTIMATOR' | 'ROI_CALCULATOR';
  title: string;
  description: string;
  userInput: string;
  onAnalyze: () => void;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'TASK_AUTOMATION':
      return <Bot className="h-5 w-5" />;
    case 'LLM_SELECTOR':
      return <Search className="h-5 w-5" />;
    case 'COST_ESTIMATOR':
      return <Calculator className="h-5 w-5" />;
    case 'ROI_CALCULATOR':
      return <TrendingUp className="h-5 w-5" />;
    default:
      return <Bot className="h-5 w-5" />;
  }
};

const getGradient = (type: string) => {
  switch (type) {
    case 'TASK_AUTOMATION':
      return 'from-blue-500 to-cyan-500';
    case 'LLM_SELECTOR':
      return 'from-purple-500 to-pink-500';
    case 'COST_ESTIMATOR':
      return 'from-orange-500 to-amber-500';
    case 'ROI_CALCULATOR':
      return 'from-green-500 to-emerald-500';
    default:
      return 'from-blue-500 to-cyan-500';
  }
};

const formatOutput = (text: string) => {
  // Remove markdown formatting
  return text
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove code
    .replace(/\[(.*?)\]/g, '$1') // Remove brackets
    .replace(/^\s*[-*+]\s/gm, '• ') // Convert list items to bullets
    .replace(/✅|⭐|💰|📊|💵|⏰|🎯|📈/g, '') // Remove emojis
    .replace(/\n{3,}/g, '\n\n') // Reduce multiple newlines
    .trim();
};

const AgentCard = ({ type, title, description, userInput, onAnalyze }: AgentCardProps) => {
  const [result, setResult] = useState<string | null>(null);
  const { callAgentWithState, loading, error } = useAgentCall();

  const handleAnalyze = async () => {
    if (!userInput.trim()) {
      onAnalyze();
      return;
    }

    const response = await callAgentWithState(type, userInput);
    if (response) {
      setResult(response);
    }
  };

  return (
    <Card className="h-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-r ${getGradient(type)} text-white shadow-sm`}>
              {getIcon(type)}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 mb-1">{title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 leading-relaxed">{description}</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            <Sparkles className="h-3 w-3" />
            <span>AI Agent</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button 
          onClick={handleAnalyze}
          disabled={loading}
          className={`w-full bg-gradient-to-r ${getGradient(type)} hover:opacity-90 text-white border-0 mb-4 shadow-sm`}
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>AI Analyzing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>Run AI Analysis</span>
            </div>
          )}
        </Button>
        
        {loading && <LoadingSpinner message="AI agent processing your request..." />}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-700 text-sm">AI Agent Error: {error}</p>
          </div>
        )}
        
        {result && (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-lg p-4 max-h-80 overflow-y-auto">
            <div className="flex items-center space-x-2 mb-3">
              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getGradient(type)} text-white`}>
                <Bot className="h-3 w-3" />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">AI Analysis Result</h4>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {formatOutput(result)}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgentCard;
