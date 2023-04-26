import logo from '../assets/pexels-pixabay-269077.jpg';

function Contact() {
  return (
    <>
      <section class="contact">
        <div class="section-center clearfix">
          <article class="contact-info">
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-location-arrow"></i>
                </span>
                address
              </h4>
              <h4 class="contact-text">
                sai ram residency complex , Road no: 16<br></br> Manikonda,
                Tanuku-500008
              </h4>
            </div>

            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                email
              </h4>
              <h4 class="contact-text">sshemanth2508@gmail.com</h4>
            </div>

            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-phone"></i>
                </span>
                Phone
              </h4>
              <h4 class="contact-text">+91 9899456721</h4>
            </div>
          </article>

          <article class="contact-form">
            <h3>contact us</h3>
            <form action="https://formspree.io/f/xzbwvbjn" method="post">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="NAME"
                  class="form-control"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="email"
                  class="form-control"
                  name="email"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  class="form-control"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn btn">
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
      {/* about */}
      <section>
        <div class="section-center clearfix">
          <article class="about-img">
            <div class="about-picture-container">
              <img src={logo} alt="about" class="about-picture" />
            </div>
          </article>

          <article class="about-info">
            <div class="section-title">
              <h3>about us</h3>
            </div>

            <p class="about-text">
            Welcome to our store in Manikonda, Tanuku!
             We offer a wide range of high-quality blazers , Gold n Jwellary items that are
              perfect for any occasion. Whether you're dressing up for
               a wedding or looking for a stylish outfit for work, we 
               have something for everyone.
At our store, you'll find blazers in a variety of styles,
 colors, and sizes. From classic black and navy blazers to
  bold and colorful options, we have something to suit every
   taste and preference. Our blazers are made from premium materials
    that are both comfortable and durable, ensuring that you can wear 
    them for years to come.
            </p>
            <p class="about-text">
              Lorem ipsum dolor sit amet, odio, eveniet
              tenetur voluptatum eius alias sunt.
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </article>
        </div>
      </section>

      <footer class="footer">
        <div class="section-center">
          <div className="footer-text">
            <h2 className="company">Terms & Conditions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              tempore! Quos quisquam soluta quod non perspiciatis expedita quasi
              optio obcaecati magni incidunt exercitationem neque sit, vitae a
              sed rem necessitatibus dolor eius aut similique ex. Hic, nisi.
              Molestias recusandae vel ad, quia odio doloremque maxime nam
              assumenda? Veniam natus, saepe ut expedita neque, odio, eveniet
              tenetur voluptatum eius alias sunt.
            </p>
          </div>
          <h4 class="footer-text">
            &copy; <span>2023</span>&nbsp;
            <span class="company">E-commerce</span>&nbsp; all rights reserved
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Contact;
