import { getIssueItemTpl, getIssueTpl } from "./tpl.js";

const ISSUES_URL = "../data-sources/issues.json";

main();

async function main() {
  await asyncPipe([getIssueTpl, updateDOM(document.querySelector("#app"))])();
  asyncPipe([() => fetchData(ISSUES_URL), getIssueItemsTpl, updateDOM(document.querySelector("ul"))])();
}

async function fetchData(url) {
  const res = await fetch(url);
  return await res.json();
}

function getIssueItemsTpl(items) {
  return items.map((item) => getIssueItemTpl(item)).join("");
}

function updateDOM(target) {
  return (template) => {
    target.innerHTML = template;
  };
}

function asyncPipe(functions) {
  return async (initialArg) =>
    functions.reduce(async (nextArg, nextFunction) => nextFunction(await nextArg), initialArg);
}
