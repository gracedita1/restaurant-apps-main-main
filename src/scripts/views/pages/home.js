import RestaurantSource from '../../data/source-restaurant';
import createCard from '../templates/card';

const Home = {
  async render() {
    return `
        <section class="section-restaurant" id="main-content">
        <h1 class="daftar-restaurant">Daftar Restaurant</h1>
        <div class="explore-restaurant"></div>
      </section>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.explore-restaurant');
    const restaurantList = await RestaurantSource.listRestaurant();

    restaurantList.forEach((restaurant) => {
      restaurantContainer.insertAdjacentHTML(
        'beforeend',
        createCard(restaurant),
      );
    });
  },
};

export default Home;
