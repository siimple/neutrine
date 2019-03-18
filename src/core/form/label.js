//Import components helpers
import * as helpers from "../../helpers.js";

//Import label styles
import "siimple/scss/form/_label.scss";

//Label component
export function Label (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-label"
    });
}

