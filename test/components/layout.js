import React from "react";
import {hyperscript as h} from "neutrine-utils";

import * as Neutrine from "../../index.js";

let testBox = function () {
    let title = h(Neutrine.BoxTitle, {}, "Box title");
    let subtitle = h(Neutrine.BoxSubtitle, {}, "Box subtitle");
    let detail = h(Neutrine.BoxDetail, {}, "Box detail text");
    return h(Neutrine.Box, {color: "green"}, title, subtitle, detail);
};

let testBreadcrumb = function () {
    let crumb1 = h(Neutrine.BreadcrumbItem, {}, "Item 1");
    let crumb2 = h(Neutrine.BreadcrumbItem, {}, "Item 2");
    let crumb3 = h(Neutrine.BreadcrumbItem, {}, "Item 3");
    return h(Neutrine.Breadcrumb, {}, crumb1, crumb2, crumb3);
};

let testContent = function () {
    return h(Neutrine.Content, {size: "small"}, "Hello world! This is the content.");
};

let testFooter = function () {
    return h(Neutrine.Footer, {size: "small", color: "navy"}, "Footer content");
};

let testJumbotron = function () {
    let title = h(Neutrine.JumbotronTitle, {}, "Jumbotron title");
    let subtitle = h(Neutrine.JumbotronSubtitle, {}, "Jumbotron subtitle");
    let detail = h(Neutrine.JumbotronDetail, {}, "Jumbotron detail text");
    return h(Neutrine.Jumbotron, {color: "red", size: "medium"}, title, subtitle, detail);
};

let testMenu = function () {
    let group = h(Neutrine.MenuGroup, {}, "Menu group");
    let item1 = h(Neutrine.MenuItem, {selected: false}, "Item 1");
    let item2 = h(Neutrine.MenuItem, {selected: true}, "Item 2");
    return h(Neutrine.Menu, {}, group, item1, item2);
};

let testNavbar = function () {
    let title = h(Neutrine.NavbarTitle, {}, "Title");
    let subtitle = h(Neutrine.NavbarSubtitle, {}, "Subtitle");
    let item1 = h(Neutrine.NavbarItem, {style: {float: "right"}}, "Item 1");
    let item2 = h(Neutrine.NavbarItem, {style: {float: "right"}}, "Item 2");
    return h(Neutrine.Navbar, {color: "teal", size: "large"}, title, subtitle, item1, item2);
};

let testTabs = function () {
    let item1 = h(Neutrine.TabsItem, {selected: false}, "Item 1");
    let item2 = h(Neutrine.TabsItem, {selected: true}, "Item 2");
    let item3 = h(Neutrine.TabsItem, {selected: false}, "Item 3");
    return h(Neutrine.Tabs, {boxed: true}, item1, item2, item3);
};

export default class TestLayout extends React.Component {
    render() {
        let children = [
            testBox(),
            testBreadcrumb(),
            testContent(),
            testFooter(),
            testJumbotron(),
            testMenu(),
            testNavbar(),
            testTabs()
        ];
        return h("div", {}, children);
    }
}

