import React from 'react'

function UserFooter() {
  return (
      <div>
  {/* Start Footer Section */}
  <section id="footer-section" className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="section-heading-2">
            <h3 className="section-title">
              <span>Office Address</span>
            </h3>
          </div>
          <div className="footer-address">
            <ul>
              <li className="footer-contact"><i className="fa fa-home" />123, Second Street name, Address</li>
              <li className="footer-contact"><i className="fa fa-envelope" /><a href="#">info@domain.com</a></li>
              <li className="footer-contact"><i className="fa fa-phone" />+1 (123) 456-7890</li>
              <li className="footer-contact"><i className="fa fa-globe" /><a href="#" target="_blank">www.domain.com</a></li>
            </ul>
          </div>
        </div>{/*/.col-md-3 */}
        <div className="col-md-3">
          <div className="section-heading-2">
            <h3 className="section-title">
              <span>Latest Tweet</span>
            </h3>
          </div>
          <div className="latest-tweet">
            <div className="media">
              <div className="media-left">
                <i className="fa fa-twitter fa-2x media-object" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">About 15 days ago</h4>
                <p>Finally #tutsplus start a tutorial on A Beginner’s Guide to Using #joomla . Check it out here http://t.co/i6S4zeW8Z0</p>
              </div>
            </div>
          </div>
        </div>{/*/.col-md-3 */}
        <div className="col-md-3">
          <div className="section-heading-2">
            <h3 className="section-title">
              <span>Stay With us</span>
            </h3>
          </div>
          <div className="subscription">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your E-mail" id="name" required data-validation-required-message="Please enter your name." />
              <input type="submit" className="btn btn-primary" defaultValue="Subscribe" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="section-heading-2">
            <h3 className="section-title">
              <span>FLICKR STREAM</span>
            </h3>
          </div>
          <div className="flickr-widget">
            <ul className="flickr-list">
              <li>
                <a href="UserAsset/images/portfolio/img1.jpg" data-lightbox="picture-1">
                  <img src="UserAsset/images/portfolio/img1.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img2.jpg" data-lightbox="picture-2">
                  <img src="UserAsset/images/portfolio/img2.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img3.jpg" data-lightbox="picture-3">
                  <img src="UserAsset/images/portfolio/img3.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img4.jpg" data-lightbox="picture-4">
                  <img src="UserAsset/images/portfolio/img4.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img5.jpg" data-lightbox="picture-5">
                  <img src="UserAsset/images/portfolio/img5.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img6.jpg" data-lightbox="picture-6">
                  <img src="UserAsset/images/portfolio/img6.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img1.jpg" data-lightbox="picture-7">
                  <img src="UserAsset/images/portfolio/img1.jpg" alt className="img-responsive" />
                </a>
              </li>
              <li>
                <a href="UserAsset/images/portfolio/img2.jpg" data-lightbox="picture-8">
                  <img src="UserAsset/images/portfolio/img2.jpg" alt className="img-responsive" />
                </a>
              </li>
            </ul>
          </div>
        </div>{/*/.col-md-3 */}
      </div>{/*/.row */}
    </div>{/* /.container */}
  </section>
  {/* End Footer Section */}
  {/* Start CCopyright Section */}
  <div id="copyright-section" className="copyright-section">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="copyright">
            Copyright © 2014. All Rights Reserved.Design and Developed by <a href="http://www.themefisher.com">Themefisher</a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="copyright-menu pull-right">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Sample Site</a></li>
              <li><a href="#">getbootstrap.com</a></li>
            </ul>
          </div>
        </div>
      </div>{/*/.row */}
    </div>{/* /.container */}
  </div>
  {/* End CCopyright Section */}
  {/* Sulfur JS File */}
</div>

  )
}

export default UserFooter