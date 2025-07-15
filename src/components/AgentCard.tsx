
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAgentCall } from '@/hooks/useAgentCall';
import LoadingSpinner from './LoadingSpinner';
import { Brain, Search, Calculator, TrendingUp } from 'lucide-react';

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
      return <Brain className="h-6 w-6" />;
    case 'LLM_SELECTOR':
      return <Search className="h-6 w-6" />;
    case 'COST_ESTIMATOR':
      return <Calculator className="h-6 w-6" />;
    case 'ROI_CALCULATOR':
      return <TrendingUp className="h-6 w-6" />;
    default:
      return <Brain className="h-6 w-6" />;
  }
};

const getGradient = (type: string) => {
  switch (type) {
    case 'TASK_AUTOMATION':
      return 'from-blue-500 to-purple-600';
    case 'LLM_SELECTOR':
      return 'from-green-500 to-blue-600';
    case 'COST_ESTIMATOR':
      return 'from-orange-500 to-red-600';
    case 'ROI_CALCULATOR':
      return 'from-purple-500 to-pink-600';
    default:
      return 'from-blue-500 to-purple-600';
  }
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
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${getGradient(type)}`} />
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getGradient(type)} text-white`}>
            {getIcon(type)}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-600 mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={handleAnalyze}
          disabled={loading}
          className={`w-full bg-gradient-to-r ${getGradient(type)} hover:opacity-90 text-white border-0 mb-4`}
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </Button>
        
        {loading && <LoadingSpinner message="Getting AI insights..." />}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        
        {result && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
            <h4 className="font-semibold text-gray-800 mb-2">Analysis Result:</h4>
            <div className="text-sm text-gray-700 whitespace-pre-wrap">{result}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgentCard;
