import React from "react";
import * as Neutrine from "../../index.js";

let h = React.createElement;

let testBlockquote = function (){
    return h(Neutrine.Blockquote, {}, "Content of the blockquote");
};

let testCode = function (){
    let code = h(Neutrine.Code, {}, "code content");
    return h("div", {}, "Bla bla bla ", code, " bla bla bla bla");
};

let testHeading = function () {
    let h1 = h(Neutrine.Heading, {type: "h1"}, "Heading 1");
    let h2 = h(Neutrine.Heading, {type: "h2"}, "Heading 2");
    return h("div", {}, h1, h2);
};

let testParagraph = function () {
    return h(Neutrine.Paragraph, {}, "Content of the paragraph");
};

let testPre = function () {
    return h(Neutrine.Pre, {}, "<b>Hello world!</b>");
};

let testSmall = function () {
    let small = h(Neutrine.Small, {}, "small text");
    return h("div", {}, "Bla bla bla ", small, " bla bla bla");
};

let testTag = function () {
    let tag1 = h(Neutrine.Tag, {"color": "red"}, "Tag 1");
    let tag2 = h(Neutrine.Tag, {"color": "blue"}, "Tag 2");
    let tag3 = h(Neutrine.Tag, {"color": "orange", "rounded": true}, "Tag 3");
    return h("div", {}, tag1, tag2, tag3);
};

export default class TestTypography extends React.Component {
    render() {
        return h("div", {},
            testBlockquote(),
            testCode(),
            testHeading(),
            testParagraph(),
            testPre(),
            testSmall(),
            testTag()
        );
    }
}
