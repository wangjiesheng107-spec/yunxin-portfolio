import { chromium } from "playwright";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";

const execAsync = promisify(exec);

const PORT = 5173;
const URL = `http://localhost:${PORT}/pdf`;
const OUTPUT = "dist/wang-jiesheng-portfolio.pdf";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  fs.mkdirSync("dist", { recursive: true });

  const server = exec("npm run dev -- --host 127.0.0.1");

  try {
    await wait(4000);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(URL, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await page.pdf({
      path: OUTPUT,
      format: "A4",
      printBackground: true,
      margin: {
        top: "12mm",
        right: "12mm",
        bottom: "12mm",
        left: "12mm",
      },
    });

    await browser.close();

    console.log(`PDF exported to ${OUTPUT}`);
  } finally {
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
