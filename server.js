const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
var natural = require("natural");

let night = new Nightmare({
  show: true,
  gotoTimeout: 8000,
});
const app = express();

const PORT = 3000;
var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/nightmare-coin", async (req, res, next) => {
  try {
    const asds = await night
      .goto(`https://www.coindesk.com`)
      .wait(2000)
      .click(
        "#__next div > main > section.home.global-content > div.home-module > div.featured-hub.v15up > div.container > section.featured-hub-content.v15up > section.top-section > div > section.article-card-fh.xl.dark > div.card-img-block > a"
      )
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let $ = cheerio.load(e);
        let data = [];
        let da = $(
          "#__next > div > main > section.article.news.global-content > div > div.article-module.article > article.news.default-article.article > div.article-body-wrapper > section,.article-content > div,.article-body"
        ).text();
        tfidf.addDocument(da);
        let keywordArray = ["bitcoin", "Ethereum", "Tether", "MDEX"];
        keywordArray.map((keyw) =>
          tfidf.tfidfs(keyw, function (i, measure) {
            console.log("document #" + i + " is " + measure);
          })
        );
      });
    console.log(asds, "asdssss");
  } catch (e) {
    res.json({ message: e });

    console.log(e, "eeeee");
  }
});
app.use("/nightmare-coin", async (req, res, next) => {
  try {
    const asds = await night
      .goto(`https://www.coindesk.com`)
      .wait(2000)
      .click(
        "#__next div > main > section.home.global-content > div.home-module > div.featured-hub.v15up > div.container > section.featured-hub-content.v15up > section.top-section > div > section.article-card-fh.xl.dark > div.card-img-block > a"
      )
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let $ = cheerio.load(e);
        let data = [];
        let da = $(
          "#__next > div > main > section.article.news.global-content > div > div.article-module.article > article.news.default-article.article > div.article-body-wrapper > section,.article-content > div,.article-body"
        ).text();
        tfidf.addDocument(da);
        let keywordArray = ["bitcoin", "Ethereum", "Tether", "MDEX"];
        keywordArray.map((keyw) =>
          tfidf.tfidfs(keyw, function (i, measure) {
            console.log("document #" + i + " is " + measure);
          })
        );
      });
    console.log(asds, "asdssss");
  } catch (e) {
    res.json({ message: e });

    console.log(e, "eeeee");
  }
});
app.use("/nightmare-chinese", async (req, res, next) => {
  try {
    const asds = await night
      .goto(`https://www.shenliancaijing.com/c/information.html`)
      .wait(2000)
      .wait(2000)
      .evaluate(() =>
        document.querySelector("a.load-more-btn,.no-more-div-new")
      )
      // .end()
      .then((e) => {
        console.log(e);
        let $ = cheerio.load(e);
        let data = [];
        $(
          "#__next > div > main > section > div.story-stack-chinese-wrapper > div.container > div.page-area-dotted > section.page-area-dotted-content > div.story-stack > section.list-body"
        ).each(function () {
          $(this)
            .find("div.list-item-card.post ")
            .each(function () {
              let tag = $(this)
                .find("div.text-content > a.button.eyebrow-button")
                .text();
              let title = $(this)
                .find("div.text-content > a > h4.heading")
                .text();
              let publishedDate = $(this)
                .find("div.text-content > div.card-desc-block > time.time")
                .text();
              let asset = $(this)
                .find(
                  "div.media-content > div.media-wrapper > a > picture > source"
                )
                .attr("srcset");
              let link = $(this)
                .find("div.media-content > div.media-wrapper > a")
                .attr("href");
              console.log(link);
              data.push({
                link: `https://www.coindesk.com${link}`,
                img: asset,
                title,
                tag,
                meta: {
                  source: "https://www.coindesk.com",
                },
                publishedDate,
              });
            });
        });
        res.json({
          data,
        });
      });
    console.log(asds, "asdssss");
  } catch (e) {
    res.json({ message: e });

    console.log(e, "eeeee");
  }
});
app.use("/nightmare-cointelegraph", async (req, res, next) => {
  try {
    const asds = await night
      .goto(`https://www.coindesk.com/tag/markets-bitcoin`)
      .wait(2000)
      .click("div.arrow > i.arrow-end")
      .wait(2000)
      .click("div.arrow > i.arrow-end")
      .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      // .wait(2000)
      // .click("div.arrow > i.arrow-end")
      .wait(3000)
      .evaluate(() => document.body.innerHTML)
      .then((e) => {
        console.log(e);
        let $ = cheerio.load(e);
        let data = [];
        let da;
        const prom = [];
        $(
          "#__next > div > main > section > div.story-stack-chinese-wrapper > div.container > div.page-area-dotted > section.page-area-dotted-content > div.story-stack > section.list-bodyx"
        ).map(function () {
          // $(this)
          //   .find()
          //   .each(async function () {
          // let tag = $(this)
          //   .find("div.text-content > a.button.eyebrow-button")
          //   .text();
          // let title = $(this)
          //   .find("div.text-content > a > h4.heading")
          //   .text();
          // let publishedDate = $(this)
          //   .find("div.text-content > div.card-desc-block > time.time")
          //   .text();
          // let asset = $(this)
          //   .find(
          //     "div.media-content > div.media-wrapper > a > picture > source"
          //   )
          //   .attr("srcset");
          let link = $(this)
            .find("div.media-content > div.media-wrapper > a")
            .attr("href");
          night
            .goto(`https://www.coindesk.com${link}`)
            .wait("body")
            .evaluate(() => document.body.innerHTML)
            .then(async (e) => {
              // console.log(e, "html body");
              let $ = cheerio.load(e);
              da = await $(
                "#__next > div > main > section.article.news.global-content > div > div.article-module.article > article.news.default-article.article > div.article-body-wrapper > section,.article-content > div,.article-body"
              ).text();
              console.log(da, `daaaa ${link}`);
              return da;
            })
            .catch((e) => console.log(e));
        });
        //   Promise.allSettled(prom)
        //     .then((res) => console.log(res))
        //     .catch((e) => console.log(e, "errrr"));
        // });
        // res.json({
        //   data,
        // });
      });
    console.log(asds, "asdssss");
  } catch (e) {
    res.json({ message: e });

    console.log(e, "eeeee");
  }
});
app.use("/nightmare-jinse", async (req, res, next) => {
  try {
    const asds = await night
      .goto(`https://news.bitcoin.com/`)
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let data = [];
        let newdata = [];
        let $ = cheerio.load(e);
        let ele = $(
          "div#td-outer-wrap > div.td-main-content-wrap.td-main-page-wrap.td-container-wrap > div.td-container.tdc-content-wrap > div.vc_row.wpb_row.td-pb-row > div.wpb_column.vc_column_container.td-pb-span3"
        ).each(function () {
          let d = $(this)
            .find(
              "div.vc_column-inner > div.wpb_wrapper > div.td_block_wrap.td_block_story_medium > div.td_block_inner.td-column-1.td-opacity-author > div.story.story--medium"
            )
            .each(function () {
              let href = $(this).find("a").attr("href");
              let img = $(this).find("a > img").attr("src");
              let text = $(this)
                .find(
                  "div.story--medium__info > a >h6.story__title.story--medium__title"
                )
                .text();
              data.push({
                url: href,
                title: text,
                img: img,
              });
            });
          let largeCol = $(this)
            .find(
              "div.vc_column-inner > div.wpb_wrapper > div.td_block_wrap.td_block_story_huge > div.td_block_inner.td-column-1.td-opacity-author"
            )
            .each(function () {
              let hungeurl = $(this).find("a").attr("href");
              console.log(hungeurl, "hunglelelel");
            });
          console.log(largeCol, "COLLLLL");
          let d2 = $(this)
            .find(
              "div.vc_column-inner > div.wpb_wrapper > div.td_block_wrap.td_block_story_tiny > div.td_block_inner.td-column-1.td-opacity-author > div.story.story--tiny"
            )
            .each(function () {
              tinyurl = $(this).find("a").attr("href");
              let title = $(this).find("h6").text();
              newdata.push({
                url: tinyurl,
                title,
              });
            });
          // console.log(d2, "d2222");
        });
        res.json({
          data: [...data, ...newdata],
        });
      });
  } catch (e) {
    res.json({ message: e });
  }
});
app.use("/nightmare-bitcoin-nextpage", async (req, res, next) => {
  try {
    // for (let i = 2; i > 3; i++) {
    const asds = await night
      .goto(`https://news.bitcoin.com/page/2/`)
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      .end()
      .then((e) => {
        let data = [];
        let newdata = [];
        let $ = cheerio.load(e);
        let ele = $(
          "div.td-container.td-pb-article-list > div.td-pb-row > div.td-pb-span12.td-main-content > div.td-ss-main-content.td_block_template_1 > div.standard__article.standard__article__grid > div.story.story--medium"
        ).each(function () {
          let anchor = $(this).find("a").attr("href");
          let img = $(this).find("a > img").attr("src");
          let title = $(this)
            .find(
              ".story--medium__info > a > h6.story__title.story--medium__title"
            )
            .text();
          console.log(anchor, "Anchor");
          console.log(img, "img");
          console.log(title, "img");
        });
      });
    res.json({
      data: [...data, ...newdata],
    });
    // }
  } catch (e) {
    res.json({ message: e });
  }
});
app.use("/nightmare-chin", async (req, res, next) => {
  try {
    // for (let i = 2; i > 3; i++) {
    let data = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let newdata = [];
        let $ = cheerio.load(e);
        let ele = $(
          "div.jeg_posts_wrap > div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_sm.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data.push({
            url,
            img,
            // publishedDate,
            title,
          });
          console.log(data, "datatat");
        });
      });
    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .click("div.jeg_block_navigation > div.jeg_block_nav > a.next")
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        // console.log(e, "htmllll");
        let data = [];
        let newdata = [];
        let $ = cheerio.load(e);
        let ele = $(
          "div.jeg_posts_wrap > div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_sm.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data2.push({
            url,
            img,
            // publishedDate,
            title,
          });
          console.log(data, "datatat");
        });
      });
    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .click("div.jeg_block_navigation > div.jeg_block_nav > a.next")
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let $ = cheerio.load(e);
        let ele = $(
          "div.jeg_posts_wrap > div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_sm.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data3.push({
            url,
            img,
            // publishedDate,
            title,
          });
        });
      });
    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let $ = cheerio.load(e);
        let ele = $(
          "div.elementor-widget-container > div.jeg_postblock_22.jeg_postblock.jeg_module_hook.jeg_pagination_loadmore.jeg_col_2o3 > div.jeg_block_container > div.jeg_posts_wrap > div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_md_5.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title34");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data5.push({
            url,
            img,
            // publishedDate,
            title,
          });
        });
        console.log(ele, "elelelel");
      });

    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      // .end()
      .then((e) => {
        let $ = cheerio.load(e);
        let ele = $(
          "div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3.loaded.scroll > div.jeg_block_container  > div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_sm.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title34");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data4.push({
            url,
            img,
            // publishedDate,
            title,
          });
        });
        console.log(ele, "elelelel");
      });
    const newdata = [...data, ...data2, ...data3, ...data4, ...data5];
    res.json({
      newdata,
    });
    // }
  } catch (e) {
    res.json({ message: e });
  }
});

