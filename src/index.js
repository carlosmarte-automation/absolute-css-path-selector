
import getSelector from "axe-selector";
import absoluteCssPathSelector from "./absolute-css-path-selector.js";

export { absoluteCssPathSelector, getSelector }

const absoluteCssPathSelectors = (element, options) => {
    return {
        locator: (getSelector.default || getSelector)(element, options),
        absolute: absoluteCssPathSelector(element, options).join(' ')
    }
};

export default absoluteCssPathSelectors;