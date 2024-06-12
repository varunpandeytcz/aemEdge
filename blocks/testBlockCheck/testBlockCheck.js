export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('rowContainer');
    [...row.children].forEach((div, d) => {
      if (d === 0){
        div.classList.add('column1');
        let ctaText = div.querySelector('p');
        ctaText.classList.add('ctaText');
        const innerText = ctaText.innerHTML;
        const regex = /\$([^$]+)\$/g;
        const editedText = innerText.replace(regex, '<span class="highlight">$1</span>');
        ctaText.innerHTML = editedText;
      }
      else if (d === 1){
        div.classList.add('column2');
        let ctaImg = div.querySelector('picture');
        ctaImg.classList.add('ctaImg');
      }

    });
  });
}
