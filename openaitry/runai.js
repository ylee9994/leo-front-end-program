const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

let tin = document.getElementById("txtIutput");
let tout = document.getElementById("txtOutput");
tmsg = tout.value;

var qdata = {
    model: "text-davinci-003",
    prompt: "",
    // "Tell me proper places for watching spring flowers",
    temperature: 0,
    max_tokens: 1000,
}
let prompcontent = tin.value
 async function sendItem(){
    qdata['prompt'] = "Tell me proper places for watching spring flowers";
    const response = await openai.createCompletion(JSON.stringify(qdata));
      console.log(response.data.choices[0].text);
 } 

sendItem()