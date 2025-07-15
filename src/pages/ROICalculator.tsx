
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAgentCall } from '@/hooks/useAgentCall';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Bot, TrendingUp, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [showInputPrompt, setShowInputPrompt] = useState(false);
  const { callAgentWithState, loading, error } = useAgentCall();

  const handleAnalyze = async () => {
    if (!userInput.trim()) {
      setShowInputPrompt(true);
      return;
    }

    const response = await callAgentWithState('ROI_CALCULATOR', userInput);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-md">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI ROI Calculator</h1>
                <p className="text-gray-600 mt-1">Comprehensive return on investment analysis</p>
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
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-800">Describe Your AI Investment</CardTitle>
                <CardDescription>Provide details about current costs, expected benefits, and implementation scope</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Example: We want to implement AI chatbot to reduce customer service costs. Currently spending $50,000/month on support staff. Expecting 70% reduction in manual work with $15,000 implementation cost..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[120px] text-base border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
            />
            {showInputPrompt && !userInput.trim() && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-700 text-sm flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Please describe your AI investment scenario for ROI analysis
                </p>
              </div>
            )}
            
            <Button 
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white border-0 shadow-sm"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>AI Calculating...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Calculate ROI</span>
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {loading && <LoadingSpinner message="AI agent calculating your ROI..." />}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">AI Agent Error: {error}</p>
          </div>
        )}
        
        {result && (
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">ROI Analysis Results</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-slate-50 to-green-50 border border-green-200 rounded-lg p-6">
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

export default ROICalculator;