app.use("/nightmare-blocktempo", async (req, res, next) => {
  try {
    let data = [];
    await night
      .goto(`https://www.blocktempo.com/`)
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .click(
        "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_navigation > div.jeg_block_loadmore > a"
      )
      .wait(2000)
      .evaluate(() => document.body.innerHTML)
      .then((e) => {
        // console.log(e, "eeeee");
        let $ = cheerio.load(e);
        let ele = $(
          "div.elementor-element.elementor-element-f33623d.elementor-widget.elementor-widget-jnews_block_15_elementor > div.elementor-widget-container > div.jeg_postblock_15.jeg_postblock.jeg_module_hook.jeg_pagination_scrollload.jeg_col_2o3,.jnews_module_1093_5_60fe6a7180700 > div,.jeg_block_container > div.jeg_posts_wrap >div.jeg_posts.jeg_load_more_flag > article.jeg_post.jeg_pl_md_box.format-standard"
        ).each(function () {
          let url = $(this).find("div.jeg_thumb > a").attr("href");
          console.log(url, "urlll");
          let img = $(this)
            .find(
              "div.jeg_thumb > a >div.thumbnail-container.animate-lazy.size-715 > img"
            )
            .attr("src");
          let title = $(this)
            .find("div.jeg_postblock_content > h3.jeg_post_title > a")
            .text();
          console.log(title, "title34");
          // let img = $(this).find("div.item-top > a > img").attr("src");
          // let publishedDate = $(this).find("div.otherInfo > span.time").text();
          // let title = $(this).find("div.item-top > div.intro > a").text();
          data.push({
            url,
            img,
            // publishedDate,
            title,
          });
        });
        res.json({
          data,
        });
      });
  } catch (er) {
    res.json({ er });
  }
});

