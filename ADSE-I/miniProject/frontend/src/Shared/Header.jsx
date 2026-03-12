import React from 'react'

function Header() {
  return (
    <div>
  {/*[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]*/}
  {/*[if (gte IE 9)|!(IE)]><html lang="en" class="no-js"> <![endif]*/}
  {/* Basic */}
  <title>Sulfur | Home</title>
  {/* Define Charset */}
  <meta charSet="utf-8" />
  {/* Responsive Metatag */}
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  {/* Page Description and Author */}
  <meta name="description" content="Sulfur - Responsive HTML5 Template" />
  <meta name="author" content="Shahriyar Ahmed" />
  {/* Bootstrap CSS  */}
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" type="text/css" />
  {/* Font Awesome CSS */}
  <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type="text/css" />
  {/* Owl Carousel CSS */}
  <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" />
  <link rel="stylesheet" href="css/owl.theme.css" type="text/css" />
  <link rel="stylesheet" href="css/owl.transitions.css" type="text/css" />
  {/* Css3 Transitions Styles  */}
  <link rel="stylesheet" type="text/css" href="css/animate.css" />
  {/* Lightbox CSS */}
  <link rel="stylesheet" type="text/css" href="css/lightbox.css" />
  {/* Sulfur CSS Styles  */}
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  {/* Responsive CSS Style */}
  <link rel="stylesheet" type="text/css" href="css/responsive.css" />
  <header className="clearfix">
    {/* Start Top Bar */}
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="top-bar">
            <div className="row">
              <div className="col-md-6">
                {/* Start Contact Info */}
                <ul className="contact-details">
                  <li><a href="#"><i className="fa fa-phone" /> +12 345 678 000</a>
                  </li>
                  <li><a href="#"><i className="fa fa-envelope-o" /> support@sulfur.com</a>
                  </li> 
                </ul>
                {/* End Contact Info */}
              </div>{/* .col-md-6 */}
              <div className="col-md-6">
                {/* Start Social Links */}
                <ul className="social-list">
                  <li>
                    <a href="#"><i className="fa fa-rss" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-facebook" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-youtube" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-flickr" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-vimeo-square" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-skype" /></a>
                  </li>
                </ul>
                {/* End Social Links */}
              </div>{/* .col-md-6 */}
            </div>
          </div>
        </div>                        
      </div>{/* .row */}
    </div>{/* .container */}
    {/* End Top Bar */}
    {/* Start  Logo & Naviagtion  */}
    <div className="navbar navbar-default navbar-top">
      <div className="container">
        <div className="navbar-header">
          {/* Stat Toggle Nav Link For Mobiles */}
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <i className="fa fa-bars" />
          </button>
          {/* End Toggle Nav Link For Mobiles */}
          <a className="navbar-brand" href="index.html">Sulfur</a>
        </div>
        <div className="navbar-collapse collapse">
          {/* Start Navigation List */}
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="active" href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="service.html">Service</a>
            </li>
            <li>
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
              <ul className="dropdown">
                <li>
                  <a href="blog-item.html">Item Page</a>
                </li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a>
            </li>
          </ul>
          {/* End Navigation List */}
        </div>
      </div>
    </div>
    {/* End Header Logo & Naviagtion */}
  </header>
</div>

  )
}

export default Header