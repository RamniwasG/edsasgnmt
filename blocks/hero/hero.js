import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  const divChildrens = block.children;

    const title = divChildrens[0].textContent.trim();
    const imgPath = divChildrens[0].querySelector('img').src;
    const subTitle = document.querySelector('.bannercontent').textContent.trim();

    const bannerContainerDiv = document.createElement('div');
    bannerContainerDiv.classList.add('container');
    bannerContainerDiv.innerHTML = `
        <div class="bannercontent">
            <h1>${title}</h1>
            <p>${subTitle}</p>
        </div>
    `;

    block.innerHTML = '';
    block.append(bannerContainerDiv);
    
    // change css custom property
    document.documentElement.style.setProperty("--bg1", `url(${imgPath})`);
}