app.use("/coindesk-bitcoin-home", (req, res, next) => {
  request("https://www.coindesk.com", (err, res1, body) => {
    if (err) {
      console.log(err);
    } else {
      let $ = cheerio.load(body);
      let data = [];
      let data2 = [];
      let dottedData = [];
      let href1 = $(
        "#__next div > main > section.home.global-content > div.home-module > div.featured-hub.v15up > div.container > section.featured-hub-content.v15up > section.top-section > div > section.article-card-fh.xl.dark > div.card-img-block > a"
      );
      console.log(href1, "hrefffff");
      $(
        "#__next div > section.featured-hub-content.v5up > section.right-column > section.article-card-fh"
      ).each(async function () {
        let link = $(this).find("div.card-img-block a").attr("href");
        let link2 = $(this)
          .find("div.card-img-block a.button.eyebrow-button")
          .text();
        let img = $(this)
          .find("div.card-img-block a picture source")
          .attr("srcset");
        let title = $(this).find("div.text-group").text();
        let publishedDate = $(this)
          .find(
            "div.text-group > div.card-text-block > div.card-desc > span.card-date"
          )
          .text();

        await night
          .goto(`https://www.coindesk.com${link}`)
          .wait(2000)
          .evaluate(() => document.body.innerHTML)
          .then((e) => {
            let $ = cheerio.load(e);
            console.log($, "$$$$$$$");
          });
        data2.push({
          link: `https://www.coindesk.com${link}`,
          img,
          title,
          tag: link2,
          meta: {
            source: "https://www.coindesk.com",
          },
          publishedDate,
        });
      });
      $(
        "#__next > div > main > section > div.story-stack-chinese-wrapper > div.container > div.page-area-dotted > section.page-area-dotted-content > div.story-stack > section.list-body"
      ).each(function () {
        $(this)
          .find("div.list-item-card.post ")
          .each(function () {
            let tag = $(this)
              .find("div.text-content > a.button.eyebrow-button")
              .text();
            let title = $(this)
              .find("div.text-content > a > h4.heading")
              .text();
            let publishedDate = $(this)
              .find("div.text-content > div.card-desc-block > time.time")
              .text();
            let asset = $(this)
              .find(
                "div.media-content > div.media-wrapper > a > picture > source"
              )
              .attr("srcset");
            let link = $(this)
              .find("div.media-content > div.media-wrapper > a")
              .attr("href");
            console.log(link);
            dottedData.push({
              link: `https://www.coindesk.com${link}`,
              img: asset,
              title,
              tag,
              meta: {
                source: "https://www.coindesk.com",
              },
              publishedDate,
            });
          });
      });
      res.json({
        data: [...data, ...data2, ...dottedData],
        message: "Success crawled",
      });
      //   );
      //   );
    }
  });
});
app.use("/coindesk-bitcoin", (req, res, next) => {
  request("https://www.coindesk.com/tag/markets-bitcoin", (err, res1, body) => {
    if (err) {
      console.log(err);
    } else {
      let $ = cheerio.load(body);
      let data = [];
      let data2 = [];
      let dottedData = [];
      $(
        "#__next div > section.featured-hub-content.v5up > section.left-column > section.article-card-fh.m.dark"
      ).each(function (index) {
        let link = $(this).find("div.card-img-block a").attr("href");
        let link2 = $(this)
          .find("div.card-img-block a.button.eyebrow-button")
          .text();
        let img = $(this)
          .find("div.card-img-block a picture source")
          .attr("srcset");
        let title = $(this).find("div.text-group").text();
        let publishedDate = $(this)
          .find(
            "div.text-group > div.card-text-block > div.card-desc > span.card-date"
          )
          .text();

        data.push({
          link: `https://www.coindesk.com${link}`,
          img,
          title,
          tag: link2,
          meta: {
            source: "https://www.coindesk.com",
          },
          publishedDate,
        });
      });
      $(
        "#__next div > section.featured-hub-content.v5up > section.right-column > section.article-card-fh"
      ).each(function () {
        let link = $(this).find("div.card-img-block a").attr("href");
        let link2 = $(this)
          .find("div.card-img-block a.button.eyebrow-button")
          .text();
        let img = $(this)
          .find("div.card-img-block a picture source")
          .attr("srcset");
        let title = $(this).find("div.text-group").text();
        let publishedDate = $(this)
          .find(
            "div.text-group > div.card-text-block > div.card-desc > span.card-date"
          )
          .text();
        data2.push({
          link: `https://www.coindesk.com${link}`,
          img,
          title,
          tag: link2,
          meta: {
            source: "https://www.coindesk.com",
          },
          publishedDate,
        });
      });
      $(
        "#__next > div > main > section > div.story-stack-chinese-wrapper > div.container > div.page-area-dotted > section.page-area-dotted-content > div.story-stack > section.list-body"
      ).each(function () {
        $(this)
          .find("div.list-item-card.post ")
          .each(function () {
            let tag = $(this)
              .find("div.text-content > a.button.eyebrow-button")
              .text();
            let title = $(this)
              .find("div.text-content > a > h4.heading")
              .text();
            let publishedDate = $(this)
              .find("div.text-content > div.card-desc-block > time.time")
              .text();
            let asset = $(this)
              .find(
                "div.media-content > div.media-wrapper > a > picture > source"
              )
              .attr("srcset");
            let link = $(this)
              .find("div.media-content > div.media-wrapper > a")
              .attr("href");
            console.log(link);
            dottedData.push({
              link: `https://www.coindesk.com${link}`,
              img: asset,
              title,
              tag,
              meta: {
                source: "https://www.coindesk.com",
              },
              publishedDate,
            });
          });
      });
      res.json({
        data: [...data, ...data2, ...dottedData],
        message: "Success crawled",
      });
      //   );
      //   );
    }
  });
});
app.use("/coindesk-market", (req, res, next) => {
  request("https://www.coindesk.com/category/markets", (err, res1, body) => {
    if (err) {
      console.log(err);
    } else {
      let $ = cheerio.load(body);
      let data = [];
      let data2 = [];
      let dottedData = [];
      $(
        "#__next div > section.featured-hub-content.v5up > section.left-column > section.article-card-fh.m.dark"
      ).each(function (index) {
        let link = $(this).find("div.card-img-block a").attr("href");
        let link2 = $(this)
          .find("div.card-img-block a.button.eyebrow-button")
          .text();
        let img = $(this)
          .find("div.card-img-block a picture source")
          .attr("srcset");
        let title = $(this).find("div.text-group").text();
        let publishedDate = $(this)
          .find(
            "div.text-group > div.card-text-block > div.card-desc > span.card-date"
          )
          .text();

        data.push({
          link: `https://www.coindesk.com${link}`,
          img,
          title,
          tag: link2,
          meta: {
            source: "https://www.coindesk.com",
          },
          publishedDate,
        });
      });
      $(
        "#__next div > section.featured-hub-content.v5up > section.right-column > section.article-card-fh"
      ).each(function () {
        let link = $(this).find("div.card-img-block a").attr("href");
        let link2 = $(this)
          .find("div.card-img-block a.button.eyebrow-button")
          .text();
        let img = $(this)
          .find("div.card-img-block a picture source")
          .attr("srcset");
        let title = $(this).find("div.text-group").text();
        let publishedDate = $(this)
          .find(
            "div.text-group > div.card-text-block > div.card-desc > span.card-date"
          )
          .text();
        data2.push({
          link: `https://www.coindesk.com${link}`,
          img,
          title,
          tag: link2,
          meta: {
            source: "https://www.coindesk.com",
          },
          publishedDate,
        });
      });
      $(
        "#__next > div > main > section > div.story-stack-chinese-wrapper > div.container > div.page-area-dotted > section.page-area-dotted-content > div.story-stack > section.list-body"
      ).each(function () {
        $(this)
          .find("div.list-item-card.post ")
          .each(function () {
            let tag = $(this)
              .find("div.text-content > a.button.eyebrow-button")
              .text();
            let title = $(this)
              .find("div.text-content > a > h4.heading")
              .text();
            let publishedDate = $(this)
              .find("div.text-content > div.card-desc-block > time.time")
              .text();
            let asset = $(this)
              .find(
                "div.media-content > div.media-wrapper > a > picture > source"
              )
              .attr("srcset");
            let link = $(this)
              .find("div.media-content > div.media-wrapper > a")
              .attr("href");
            console.log(link);
            dottedData.push({
              link: `https://www.coindesk.com${link}`,
              img: asset,
              title,
              tag,
              meta: {
                source: "https://www.coindesk.com",
              },
              publishedDate,
            });
          });
      });
      res.json({
        data: [...data, ...data2, ...dottedData],
        message: "Success crawled",
      });
      //   );
      //   );
    }
  });
});

