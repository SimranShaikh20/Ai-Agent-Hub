
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAgentCall } from '@/hooks/useAgentCall';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Bot, Zap, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaskAutomation = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [showInputPrompt, setShowInputPrompt] = useState(false);
  const { callAgentWithState, loading, error } = useAgentCall();

  const handleAnalyze = async () => {
    if (!userInput.trim()) {
      setShowInputPrompt(true);
      return;
    }

    const response = await callAgentWithState('TASK_AUTOMATION', userInput);
    if (response) {
      setResult(response);
    }
  };

  const formatOutput = (text: string) => {
    return text
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\[(.*?)\]/g, '$1')
      .replace(/^\s*[-*+]\s/gm, '• ')
      .replace(/✅|⭐|💰|📊|💵|⏰|🎯|📈/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Task Automation AI</h1>
                <p className="text-gray-600 mt-1">Intelligent workflow analysis and automation recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Input Section */}
        <Card className="mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800">Describe Your Task or Workflow</CardTitle>
                <CardDescription>Provide details about your current process that you'd like to automate</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Example: Our HR team manually schedules interviews by emailing candidates and coordinating times. This process takes about 3-4 hours daily..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[120px] text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
            {showInputPrompt && !userInput.trim() && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-700 text-sm flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Please describe your task or workflow above to get AI analysis
                </p>
              </div>
            )}
            
            <Button 
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white border-0 shadow-sm"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>AI Analyzing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>Analyze for Automation</span>
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {loading && <LoadingSpinner message="AI agent analyzing your workflow..." />}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">AI Agent Error: {error}</p>
          </div>
        )}
        
        {result && (
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Automation Analysis Results</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {formatOutput(result)}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TaskAutomation;
