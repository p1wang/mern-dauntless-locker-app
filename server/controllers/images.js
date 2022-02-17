import puppeteer from "puppeteer";

// export const getImage = async (req, res) => {
//   res.json([{ message: "Hello!" }, { test: "lol" }]);
// };

export const getImage = async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(req.body.url);

  // console.log(req.body.url);
  // await page.goto(
  //   "https://www.dauntless-builder.com/b/bMfLT0ZUoC2yT7LfYUWtxTmBCpeioCmMsZjcqC11UWCRCPjsYAtWCoLIBFKkUm"
  // );

  var images = [];

  const omnicellImageURL = await page.$eval(
    "#app > div > div.card > div.columns > div.column.is-two-thirds.build-column > div:nth-child(1) > div.item-wrapper > div > div.LazyLoad.is-visible.image-icon-wrapper > img",
    (img) => img.src
  );
  images.push(omnicellImageURL);

  const weaponImageURL = await page.$eval(
    "#app > div > div.card > div.columns > div.column.is-two-thirds.build-column > div:nth-child(2) > div > div.item > div.LazyLoad.is-visible.image-icon-wrapper > img",
    (img) => img.src
  );
  images.push(weaponImageURL);

  const lanternImageURL = await page.$eval(
    "#app > div > div.card > div.columns > div.column.is-two-thirds.build-column > div:nth-child(2) > div > div.item > div.LazyLoad.is-visible.image-icon-wrapper > img",
    (img) => img.src
  );
  images.push(lanternImageURL);

  res.status(200).json(images);

  await browser.close();
};