app.use("/cointele-news", (req, res, next) => {
  request(
    `https://cointelegraph.com/tags/${req.body.type}`,
    (err, res1, body) => {
      if (err) {
        console.log(err);
      } else {
        let $ = cheerio.load(body);
        let data = [];
        $(
          "#__nuxt  > #__layout > .layout > .layout__wrp > main > div.tag-page > div.container > div.tag-page__rows > div.tag-page__posts-col > div.posts-listing.posts-listing_inline > ul.posts-listing__list > li.posts-listing__item"
        ).each(function () {
          let link = $(this).find("article.post-card-inline > a").attr("href");
          let tag = $(this)
            .find(
              "article.post-card-inline > a.post-card-inline__figure-link > figure.post-card-inline__figure > span.post-card-inline__badge"
            )
            .text();
          let publishedDate = $(this)
            .find(
              "article.post-card-inline > div.post-card-inline__content > div.post-card-inline__header > div.post-card-inline__meta > time"
            )
            .attr("datetime");
          console.log(publishedDate, "published date");
          let title = $(this)
            .find(
              "article.post-card-inline > div.post-card-inline__content > p.post-card-inline__text"
            )
            .text();
          data.push({
            link: `https://cointelegraph.com${link}`,
            title,
            tag: req.body.type,
            publishedDate,
            meta: {
              source: `https://cointelegraph.com/tags/${req.body.type}`,
            },
          });
        });
        res.json({
          data,
          message: "Successfully crawled",
        });
      }
    }
  );
});
app.use("/uzmancoin-news", async (req, res, next) => {
  await night
    .goto(`https://uzmancoin.com/kategori/haberler/`)
    .wait(2000)
    .click(
      "div.widget.xt-archive.post-archive.xt_news > nav.navigation.paging-navigation.center > a"
    )
    .evaluate(() => document.body.innerHTML)
    .then((e) => {
      let $ = cheerio.load(e);
      let data = [];
      $(
        "#pusher > #wrapper > #outer_wrapper > #inner_wrapper > div.row > div.small-12 > div.row.in-container > div.small-12.medium-12.column.left > div.widget.xt-archive.post-archive.xt_news > ul#post-list > li"
      ).each(function () {
        let image = $(this)
          .find(
            "div.row > div.small-12.medium-4.large-4.column.first > div.has-background"
          )
          .attr("data-bg");
        let tag = $(this)
          .find(
            "div.row > div.small-12.medium-4.large-4.column.first > div.has-background > div.meta-container > div.meta.side > span"
          )
          .text();
        let link1 = $(this)
          .find(
            "div.row > div.small-12.medium-4.large-4.column.first > div.has-background > div.meta-container > div.meta.side > span > a"
          )
          .attr("href");
        console.log(link1, "link");
        let link = $(this)
          .find(
            "div.row > div.small-12.medium-8.large-8.column.left.last > div.meta.side > h3 > a"
          )
          .attr("href");
        let title = $(this)
          .find(
            "div.row > div.small-12.medium-8.large-8.column.left.last > div.meta.side > h3 > a"
          )
          .text();
        let publishedDate = $(this)
          .find(
            "div.row > div.small-12.medium-8.large-8.column.left.last > div.meta.side > time"
          )
          .text();
        data.push({ link, img: image, title, tag, publishedDate });
      });
      res.json({
        data,
        message: "successfully crawled",
      });
    });

  // res.json({
  //   data,
  //   message: "Successfully crawled",
  // });
});

