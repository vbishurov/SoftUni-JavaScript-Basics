countDivs(['<!DOCTYPE html>', '<html>', '<head lang="en">', '<meta charset="UTF-8">',
    '<title>index</title>', '<script src="/yourScript.js" defer></script>', '</head>',
    '<body>', '<div id="outerDiv">', '<div', 'class="first">',
    '<div><div>hello</div></div>', '</div>', '<div>hi<div></div></div> ',
    '<div>I am a div</div>', '</div>', '</body>', '</html>'
]);

function countDivs(html) {
    html = html.join('\n');
    var openingTagCount = html.match(/<div/g);
    var closingTagCount = html.match(/<\/div>/g);
    console.log(openingTagCount.length < closingTagCount.length ? openingTagCount.length : closingTagCount.length);
}
