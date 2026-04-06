import React from 'react'
import UserHeader from '../Shared/UserHeader'
import UserFooter from '../Shared/UserFooter'


function Index() {
  return (
   <div>

    <UserHeader />

  {/* Start Header Section */}
  <div className="banner">
    <div className="overlay">
      <div className="container">
        <div className="intro-text">
          <h1>Welcome To The <span>Great Sulfur</span></h1>
          <p>Generate a flood of new business with the <br /> power of a digital media platform</p>
          <a href="#feature" className="page-scroll btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* End Header Section */}
  {/* Start About Us Section */}
  <section id="about-section" className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>About Us</h2>
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="about-img">
            <img src="UserAsset/images/corporate1.jpg" className="img-responsive" alt="About images" />
            <div className="head-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis metus vitae ligula elementum ut luctus lorem facilisis.</p>
              <span>CEO, Themebean</span>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <div className="about-list">
            <h4>Some important Feature</h4>
            <ul>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <h4>More Feature</h4>
            <ul>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Start Call to Action Section */}
  <section className="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-md-12 wow zoomIn" data-wow-duration="2s" data-wow-delay="300ms">
          <p>Awesome Aires Template is ready for <br /> Business, Agency, Landing or Creative Portfolio<br />Aires is Responsive and help you to grow your business</p>
        </div>
      </div>
    </div>
  </section>
  {/* End Call to Action Section */}
  {/* Start Team Member Section */}
  <section id="team-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>Our Team</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="300ms">
          <div className="team-member">
            <img src="UserAsset/images/team/team-1.jpg" className="img-responsive" alt />
            <div className="team-details">
              <h4>John Doe</h4>
              <p>Founder &amp; Director</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/* /.col-md-3 */}
        <div className="col-md-3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="600ms">
          <div className="team-member">
            <img src="UserAsset/images/team/team-2.jpg" className="img-responsive" alt />
            <div className="team-details">
              <h4>John Doe</h4>
              <p>Founder &amp; Director</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/* /.col-md-3 */}
        <div className="col-md-3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="900ms">
          <div className="team-member">
            <img src="UserAsset/images/team/team-3.jpg" className="img-responsive" alt />
            <div className="team-details">
              <h4>John Doe</h4>
              <p>Founder &amp; Director</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/* /.col-md-3 */}
        <div className="col-md-3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1200ms">
          <div className="team-member">
            <img src="UserAsset/images/team/team-4.jpg" className="img-responsive" alt />
            <div className="team-details">
              <h4>John Doe</h4>
              <p>Founder &amp; Director</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>{/* /.col-md-3 */}
      </div>
    </div>
  </section>
  {/* End Team Member Section */}
  {/* Start Portfolio Section */}
  <section id="portfolio" className="portfolio-section-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>Our Portfolio</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Start Portfolio items */}
          <ul id="portfolio-list">
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="300ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img1.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="600ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img2.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="900ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img3.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1200ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img4.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1500ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img5.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1800ms">
              <div className="portfolio-item">
                <img src="UserAsset/images/portfolio/img6.jpg" className="img-responsive" alt />
                <div className="portfolio-caption">
                  <h4>Portfolio Title</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1"><i className="fa fa-magic" /></a>
                  <a href="#" className="link-2"><i className="fa fa-link" /></a>
                </div>
              </div>
            </li>
          </ul>
          {/* End Portfolio items */}
        </div>
      </div>
    </div>
  </section>
  {/* End Portfolio Section */}
  {/* Start Service Section */}
  <section id="service-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>Our Services</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-skyatlas" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-magic" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-gift" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-diamond" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-wordpress" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-forumbee" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-bicycle" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="services-post">
            <a href="#"><i className="fa fa-foursquare" /></a>
            <h2>RESPONSIVE DESIGN</h2>
            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Start Service Section */}
  {/* Start Testimonial Section */}
  <section id="testimonial-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="testimonial-wrapper">
            <div className="testimonial-item">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
              <img src="UserAsset/images/team/team-1.jpg" alt="Testimonial images" />
              <h5>John Doe</h5>
              <div className="desgnation">CEO, ThemeBean</div>
            </div>
            <div className="testimonial-item">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <img src="UserAsset/images/team/team-2.jpg" alt="Testimonial images" />
              <h5>John Doe</h5>
              <div className="desgnation">CEO, ThemeBean</div>
            </div>
            <div className="testimonial-item">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <img src="UserAsset/images/team/team-3.jpg" alt="Testimonial images" />
              <h5>John Doe</h5>
              <div className="desgnation">CEO, ThemeBean</div>
            </div>
            <div className="testimonial-item">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <img src="UserAsset/images/team/team-4.jpg" alt="Testimonial images" />
              <h5>John Doe</h5>
              <div className="desgnation">CEO, ThemeBean</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Testimonial Section */}
  {/* Start Client Section */}
  <div id="client-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="client-box">
            <ul className="client-list">
              <li><a href="#"><img src="UserAsset/images/clients/client1.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="UserAsset/images/clients/client2.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="UserAsset/images/clients/client3.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="UserAsset/images/clients/client4.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="UserAsset/images/clients/client5.png" className="img-responsive" alt="Clients Logo" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Client Section */}

  <UserFooter />
</div>


  )
}

export default Index