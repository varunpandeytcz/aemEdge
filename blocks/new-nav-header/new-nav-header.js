export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('new-nav-container-'.concat(r + 1));
    row.setAttribute('id', 'new-nav-container-'.concat(r + 1));
    // For First Div
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('lang-dropdown');
          div.innerHTML += '<tr><select name="nationality" id="nationality-dropdown"></tr>';
          const selectElement = div.querySelector('select');
          const pElements = div.querySelectorAll('p');
          pElements.forEach((p) => {
          const option = document.createElement('option');
          option.value = p.textContent;
          option.textContent = p.textContent;
          selectElement.appendChild(option);
          p.remove();
          });
        }
        if (d === 1) {
          div.classList.add('head-buttons');
          const pElements = div.querySelectorAll('p');
          pElements.forEach((p, pi) => {
          p.classList.add('head-button-'.concat(pi + 1));
          p.setAttribute('id', 'head-button-'.concat(pi + 1));
          });
        }
      });
    }
    if (r === 1) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('header-logo');
        }
        if (d === 1) {
          div.classList.add('header-nav-bar');
          (div.querySelector('ul')).classList.add('header-nav-list');
          (div.querySelectorAll('li')).forEach((li) => {
            li.classList.add('header-nav-item');
          });
        }
        if (d === 2) {
          div.classList.add('header-action-buttons');
          (div.querySelectorAll('p')).forEach((p, pi) => {
            if (pi === 0) {
              p.classList.add('header-icon-button');
              p.classList.add('header-search-icon');
              p.classList.remove('button-container');
            }
            if (pi === 1) {
              p.classList.add('header-apply-button');
              p.classList.remove('button-container');
            }
          });
        }
      });
    }
    if (r === 2) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('dropdown-left');
        }
        if (d === 1) {
          div.classList.add('dropdown-right');
          (div.querySelectorAll('ul')).forEach((ul) => {
            ul.classList.add('inline-list');
          });
        }
      });
    }
  });
}
