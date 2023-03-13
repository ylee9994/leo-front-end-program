const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);



 async function myfirstAI(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "매화꽃 보기 좋은 장소를 추천해줘",
        // "Tell me proper places for watching spring flowers",
        temperature: 0,
        max_tokens: 1000,
      });
      console.log(response.data.choices[0].text);
 } 

 myfirstAI()