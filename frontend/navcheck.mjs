import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 110 });

await page.goto("http://localhost:6700/", { waitUntil: "networkidle0" });
await page.screenshot({ path: "C:/Users/Admin/AppData/Local/Temp/nav-home.png" });

await page.goto("http://localhost:6700/kolhapur-to-goa", { waitUntil: "networkidle0" });
await page.screenshot({ path: "C:/Users/Admin/AppData/Local/Temp/nav-route.png" });

await page.goto("http://localhost:6700/blog", { waitUntil: "networkidle0" });
await page.screenshot({ path: "C:/Users/Admin/AppData/Local/Temp/nav-blog.png" });

await browser.close();
console.log("done");
