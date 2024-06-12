export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('row-Container');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('column1');
        const cta-Text = div.querySelector('p');
        cta-Text.classList.add('cta-Text');
        const innerText = ctaText.innerHTML;
        const regex = /\$([^$]+)\$/g;
        const editedText = innerText.replace(regex, '<span class="highlight">$1</span>');
        ctaText.innerHTML = editedText;
      } else if (d === 1) {
        div.classList.add('column2');
        const cta-Img = div.querySelector('picture');
        ctaImg.classList.add('cta-Img');
      }
    });
  });
}
