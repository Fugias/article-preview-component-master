const share = document.querySelectorAll(`.text__lower__share`);
const info = document.querySelector(`text__lower__info`);

for(let i = 0; i < 2; i++)
{
    share[i].addEventListener(`click`, () => {
        share[1].parentElement.parentElement.classList.toggle(`hide`);
        share[0].classList.toggle(`hide`);
      })
}
