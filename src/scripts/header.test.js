import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

const headerDOM = `
  <header class="header">
    <img class="header__logo" src="/src/assets/images/logo.svg" alt="Logo">

    <h1>Controle financeiro</h1>

    <div class="header__drawer">
      <img class="header__close" src="/src/assets/images/close.svg" alt="Fechar menu">
      <nav data-test-id='header__nav' class="header__nav">
        <li>Dashboard</li>
        <li>Resumo</li>
        <li>Configurações</li>
      </nav>
    </div>

    <img data-testid='header__menu' class="header__menu" src="/src/assets/images/menu.svg" alt="Menu">
  </header>
`

document.body.innerHTML = headerDOM

describe('header', () => {
  it('Should render the component', () => {
    const menu = document.querySelector('.header__menu')
    const logo = document.querySelector('.header__logo')
    const drawer = document.querySelector('.header__drawer')

    expect(menu).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(drawer).toBeInTheDocument()
    expect(screen.getByText('Controle financeiro'))
  })

  it('Should add an active class when click into menu', () => {
    const menu = document.querySelector('.header__menu')
    const nav = document.querySelector('.header__nav')

    userEvent.click(menu)
    nav.classList.add('active')

    expect(nav).toHaveClass('active')
  })

  it('Should remove active class when click on close icon', () => {
    const close = document.querySelector('.header__close')
    const nav = document.querySelector('.header__nav')

    userEvent.click(close)
    nav.classList.remove('active')
    expect(nav).not.toHaveClass('active')
  })
})
