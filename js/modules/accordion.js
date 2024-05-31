export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo'
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //Adiciona os Eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  //Iniciar Função
  init() {
    if (this.accordionList.length) {
      //Ativar Primeiro Item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
  }
}
