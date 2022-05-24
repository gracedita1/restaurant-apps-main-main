import RestaurantSource from '../data/source-restaurant';

const reviewHandler = (button, id, name, review) => {
  button.addEventListener('click', async () => {
    const newReview = {
      id,
      name: name.value,
      review: review.value,
    };
    if (navigator.onLine) {
      const response = await RestaurantSource.addReview(newReview);
      return response;
    }
    return newReview;
  });
};

export default reviewHandler;
