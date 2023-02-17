//RETURNS THE NODE WHO HAS THE CLASS "tag" IN THE WHOLE HIERARCHY
export function getCard(el, tag)  {
    if (el.classList.contains(tag)) return el;
    return getCard(el.parentNode, tag);
}
