import { $ } from './selector';

const type = $('#type');

type.addEventListener('change', () => {
  const hasSelectedValue = type.options[type.selectedIndex].text === 'Compra' || type.options[type.selectedIndex].text === 'Venda';

  if (hasSelectedValue) {
    type.style.color = '#000';
  }
});

export const renderSelectOptions = () => {
  const options = `
    <option class="form__hidden" value="" disabled selected hidden>Seleciona uma categoria</option>
    <option value="Compra" value="Compra">Compra</option>
    <option value="Venda" value="Venda">Venda</option>
  `;

  type.innerHTML = options;
  type.style.color = '#979797';
};
