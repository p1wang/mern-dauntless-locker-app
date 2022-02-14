import puppeteer from "puppeteer";

// export const getImage = async (req, res) => {
//   res.json({ message: "Hello!" });
// };

export const getImage = async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.dauntless-builder.com/b/YwfzTbEUgCRjuJgCPUYtKTZQf27fJCNLCypc0C66UmC0Cwes05cxCrEuwFM7CX"
  );

  const imgURL = await page.$eval(".item.no-cells img", (img) => img.src);

  // res.json({ message: typeof imgURL });

  res.status(200).json(imgURL);

  // console.log(imgURL);

  await browser.close();
};
