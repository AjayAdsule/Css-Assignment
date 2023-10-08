const Contact = () => {
  return (
    <>
      <section className=" container">
        <div className="card-container contact flex ">
          <div className="card">
            <h2>Reach Us At</h2>
            <div className="content">
              <h4>Support@KickUp.com</h4>
              <p>for any technical support </p>
            </div>
            <div className="content">
              <h4>info@KickUp.com</h4>
              <p>for more information</p>
            </div>
            <div className="content">
              <h4>feedback@KickUp.com</h4>
              <p>to send your feedback</p>
            </div>
            <div className="content">
              <h4>jobs@KickUp.com</h4>
              <p>to work with us</p>
            </div>
          </div>
        </div>
        <div className="touch flex">
          <div className="social">
            <p>Stay in Touch</p>
            <div className="icons flex">
              <i class="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
