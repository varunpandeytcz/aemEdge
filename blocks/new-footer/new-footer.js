export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('footer-outrmost');
      [...row.children].forEach((div, d) => {
        div.classList.add('footer-child');
        if (d === 0) {
          div.classList.add('footer-child-one');
          div.querySelectorAll('td').forEach((td, tdi) => {
            td.classList.add(`footer-child-td${tdi + 1}`);
          });
        }
        if (d === 1) {
          div.classList.add('footer-main-cntnr');
          div.querySelectorAll('li').forEach((li, tdi) => {
            li.classList.add('footer-child-accordin');
            li.classList.add(`footer-child-li${tdi + 1}`);
          });
          div.querySelectorAll('td').forEach((td, index) => {
            td.classList.add(`footer-card${index + 1}`);
          });
        }
      });
    }
    if (r === 1) {
      row.classList.add('footer-second-outrmost');
    }
  });

  // Add accordion functionality
  const accordionHeaders = block.querySelectorAll('.footer-main-cntnr h3');
  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      // Close all open sections
      accordionHeaders.forEach((h) => {
        const nextElement = h.nextElementSibling;
        if (nextElement && nextElement.style.display === 'block') {
          nextElement.style.display = 'none';
          h.classList.remove('active');
        }
      });

      // Open the clicked section
      const nextElement = header.nextElementSibling;
      if (nextElement && nextElement.style.display !== 'block') {
        nextElement.style.display = 'block';
        header.classList.add('active');
      }
    });
  });
}
