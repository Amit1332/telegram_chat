const { Configuration, OpenAIApi } = require("openai");
const API = "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"
const TG_API = "6005222428:AAGLP8pgTru-z-s5X5qbCvuFbeI5LxdyOF8"
const configuration = new Configuration({
  apiKey:API,
});

const openai = new OpenAIApi(configuration);

const getImage = async (text) => {
  try {
    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: "512x512",
    });

    return response.data.data[0].url;
  } catch (error) {
    console.log(error);
  }
};

const getChat = async (text) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0,
      max_tokens: 1000,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { openai, getImage,getChat };
