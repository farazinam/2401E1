import React from 'react'
import UserHeader from '../Shared/UserHeader'


function About() {
  return (
     <div>
        <UserHeader/>
  {/* Start Header Section */}
  <div className="page-header">
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Header Section */}
  {/* Start About Us Section */}
  <section id="about-section" className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="about-img">
            <img src="images/corporate1.jpg" className="img-responsive" alt="About images" />
            <div className="head-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis metus vitae ligula
                elementum ut luctus lorem facilisis.</p>
              <span>CEO, Themebean</span>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <div className="about-list">
            <h4>Some important Feature</h4>
            <ul>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing
                adipiscing.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusan.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</li>
            </ul>
            <h4>More Feature</h4>
            <ul>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing
                adipiscing.</li>
              <li><i className="fa fa-check-square" />Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusan.</li>
              <li><i className="fa fa-check-square" />Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Start About-section 2 */}
  <section id="about-section-2">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis metus vitae ligula
              elementum ut luctus lorem facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis metus vitae ligula
              elementum ut luctus.</p>
          </div>
          <div className="skill-shortcode">
            {/* Progress Bar */}
            <div className="skill">
              <p>Web Design</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percentage={60}>
                  <span className="progress-bar-span">60%</span>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="skill">
              <p>HTML &amp; CSS</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percentage={95}>
                  <span className="progress-bar-span">95%</span>
                  <span className="sr-only">95% Complete</span>
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="skill">
              <p>Wordpress</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percentage={80}>
                  <span className="progress-bar-span">80%</span>
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="skill">
              <p>Joomla</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percentage={100}>
                  <span className="progress-bar-span">100%</span>
                  <span className="sr-only">100% Complete</span>
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="skill">
              <p>Extension</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percentage={70}>
                  <span className="progress-bar-span">70%</span>
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="300ms">
          {/* Start Accordion Section */}
          <div className="panel-group" id="accordion">
            {/* Start Accordion 1 */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse-1">
                    <i className="fa fa-angle-left control-icon" /> Who We are
                  </a>
                </h4>
              </div>
              <div id="collapse-1" className="panel-collapse collapse in">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  iaculis metus vitae ligula elementum ut luctus lorem facilisis. Sed non leo nisl, ac
                  euismod nisi. Aenean augue dolor, facilisis id fringilla ut, tempus vitae nibh.
                </div>
              </div>
            </div>
            {/* End Accordion 1 */}
            {/* Start Accordion 2 */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse-2" className="collapsed">
                    <i className="fa fa-angle-left control-icon" /> What we do
                  </a>
                </h4>
              </div>
              <div id="collapse-2" className="panel-collapse collapse">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  iaculis metus vitae ligula elementum ut luctus lorem facilisis. Sed non leo nisl, ac
                  euismod nisi. Aenean augue dolor, facilisis id fringilla ut, tempus vitae nibh.
                </div>
              </div>
            </div>
            {/* End Accordion 2 */}
            {/* Start Accordion 3 */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse-3" className="collapsed">
                    <i className="fa fa-angle-left control-icon" /> Our Goal
                  </a>
                </h4>
              </div>
              <div id="collapse-3" className="panel-collapse collapse">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  iaculis metus vitae ligula elementum ut luctus lorem facilisis. Sed non leo nisl, ac
                  euismod nisi. Aenean augue dolor, facilisis id fringilla ut, tempus vitae nibh.
                </div>
              </div>
            </div>
            {/* End Accordion 3 */}
            {/* Start Accordion 4 */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse-4" className="collapsed">
                    <i className="fa fa-angle-left control-icon" /> Why Choose Us ?
                  </a>
                </h4>
              </div>
              <div id="collapse-4" className="panel-collapse collapse">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  iaculis metus vitae ligula elementum ut luctus lorem facilisis. Sed non leo nisl, ac
                  euismod nisi. Aenean augue dolor, facilisis id fringilla ut, tempus vitae nibh.
                </div>
              </div>
            </div>
            {/* End Accordion 4 */}
            {/* Start Accordion 5 */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse-5" className="collapsed">
                    <i className="fa fa-angle-left control-icon" /> Our Great Support
                  </a>
                </h4>
              </div>
              <div id="collapse-5" className="panel-collapse collapse">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  iaculis metus vitae ligula elementum ut luctus lorem facilisis. Sed non leo nisl, ac
                  euismod nisi. Aenean augue dolor, facilisis id fringilla ut, tempus vitae nibh.
                </div>
              </div>
            </div>
            {/* End Accordion 5 */}
          </div>
          {/* End Accordion section */}
        </div>
        {/*/.col-md-6 */}
      </div>
    </div>
  </section>
  {/* Start About-section 2 */}
  {/* Start Call to Action Section */}
  <section className="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-md-12 wow zoomIn" data-wow-duration="2s" data-wow-delay="300ms">
          <p>Awesome Aires Template is ready for <br /> Business, Agency, Landing or Creative Portfolio<br />Aires
            is Responsive and help you to grow your business</p>
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
            <img src="images/team/team-1.jpg" className="img-responsive" alt />
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
            <img src="images/team/team-2.jpg" className="img-responsive" alt />
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
            <img src="images/team/team-3.jpg" className="img-responsive" alt />
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
            <img src="images/team/team-4.jpg" className="img-responsive" alt />
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
  {/* Start Client Section */}
  <div id="client-section" style={{borderTop: '1px solid #f1f1f1'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="client-box">
            <ul className="client-list">
              <li><a href="#"><img src="images/clients/client1.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="images/clients/client2.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="images/clients/client3.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="images/clients/client4.png" className="img-responsive" alt="Clients Logo" /></a></li>
              <li><a href="#"><img src="images/clients/client5.png" className="img-responsive" alt="Clients Logo" /></a></li>
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

export default About