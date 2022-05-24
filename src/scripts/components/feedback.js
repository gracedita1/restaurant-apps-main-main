class FeedBack extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="wrapper">
        <form class="form">
          <div class="pageTitle title">FeedBack</div>
          <input type="text" class="name formEntry" placeholder="Name" />
          <textarea class="message formEntry" placeholder="Message"></textarea>
          <button class="submit">Submit</button>
        </form>
      </div>`;
  }
}

customElements.define('feed-back', FeedBack);
