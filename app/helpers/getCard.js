export function getCard(el, tag)  {
    if (el.classList.contains(tag)) return el;
    return getCard(el.parentNode, tag);
}
