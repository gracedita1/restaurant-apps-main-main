const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
    button.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this._toggleDrawer(event, drawer);
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('visible');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('visible');
  },
};

export default DrawerInitiator;
