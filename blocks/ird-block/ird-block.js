export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    // Adding Classes to All <div> tags under main tag
    // const runner = r + 1;
    // row.classList.add('ird-container' + runner);
    row.classList.add('ird-container'.concat(r+1));

    // Adding Classes into 1st <div>
    if (r === 0) {
      [...row.children].forEach((div) => {
        div.classList.add('ird-main-heading');
      });
    }
    // Adding Classes into 2nd <div>
    if (r === 1) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('card-info');
        } else {
          div.classList.add('card-data');

          const ctaText = div.querySelectorAll('p');
          ctaText.forEach(p => {
            p.classList.add('cta-text');
            const innerText = p.innerHTML;
            const regex = /\$([^$]+)\$/g;
            const editedText = innerText.replace(regex, '<br><span class="card-data-highlight">$1</span><br>');
            p.innerHTML = editedText;
          });

        }
      });
    }
    // Adding Classes into 3rd <div>
    if (r === 2) {
      [...row.children].forEach((div, d) => {
        div.classList.add('slide-section');
        // Adding Classes to <tr> tags under <div>
        const trElements = div.querySelectorAll('tr');
        trElements.forEach((tr, index) => {
          if (index === 0) {
            tr.classList.add('slide-top-heading');
            // Adding Classes to <td> tags under <tr>
            [...tr.children].forEach((td, ti) => {
              if (ti === 0) {
                td.classList.add('slide-top-buttons');
              }
              // Adding Classes to <a> tags under <td>
              [...td.children].forEach((a, ai) => {
                a.classList.add('slide-heading-button');
                a.removeAttribute('href');
                a.setAttribute('id', 'slide-heading-button' + (ai + 1))
              });

              // Adding Select Element and Converting <p> tag to Select Options
              if (ti === 1) {
                td.classList.add('slide-heading-dropdown');

                td.innerHTML += '<tr><select name="nationality" id="nationality-dropdown"></tr>';
                const pElements = td.querySelectorAll('p');
                const selectElement = td.querySelector('select');
                pElements.forEach(p => {
                  const option = document.createElement('option');
                  option.value = p.textContent;
                  option.textContent = p.textContent;
                  selectElement.appendChild(option);
                  p.remove();
                });
              }
            });
          } else {
            tr.classList.add('slide-data');
            tr.setAttribute('id','slide'+ index);

            if (index != 1){
              tr.classList.add('hide');
            }

          }


          if (index != 0) {

            [...tr.children].forEach((td, ti) => {

              td.classList.add('check-td');
              (td.querySelector('h3')).classList.add('slide-heading');
              // (td.querySelectorAll('p')).classList.add('slide-para');
              (td.querySelectorAll('p')).forEach((p, pi) => {
                if (pi === 0) {
                  p.classList.add('slide-para');
                } else {
                  (p.querySelector('a')).classList.add('slide-cta-button');
                  // (p.querySelector('a')).classList.remove('button');
                }
              });
            });
          }
        });
        // slideAction();
      });
    }

  });





}









function delayedFunction() {



function showDiv(divId) {
  // Get all content divs
  const divs = document.querySelectorAll('.slide-data');

  // Iterate over divs and set display style
  divs.forEach(div => {
      if (div.id === divId) {
          div.style.display = 'block'; // Show the selected div
      } else {
          div.style.display = 'none'; // Hide all other divs
      }
  });
}


  // Add event listeners to buttons
document.getElementById('slide-heading-button1').addEventListener('click', () => showDiv('slide1'));
document.getElementById('slide-heading-button2').addEventListener('click', () => showDiv('slide2'));
document.getElementById('slide-heading-button3').addEventListener('click', () => showDiv('slide3'));



}







