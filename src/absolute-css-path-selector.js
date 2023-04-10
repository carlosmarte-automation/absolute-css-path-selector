// @ts-nocheck

const absoluteCssPathSelector = (element, options, paths) => {
  if (!element || !element.parentNode) return paths;
  if (!paths && ['HTML', 'BODY'].indexOf(element.tagName) !== -1) return paths;

  const _paths = paths || [];
  const tag = element.tagName.toLowerCase();
  const className = element.getAttribute("class");
  const id = element.getAttribute("id");

  const identifier = [tag];
  if (id) identifier.push(`#${id}`);
  if (element.hasAttribute("name"))
    identifier.push(`[name="${element.getAttribute("name")}"]`);

  if (element.hasAttribute("type"))
    identifier.push(`[type="${element.getAttribute("type")}"]`);
  if (element.hasAttribute("role"))
    identifier.push(`[role="${element.getAttribute("role")}"]`);

  if (element.parentNode && element.parentNode.childElementCount > 1) {
    const index = Array.prototype.slice
      .call(element.parentNode.children)
      .indexOf(element);
    identifier.push(`:nth-child(${index + 1})`);
  }

  if (className) identifier.push(`.${className.replace(/\s/g, ".")}`);

  _paths.unshift(identifier.join(""));

  if (element.tagName !== 'HTML' && element.parentNode){
    _paths.unshift('>');
    return absoluteCssPathSelector(element.parentNode, options, _paths);
  }

  return _paths;
};

export default absoluteCssPathSelector;
