import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active'
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
  }

  //Ativa o Dropdown Menu e adiciona a função que observa o clique fora

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }


  //Adiciona os eventos ao Dropdown Menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    })
  };

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this
  }
}
