class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();

    const navigation = document.querySelector('.nav');
    const navigationLinks = document.querySelectorAll('.nav-list-item');

    navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('visible');
      });
    });
  }

  render() {
    this.innerHTML = `
      <header class="header">
      <div class="header__inner">
        <h1 class="header__title"><ion-icon name="restaurant"></ion-icon>Restaurant Top</h1>
      </div>    
      <a href="#mainContent" tabindex="0" class="skip-to-content">Skip to content</a>
      <ion-icon class="hamburger" tabindex="0" name="menu-outline"></ion-icon>
      <nav class="nav">
        <ul class="navbar">
          <li class="nav-list"><a class="nav-list-item" href="/">Home</a></li>
          <li class="nav-list">
            <a class="nav-list-item" href="#/favorite">Favorite</a>
          </li>
          <li class="nav-list">
            <a class="nav-list-item" href="https://www.linkedin.com/in/grace-dita-a95961231/">About Us</a>
          </li>
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define('app-bar', AppBar);
