import React from "react";
import ReactDOM from "react-dom";

//Import utils
//import * as cookies from "../../utils/cookies.js";

//Import cookies consent modules
import CookiesConsentComponent from "./cookies-consent.js";

//Export the cookies consent wrapper
export default function CookiesConsent (parent, options) {
    return ReactDOM.render(React.createElement(CookiesConsentComponent, options), parent);
}

