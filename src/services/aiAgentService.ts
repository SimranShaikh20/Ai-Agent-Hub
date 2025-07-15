
export interface AgentRequest {
  user_input: string;
}

export interface AgentResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const AGENTS = {
  TASK_AUTOMATION: {
    url: "https://gateway.lyzr.ai/agent/684ea05599e9a0858886bd80/invoke",
    name: "Task Automation Evaluator"
  },
  LLM_SELECTOR: {
    url: "https://gateway.lyzr.ai/agent/684ea0a199e9a0858886bd81/invoke",
    name: "LLM Model Selector"
  },
  COST_ESTIMATOR: {
    url: "https://gateway.lyzr.ai/agent/684ea12ae5203d8a7b653617/invoke",
    name: "Inference Cost Estimator"
  },
  ROI_CALCULATOR: {
    url: "https://gateway.lyzr.ai/agent/684ea15e99e9a0858886bd85/invoke",
    name: "ROI Calculator"
  }
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer sk-default-3FmoepUxgYN116AEJnv8Psa0jF5DSOdd'
};

export const callAgent = async (agentType: keyof typeof AGENTS, userInput: string): Promise<string> => {
  const agent = AGENTS[agentType];
  
  try {
    const response = await fetch(agent.url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        inputs: {
          user_input: userInput
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: AgentResponse = await response.json();
    return data.choices[0]?.message?.content || 'No response received';
  } catch (error) {
    console.error(`Error calling ${agent.name}:`, error);
    throw new Error(`Failed to get response from ${agent.name}`);
  }
};
