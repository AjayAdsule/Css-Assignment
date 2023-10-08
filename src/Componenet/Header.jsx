const Header = () => {
  return (
    <>
      <div className="container main-nav flex">
        <a href="#" className="company-logo">
          <img
            src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5dc9062fc19d430f6909ced7_UHLogo_standard.png"
            alt="company-logo"
          />
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li>
              <a href="#" className="hover-links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover-links">
                The Journey
              </a>
            </li>
            <li>
              <a href="#" className="hover-links">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover-links">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="hover-links">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover-links primary-button">
                Sign-up
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="nav-toggle hover-links">
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
    </>
  );
};

export default Header;
