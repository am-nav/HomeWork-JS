const createElement = (tagName, attributes, children) => {
    const element = document.createElement(tagName);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    if (typeof children === 'string') {
        element.textContent = children;
    } else if (Array.isArray(children)) {
        children.forEach(child => element.append(child));
    }

    return element;
}
  
const render = (element, target) => {
    target.append(element);
}
  
window.UI = {
    createElement: createElement,
    render: render
}



// (element, attributes, children)
// const createElement = (element, attributes, children) => {
//     console.log('Utils -> createElement');
// }

// (element, target)
// const render = () => {
//     console.log('Utils -> render');
//   }
  
// window.UI = {
//     createElement: createElement,
//     render: render
// }