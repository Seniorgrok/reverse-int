module.exports = function reverse (n) {
    if (!n) {
        return null;
    }
    let nstring = n.toString();
    if (n < 0) {
        nstring = nstring.substring(1);
    }
    return nstring.split("").reverse().join("");
}
