import FavoriterestaurantIdb from '../../data/favorite-item';
import RestaurantSource from '../../data/source-restaurant';
import UrlParser from '../../routes/url-parser';
import reviewHandler from '../../utils/feedback-handler';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import createRestoDetailTemplate from '../templates/detailTemplate';

const detail = {
  async render() {
    return `
        <section class="section-restaurant" id="main-content">
        <h1 class="daftar-restaurant">Detail</h1>
        <div class="restaurant" id="restaurant"></div> 
        <feed-back></feed-back>     
      </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('.restaurant');
    const button = document.querySelector('button.submit');
    const fullName = document.querySelector('input.name');
    const review = document.querySelector('textarea.message');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriterestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });

    reviewHandler(button, url.id, fullName, review);
  },
};

export default detail;
