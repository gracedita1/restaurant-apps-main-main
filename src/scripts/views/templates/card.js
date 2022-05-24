import API_ENDPOINT from '../../globals/endpoint';

const createCard = (restaurant) => `
  
        <div class="card" tabindex="0">
          <div class="img-wrapper">
          <picture class="card-img">
          <source class="lazyload" data-srcset="${
            API_ENDPOINT.RESTAURANT_IMAGE
          }${restaurant.pictureId}" alt="${restaurant.name} photo">
          <img src="./images/loading-small.jpg" alt="${restaurant.name}">
          </picture>
          </div>
          <div class="card-content">
            <a href="${`/#/detail/${restaurant.id}`}" class="card-title">${
  restaurant.name
}</a>
            <p class="card-desc">
              ${restaurant.description}
            </p>
            <div class="card-opt">
              <div class="card-rating"><ion-icon name="star"></ion-icon>${
                restaurant.rating
              }</div>
              <div class="card-city"><ion-icon name="map-outline"></ion-icon>${
                restaurant.city
              }</div>
            </div>
          </div>
        </div>
      
`;

export default createCard;
