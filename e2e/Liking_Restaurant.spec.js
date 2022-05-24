Feature('Liking Restaurant');

Scenario('Liking a restaurant', ({ I }) => {
  I.amOnPage('#/');
  I.wait(5);
  I.scrollTo('#mainContent');
  I.seeElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.wait(3);
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.wait(3);
  I.seeElement('.card');
});
