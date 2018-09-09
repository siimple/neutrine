//Set a new cookie
export function setCookie (name, value, expireDays, domain, path) {
    //Build the expire date
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    //Build the cokie content
    let cookieContent = [name + "=" + value, "expires=" + expireDate.toUTCString()];
    //Check the path
    if (typeof path === "string") {
        cookieContent.push("path=" + path);
    }
    //Check the domain
    if (typeof domain === "string") {
        cookieContent.push("domain=" + domain);
    }
    //Save the new cookie
    document.cookie = cookieContent.join("; ");
}

//Get a cookie
export function getCookie (name) {
    let findStr = name + "=";
    let cookiesList = document.cookie.split("; ").filter(function (value) {
        return value.indexOf(findStr) === 0;
    });
    //Check if this cookie exists
    if (cookiesList.length === 1) {
        return cookiesList[0].substring(findStr.length);
    }
    //Default, cookie not found --> return null
    return null;
}

//Delete a cookie
export function deleteCookie (name, domain, path) {
    return setCookie(name, "", -10, domain, path);
}

