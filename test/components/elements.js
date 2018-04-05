import React from "react";
import {hyperscript as h} from "neutrine-utils";

import * as Neutrine from "../../index.js";

let testAlert = function () {
    let closeListener = function () {
        return alert("Close clicked");
    };
    let alert1 = h(Neutrine.Alert, {color: "red", showClose: true, onCloseClick: closeListener}, "Hello world");
    let alert2 = h(Neutrine.Alert, {color: "blue"}, h(Neutrine.AlertTitle, {}, "Alert title"), "Alert body content");
    return h("div", {}, alert1, alert2);
};

let testBtn = function () {
    let clickListener = function () {
        return alert("Button clicked");
    };
    let btn1 = h(Neutrine.Btn, {color: "green", onClick: clickListener}, "Button");
    let btn2 = h(Neutrine.Btn, {color: "teal", disabled: true}, "Button disabled");
    let btn3 = h(Neutrine.Btn, {color: "brown", fluid: true}, "Fluid button");
    return h("div", {}, btn1, btn2, btn3);
};

let testCard = function () {
    let cardTitle = h(Neutrine.CardTitle, {}, "Card title");
    let cardBody = h(Neutrine.CardBody, {}, cardTitle, "Card content");
    let cardHeader = h(Neutrine.CardHeader, {}, "Card header");
    let cardFooter = h(Neutrine.CardFooter, {}, "Card footer");
    let card = h(Neutrine.Card, {}, cardHeader, cardBody, cardFooter);
    return h("div", {}, card);
};

let testList = function () {
    let item1 = h(Neutrine.ListItem, {}, "List item");
    let item2 = h(Neutrine.ListItem, {}, h(Neutrine.ListTitle, {}, "List title"), "List item");
    let item3 = h(Neutrine.ListItem, {}, "List item");
    let list = h(Neutrine.List, {hover: true}, item1, item2, item3);
    return h("div", {}, list);
};

let testProgress = function () {
    let progress1 = h(Neutrine.Progress, {color: "blue", completed: 45}, "In progress");
    let progress2 = h(Neutrine.Progress, {color: "orange", completed: 69, striped: true}, "In progress");
    let progress3 = h(Neutrine.Progress, {color: "teal", completed: 90, striped: true, velocity: "fast"}, "In progress");
    return h("div", {}, progress1, progress2, progress3);
};

let testSpinner = function () {
    let spinner1 = h(Neutrine.Spinner, {color: "pink"});
    let spinner2 = h(Neutrine.Spinner, {color: "yellow", size: "large"});
    return h("div", {}, spinner1, spinner2);
};

let testTable = function () {
    let chead1 = h(Neutrine.TableCell, {}, "Head 1");
    let chead2 = h(Neutrine.TableCell, {}, "Head 2");
    let chead3 = h(Neutrine.TableCell, {}, "Head 3");
    let rhead = h(Neutrine.TableRow, {}, chead1, chead2, chead3);
    let thead = h(Neutrine.TableHeader, {}, rhead);
    let cbody1 = h(Neutrine.TableCell, {}, "Body 1");
    let cbody2 = h(Neutrine.TableCell, {}, "Body 2");
    let cbody3 = h(Neutrine.TableCell, {}, "Body 3");
    let rbody = h(Neutrine.TableRow, {}, cbody1, cbody2, cbody3);
    let tbody = h(Neutrine.TableBody, {}, rbody);
    let table = h(Neutrine.Table, {border: true, striped: true, hover: true}, thead, tbody);
    return h("div", {}, table);
};

let testTip = function () {
    let tip1 = h(Neutrine.Tip, {color: "green"}, "Hello world! This is the Tip message");
    let tip2 = h(Neutrine.Tip, {color: "blue", icon: "exclamation"}, "Hello world! This is a tip with an exclamation icon :)");
    return h("div", {}, tip1, tip2);
};

export default class TestElements extends React.Component {
    render() {
        let children = [
            testAlert(),
            testBtn(),
            testCard(),
            testList(),
            testProgress(),
            testSpinner(),
            testTable(),
            testTip()
        ];
        return h("div", {}, children);
    }
}
