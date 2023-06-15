let _title = "untitled";

function title() { return _title; }
function setTitle(arg) { _title = arg; }

let result = '';
const obj = {
    articleTitle: "My Article"
}

result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

console.log(result);
console.log(_title);