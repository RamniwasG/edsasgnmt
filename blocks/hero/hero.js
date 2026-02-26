import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  // load hero as fragment
  const heroMeta = getMetadata('hero');
  const heroPath = heroMeta ? new URL(heroMeta, window.location).pathname : '/hero';
  const fragment = await loadFragment(heroPath);

  // decorate hero DOM
  block.textContent = '';
  const hero = document.createElement('div');
  while (fragment.firstElementChild) hero.append(fragment.firstElementChild);

  block.append(hero);
}
