const nightmare = require("nightmare");
const cheerio = require("cheerio");
const night = new nightmare({
  show: true,
});

const contentPromise = (url) => {
  console.log(url, "urlll");
  return new Promise(function (resolve, reject) {
    let da;
    night
      .goto(url)
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      .end()
      .then(async (e) => {
        console.log(e, "html body");
        let $ = cheerio.load(e);

        da = $(
          "#__next > div > main > section.article.news.global-content > div > div.article-module.article > article.news.default-article.article > div.article-body-wrapper > section,.article-content > div,.article-body"
        );
      });
    console.log(da, "daaaaa");
    resolve(url);
    reject("Error");
  });
};

module.exports = contentPromise;
