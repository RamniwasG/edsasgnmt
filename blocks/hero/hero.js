import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  const divChildrens = block.children;

    const titleText = divChildrens[0].textContent.trim();
    const detailsText = divChildrens[1].textContent.trim();
    const imgPath = divChildrens[2].querySelector('img').src;
    const bottomBarText = divChildrens[3].textContent.trim();

    const bannerContainerDiv = document.createElement('div');
    bannerContainerDiv.classList.add('container');
    bannerContainerDiv.innerHTML = `
        <div class="banner-content">
            <h1>${titleText}</h1>
            <p>${detailsText}</p>
        </div>
    `;

    block.innerHTML = '';
    block.append(bannerContainerDiv);
}
