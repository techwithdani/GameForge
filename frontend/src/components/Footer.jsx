import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <div className="footer-options">
          <div className="footer-logo"></div>
          <div className="footer-products">
            <p>Products</p>
            <li>
              <ul>Games</ul>
              <ul>Consoles</ul>
              <ul>Controllers</ul>
              <ul>Accessories</ul>
            </li>
          </div>
          <div className="footer-store">
            <p>Store</p>
            <li>
              <ul>500 Terry Francine Street San Francisco, CA 94158</ul>
              <ul>Mon - Fri: 9am - 9pm</ul>
              <ul>info@mysite.com</ul>
              <ul>123-456-7890</ul>
            </li>
          </div>
          <div className="footer-policy">
            <p>Policy</p>
            <li>
              <ul>Terms & Conditions</ul>
              <ul>Shipping Policy</ul>
              <ul>Refund Policy</ul>
              <ul>Privacy Policy</ul>
              <ul>Cookie Policy</ul>
              <ul>FAQ</ul>
            </li>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-others">
          <div className="payment-methods"></div>
          <div className="join-community"></div>
        </div>
        <div className="footer-copyright">
          <p>© 2035 by GAMEFORGE. Powered and secured by GAMEFORGE</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
