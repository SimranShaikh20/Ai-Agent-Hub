
import { useState } from 'react';
import { callAgent } from '@/services/aiAgentService';

export const useAgentCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callAgentWithState = async (
    agentType: 'TASK_AUTOMATION' | 'LLM_SELECTOR' | 'COST_ESTIMATOR' | 'ROI_CALCULATOR',
    userInput: string
  ): Promise<string | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await callAgent(agentType, userInput);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { callAgentWithState, loading, error };
};
