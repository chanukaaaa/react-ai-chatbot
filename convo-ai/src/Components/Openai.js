const { Configuration, OpenAIApi } = require ('openai');
const Configuration = new Configuration ({ apiKey: "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"});
const openai = new OpenAIApi (configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompletion ({
    model: 'gpt-3.5-turbo-1106',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}

