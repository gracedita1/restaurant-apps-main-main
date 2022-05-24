class Hero extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
      <picture class="hero-img">
        <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
        <img src="./images/hero-image_4-large.jpg" alt="hero image">
      </picture>
      <div class="hero__inner">
        <h1 class="hero__title">Welcome To RestaurantTop</h1>
        <p class="hero__tagline">
         Find your restaurant and enjoy with your Favorite meal
        </p>
      </div>
    </div>`;
  }
}

customElements.define('hero-component', Hero);
