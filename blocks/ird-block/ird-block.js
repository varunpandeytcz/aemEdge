export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    // Adding Classes to All <div> tags under main tag
    const runnner = r + 1;
    row.classList.add('ird-container' + runner);

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
                a.classList.add('slide-heading-button' + (ai + 1));
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
            tr.classList.add('slide-data' + index);
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

      });

      // slideAction();
    }

  });
}




// function slideAction() {
//   console.log("active");

//   const slide1 = document.querySelector('slide-data1');
//   const slide2 = document.querySelector('slide-data2');
//   const slide3 = document.querySelector('slide-data3');

//   console.log(slide1);

//   const slideButton1 = document.querySelector('.slide-heading-button1');
//   const slideButton2 = document.querySelector('.slide-heading-button2');
//   const slideButton3 = document.querySelector('.slide-heading-button3');

//   console.log(slideButton3);

//   // slide1.classList.remove('hide');

//   slideButton1.addEventListener('click', () => {
//   slide1.classList.remove('hide');
//   slide2.classList.add('hide');
//   slide3.classList.add('hide');
//   });

//   slideButton2.addEventListener('click', () => {
//   slide1.classList.add('hide');
//   slide2.classList.remove('hide');
//   slide3.classList.add('hide');
//   });

//   slideButton3.addEventListener('click', () => {
//   slide1.classList.add('hide');
//   slide2.classList.add('hide');
//   slide3.classList.remove('hide');
//   });
// }


// window.addEventListener('DOMContentLoaded', function() {

// const divElement = document.querySelector('.slide-data1');
// divElement.setAttribute('id', 'newID');


// });