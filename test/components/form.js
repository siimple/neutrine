import React from "react";
import {hyperscript as h} from "neutrine-utils";

import * as Neutrine from "../../index.js";

let testCheckbox = function () {
    return h(Neutrine.Checkbox, {defaultChecked: true});
};

let testField = function () {
    return h(Neutrine.Field, {label: "Field label", helper: "Field helper"}, null);
};

let testInput = function () {
    return h(Neutrine.Input, {fluid: true, defaultValue: "Hello world"});
};

let testLabel = function () {
    return h(Neutrine.Label, {}, "Hello world!");
};

let testRadio = function () {
    return h(Neutrine.Radio, {defaultChecked: false});
};

let testSelect = function () {
    let options = [
        h("option", {value: "option1"}, "Option 1"),
        h("option", {value: "option2"}, "Option 2"),
        h("option", {value: "option3"}, "Option 3")
    ];
    return h(Neutrine.Select, {defaultValue: "option2"}, options);
};

let testSwitch = function () {
    return h(Neutrine.Switch, {});
};

let testTextarea = function () {
    return h(Neutrine.Textarea, {fluid: true}, "Hello world");
};

export default class TestForm extends React.Component {
    render() {
        let children = [
            testCheckbox(),
            testField(),
            testInput(),
            testLabel(),
            testRadio(),
            testSelect(),
            testSwitch(),
            testTextarea()
        ];
        return h(Neutrine.Form, {title: "Form title", detail: "FormDetail"}, children);
    }
}

