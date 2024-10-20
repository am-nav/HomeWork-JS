function isDOMElement(tagName) {
    return tagName instanceof Element
}

function createElement(tagName, attributes, children) {
    if (!tagName) {
        return undefined;
    }

    const element = document.createElement(tagName);

    if (!isDOMElement(element)) {
        return undefined  
    }

    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }

    if (children && typeof children === 'string') {
        element.innerText = children;
    } else if (Array.isArray(children)) {
        children.forEach(child => element.append(child));
    }else{
        element.append(children)
    }

    return element;
}
  
function render (element, target) {
    if (!element || !target) {
        return undefined;
    }

    if (!isDOMElement(element)) {
        return undefined  
    }
     
    return target.append(element);
}
  
window.UI = {
    createElement: createElement,
    render: render
}