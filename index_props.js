import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Hello world effewefw",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Hello world effewefw</h1>\n<p>123</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Hello world effewefw"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>123</p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-04-07T02:35:14.188Z",
    'updated': null,
    'excerpt': "123",
    'cover': undefined
};
