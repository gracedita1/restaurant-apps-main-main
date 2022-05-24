import API_ENDPOINT from '../../globals/endpoint';

const createRestoDetailTemplate = (restaurant) => `
    <div class="detail-restaurant">
        <div tabindex="0" class="detail-restaurant-picture">
          <div tabindex="0" id="likeButtonContainer"></div>
            <img src="${
              API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId
            }" alt="${restaurant.name}">
        </div>
        <div class="detail-restaurant-info">
            <h1 tabindex="0" class="detail-restaurant-name">${
              restaurant.name
            }</h1>
            <div tabindex="0" class="detail-restaurant-rating">
                <span class="detail-restaurant-rating-text">Rating : </span>
                <span class="detail-restaurant-rating-value">${
                  restaurant.rating
                }</span>
            </div>
            <div tabindex="0" class="detail-restaurant-description">
                <span class="detail-restaurant-description-text">Description : </span>
                <span class="detail-restaurant-description-value">${
                  restaurant.description
                }</span>
            </div>
            <div tabindex="0" class="detail-restaurant-city">
                <span class="detail-restaurant-city-text">Address : </span>
                <span class="detail-restaurant-city-value">${`${restaurant.address} ${restaurant.city}`}</span>
            </div>
            <div tabindex="0" class="restaurant-menu">
                <span class="restaurant-menu-text">Menu Makanan & Minuman</span>
                <div  class="restaurant-menu-list">
                      <div tabindex="0" class="restaurant-menu-item">
                    ${restaurant.menus.foods
                      .map(
                        (menu) => `
                            <span class="restaurant-menu-item-name">${menu.name}</span>

                    `,
                      )
                      .join('')}
                      </div>
                      <div tabindex="0" class="restaurant-menu-item">
                        ${restaurant.menus.drinks
                          .map(
                            (menu) => `
                                <span class="restaurant-menu-item-name">${menu.name}</span>
    
                        `,
                          )
                          .join('')}
                          </div>
                </div>
            </div>
            <div tabindex="0" class="restaurant-review">
                <span class="restaurant-review-text">Review</span>
                <div class="restaurant-review-list">
                    ${restaurant.customerReviews
                      .map(
                        (review) => `
                            <div class="restaurant-review-item">
                                <div class="restaurant-review-item-name">
                                    <span>${review.name}</span>
                                </div>
                                <div class="restaurant-review-item-review">
                                    <span>${review.review}</span>
                                </div>
                            </div>`,
                      )
                      .join('')}

                </div>
            </div>
        </div>
    </div>
`;

export default createRestoDetailTemplate;
