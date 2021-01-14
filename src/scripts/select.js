import { $ } from './selector';

const type = $('#type');

type.addEventListener('change', () => {
  const hasSelectedValue = type.options[type.selectedIndex].text === 'Compra' || type.options[type.selectedIndex].text === 'Venda';

  if (hasSelectedValue) {
    type.classList.add('selected')
  }
});

export const renderSelectOptions = () => {
  const options = `
    <option class="form__hidden select__option" value="" disabled selected hidden>Seleciona uma categoria</option>
    <option value="Compra" value="Compra" class="select__option">Compra</option>
    <option value="Venda" value="Venda" class="select__option">Venda</option>
  `;

  type.innerHTML = options;
  type.classList.add('default')
};
