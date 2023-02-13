export function getDefaultFontSize() {
    const el = document.createElement('div');
    el.style.width = '1rem';
    el.style.display = 'none';
    document.body.appendChild(el);

    const widthMatch = window
        .getComputedStyle(el)
        .getPropertyValue('width')
        .match(/\d+/);
    
    el.remove();

    if (!widthMatch || widthMatch.length < 1) return null;

    const result = Number(widthMatch[0]);

    return !isNaN(result) ? result : null;
};