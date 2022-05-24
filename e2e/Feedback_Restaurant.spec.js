Feature('Liking Restaurant');

Scenario('Give Feedback a restaurant', ({ I }) => {
  I.amOnPage('#/');
  I.wait(5);
  I.scrollTo('#mainContent');
  I.seeElement('a.card-title');
  I.click(locate('a.card-title').first());
  I.wait(3);
  I.scrollTo('form.form');
  I.fillField('input.name', 'E2E Testing');
  I.fillField('textarea.message', 'E2E Testing review message');
  I.click('button.submit');
});
