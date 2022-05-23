const Burger = () => (
  <>
    <div className="burger-btn" role="button" tabIndex={0}>
      <span />
    </div>
    <div className="burgerMenu">
      <div className="burgerMenu__angle"></div>
      <div className="burgerMenu__content">
        <div className="burgerMenu__content__main"></div>
        <div className="burgerMenu__content__footer"></div>
      </div>
    </div>
  </>
);

export default Burger;
