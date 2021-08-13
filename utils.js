const nightmare = require("nightmare");
const cheerio = require("cheerio");
const { prop } = require("cheerio/lib/api/attributes");
const night = new nightmare({
  show: true,
  gotoTimeout: 8000,
});

const contentPromise = (urls) => {
  let prom = [];
  return new Promise(async function (resolve, reject) {
    let da;

    urls.forEach(function (url) {
      prom.push(
        night
          .goto(url)
          .wait("body")
          .evaluate(() => document.body.innerHTML)
          .then(async (e) => {
            let $ = cheerio.load(e);

            da = $(
              "#__next > div > main > section.article.news.global-content > div > div.article-module.article > article.news.default-article.article > div.article-body-wrapper > section,.article-content > div,.article-body"
            ).text();
            return da;
          })
          .catch((e) => console.log(e))
      );
    });

    Promise.allSettled(prom).then((res) => console.log(res, "ressss"));
    // console.log(da, "daaaaa");
    reject("Error");
  });
};

module.exports = contentPromise;
