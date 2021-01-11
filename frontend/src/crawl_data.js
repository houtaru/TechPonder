const { get } = require("./rss_reader");

const API = "https://api.rss2json.com/v1/api.json?rss_url=";
const userFeedURLs = {
  technology: "https://flipboard.com/section/technology-3gom1sm3v7ndbdli.rss",
  mindfulness: "https://flipboard.com/section/mindfulness-5dfsaq3ep4aph2o2.rss",
  science: "https://flipboard.com/section/science-e859lq3u73dql6cq.rss",
  daily_edition: "https://flipboard.com/@news/the-daily-edition-3adc9613z.rss",
};

Object.keys(userFeedURLs).forEach((key) => {
  // const data = await get(API + userFeedURLs[key]);
  console.log(API + userFeedURLs[key]);
});
