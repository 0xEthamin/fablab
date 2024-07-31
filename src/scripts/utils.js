//fichier avec toutes les fonctions qui peuvent servir un peu partout

export default function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function showHover(element, hoverText) {
    // Create the hover text element
    const hoverElement = document.createElement('div');
    hoverElement.textContent = hoverText;
    hoverElement.classList.add('hover-text');
    hoverElement.style.display = 'none';
    document.body.appendChild(hoverElement);

    // Event listeners to show and hide the hover text
    element.addEventListener('mouseover', function (event) {
        const rect = element.getBoundingClientRect();
        hoverElement.style.left = `${rect.left}px`;
        hoverElement.style.top = `${rect.top + rect.height + 5}px`;
        hoverElement.style.display = 'block';
    });

    element.addEventListener('mouseout', function () {
        hoverElement.style.display = 'none';
    });
}

export function applyHoverIfNecessary(element, hoverText) {
    element.addEventListener('mouseover', function () {
        if (element.scrollWidth > element.clientWidth) {
            showHover(element, hoverText);
        } else {
            element.removeAttribute('title');
        }
    });
}