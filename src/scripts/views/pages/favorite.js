import FavoriterestaurantIdb from '../../data/favorite-item';
import createCard from '../templates/card';

const Home = {
  async render() {
    return `
        <section class="section-restaurant" id="main-content">
        <h1 class="daftar-restaurant">Favorite Restaurant</h1>
        <div class="favorite-restaurant"></div>
      </section>`;
  },

  async afterRender() {
    const restaurantData = await FavoriterestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.favorite-restaurant');

    if (restaurantData.length > 0) {
      restaurantData.forEach((restaurant) => {
        restaurantContainer.insertAdjacentHTML(
          'beforeend',
          createCard(restaurant),
        );
      });
    }
  },
};

export default Home;
