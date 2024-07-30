export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('outer');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('first-cntnr');
        }
        if (d === 1) {
          div.classList.add('second-cntnr');
        }
        if (d === 2) {
          div.classList.add('third-cntnr');
        }
        if (d === 3) {
          div.classList.add('fourth-cntnr');
        }
      });
    }
  });
}
