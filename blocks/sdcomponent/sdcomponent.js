export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('row-container');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('first-div');
        }
        if (d === 1) {
          div.classList.add('second-div');
          const tdElement = div.querySelectorAll('td');
          console.log(tdElement);
          tdElement.forEach((td, index) => {
            td.classList.add(`card${index + 1}`);
          });
        }
      });
    }
  });
}