app.use("/night-telegraph", async (req, res) => {
  try {
    const prom = [];
    const asds = await night
      .goto(`https://cointelegraph.com/tags/${req.body.type}`)
      .click("button.btn.posts-listing__more-btn")
      .wait(2000)
      .click("button.btn.posts-listing__more-btn")
      .evaluate(() => document.body.innerHTML)
      .then(async (e) => {
        try {
          let $ = cheerio.load(e);
          let data = [];
          $(
            "#__nuxt  > #__layout > .layout > .layout__wrp > main > div.tag-page > div.container > div.tag-page__rows > div.tag-page__posts-col > div.posts-listing.posts-listing_inline > ul.posts-listing__list > li.posts-listing__item"
          ).map(async function () {
            let link = $(this)
              .find("article.post-card-inline > a")
              .attr("href");
            let tag = $(this)
              .find(
                "article.post-card-inline > a.post-card-inline__figure-link > figure.post-card-inline__figure > span.post-card-inline__badge"
              )
              .text();
            let publishedDate = $(this)
              .find(
                "article.post-card-inline > div.post-card-inline__content > div.post-card-inline__header > div.post-card-inline__meta > time"
              )
              .attr("datetime");
            console.log(publishedDate, "published date");
            let title = $(this)
              .find(
                "article.post-card-inline > div.post-card-inline__content > p.post-card-inline__text"
              )
              .text();
            data.push(`https://cointelegraph.com${link}`);

            // data.push({
            //   news_url: `https://cointelegraph.com${link}`,
            //   // news_asset
            //   news_title: title,
            //   news_tag: req.body.type,
            //   meta: {
            //     source: `https://cointelegraph.com/tags/${req.body.type}`,
            //   },
            //   news_publishedDate: publishedDate,
            // });
          });
          console.log(data, "dadadad");
          let content = [];

          for (let i = 0; i < data.length; i++) {
            await night
              .goto(data[i])
              .wait("body")
              .evaluate(() => document.body.innerHTML)
              .then((e) => {
                let $2 = cheerio.load(e);
                let as = $2(
                  "#__nuxt  > #__layout > .layout > .layout__wrp > main > div.post-page > div.container > div.post-page__row > div.post-page__content-col > div.post-page__item > div.post,.post-page__article > article > div.post__content-wrapper"
                ).text();
                content.push({
                  body: as,
                });
                return content;
              })
              .catch((e) => e);
          }
          content.map((c) => tfidf.addDocument(c.body));
          let keywordArray = ["bitcoin"];
          let updatedContent;
          // tfidf.listTerms(keywordArray).forEach(function (item) {
          //   console.log(item.term + ": " + item.tfidf);
          // });
          for (let k = 0; k < keywordArray.length; k++) {
            tfidf.tfidfs(keywordArray[k], function (i, measure) {
              if (measure > 7) {
                console.log(keywordArray[k]);
                console.log("document #" + i + " is " + measure);
                updatedContent = content.map((ce) => {
                  var o = Object.assign({}, ce);
                  o.tag = keywordArray[k];
                  return o;
                });
              }
            });
          }

          console.log(updatedContent, "updatedcontent");
          res.json({
            updatedContent,
          });
          // Promise.all(prom)
          //   .then((res) => res)
          //   .catch((e) => e);
          // const latestNews = await NEWS.insertMany(data);
          // return res.created({ success: true });
        } catch (e) {
          console.log(e, "errr");
        }
      });

    console.log(asds, "asdssss");
  } catch (e) {
    res.json({ message: e });

    console.log(e, "eeeee");
  }
});

app.listen(PORT, () => console.log("server is running", PORT));
