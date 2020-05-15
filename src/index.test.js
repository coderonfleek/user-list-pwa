const { getByText } = require("@testing-library/dom");
require("@testing-library/jest-dom/extend-expect");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("renders a heading element", () => {
    expect(container.querySelector("h2")).not.toBeNull();
    expect(
      getByText(container, "Welcome to the Users list PWA.")
    ).toBeInTheDocument();
  });
});
