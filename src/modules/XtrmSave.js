export default (key, value) => {
    if (window.xtrmParameters) {
        window.xtrmParameters.key = value;
    } else {
        window.xtrmParameters = {};
        window.xtrmParameters[key] = value;
    }
}