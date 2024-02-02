import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";

import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Carousel from 'react-bootstrap/Carousel';
const com={
  responsive:{
    0:{
      items:3,
    },
    600:{
      items:3,
    },
    1000:{
      items:5,
    },

  }
}
function App() {

  return (

    <div className='page_layout'>

      <>
        <Navbar expand="lg" className=" bg_color">
          <Container>
            <img src={require('./image/logo.png')}></img>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false"   />
            <Navbar.Collapse id="basic-navbar-nav"  >
              <Nav className="ms-auto">
                <NavDropdown title="HOME" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">HOME DEFAULT</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">HOME MODERN</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">HOME CLASSIC</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">ABOUT US</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">ABOUT COMPANY</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">SERVICES 01</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">SERVICES 02</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="PAGES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">APPOINTMENT</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">GALLERY</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">OUR TEAM</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">OUR PRICING</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">404 ERROR</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BLOG" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">BLOG GRID</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">BLOG CLASSIC</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BLOG SINGLE</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">CONTACT</Nav.Link>
                {/* <a href='#'>MAKE APPOINTMENT</a> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>

      <div className='slider'>
        <OwlCarousel className='owl-theme' id="slider1" loop items={1} autoplay nav>
          <div class='item item1'>
            <div className='content_1'>
              <p className='its'>Its Not Just a Haircut, Its an Experience.</p>
              <p className='Being'>Being a barber is about</p>
              <p className='Being'>taking care of the people.</p>
              <p className='s_our'>Our barbershop is the territory created purely for males who appreciate</p>
              <p className='s_our space_s'>premium quality, time and flawless look.</p>
              <div>
                <p className='btn_s'>MAKE APPOINTMENT</p>
              </div>
            </div>
          </div>
          <div class='item item2'>
            <div className='content_1'>
              <p className='its'>Its Not Just a Haircut, Its an Experience.</p>
              <p className='Being'>Being a barber is about</p>
              <p className='Being'>taking care of the people.</p>
              <p className='s_our'>Our barbershop is the territory created purely for males who appreciate</p>
              <p className='s_our space_s'>premium quality, time and flawless look.</p>
              <div>
                <p className='btn_s'>MAKE APPOINTMENT</p>
              </div>
            </div>
          </div>
          <div class='item item3'>
            <div className='content_1'>
              <p className='its'>Its Not Just a Haircut, Its an Experience.</p>
              <p className='Being'>Being a barber is about</p>
              <p className='Being'>taking care of the people.</p>
              <p className='s_our'>Our barbershop is the territory created purely for males who appreciate</p>
              <p className='s_our space_s'>premium quality, time and flawless look.</p>
              <div>
                <p className='btn_s'>MAKE APPOINTMENT</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>


      <div className='two_part'>
        <Container d->
          <Row className='g-5'>
            <Col lg={6} md={12} sm={12}>
              <div className='text'>
                <p className='intro'>Introducing</p>
                <p className='the'>The Barber Shop Science 1991</p>
                <div>
                  <img src={require('./image/beard.png')}></img>
                </div>
                <p className='barber'>
                  Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
                </p>
                <div className='more_btn'>
                  <a href='#'>MORE ABOUT US</a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className='pic d-sm-none d-md-block'>
                <div className='one'>
                  <img src={require('./image/1.jpeg')}></img>
                </div>
                <div className='two'>
                  <img src={require('./image/2.jpeg')}></img>
                </div>
                <div className='three'>
                  <img src={require('./image/3.jpeg')}></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='Our_Services'>
        <Container>
          <p className='salon'>Trendy Salon & Spa</p>
          <p className='title_our'>Our Services</p>
          <div className='much'>
            <img src={require('./image/pattern.png')}></img>
          </div>
          <Row className='g-4'>
            <Col lg={3} md={6} xs={12}>
              <div className='Haircut'>
                <div>
                  <img src={require('./image/katar.png')}></img>
                </div>
                <p className='name_hair'>Haircut Styles</p>
                <p className='o_barber'>Barber is a person whose occupation is mainly to cut dress style.</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='Haircut'>
                <div>
                  <img src={require('./image/two.png')}></img>
                </div>
                <p className='name_hair'>Beard Triming</p>
                <p className='o_barber'>Barber is a person whose occupation is mainly to cut dress style.</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='Haircut'>
                <div>
                  <img src={require('./image/three.png')}></img>
                </div>
                <p className='name_hair'>Smooth Shave</p>
                <p className='o_barber'>Barber is a person whose occupation is mainly to cut dress style.</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='Haircut'>
                <div>
                  <img src={require('./image/four.png')}></img>
                </div>
                <p className='name_hair'>Face Masking</p>
                <p className='o_barber'>Barber is a person whose occupation is mainly to cut dress style.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='Make'>
        <Container fluid>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <div className='barber_img d-sm-none d-md-block'>
              </div>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className='appointment_t'>
                <p className='make_an'>Make an appointment</p>
                <p className='barber_1'>Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys hair.</p>
                <div className="flex_in">
                  <input type='text' placeholder='Name'></input>
                  <input type='text' placeholder='Your Email'></input>
                </div>
                <div className="flex_in">
                  <input type='text' placeholder='Your Phone No'></input>
                  <input type='text' placeholder='Your Free Time'></input>
                </div>
                <div className="flex_in">
                  <select>
                    <option>Services</option>
                    <option>Hair Styling</option>
                    <option>Shaving</option>
                    <option>Face Mask</option>
                    <option>Hair Wash</option>
                    <option>Beard Triming</option>
                  </select>
                  <select>
                    <option>Michel Brown</option>
                    <option>Choose Barbers</option>
                    <option>Jonathan Smith</option>
                    <option>Jack Tosan</option>
                    <option>Martin Lane</option>
                  </select>
                </div>
                <div className='btn_make'>
                  <a href='#'>MAKE APPOINTMENT</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className='Our_Barbers'>
        <Container>
          <p className='salon'>Trendy Salon & Spa</p>
          <p className='title_our'>Our Barbers</p>
          <div className='much'>
            <img src={require('./image/pattern.png')}></img>
          </div>
          <Row className='g-4'>
            <Col lg={3} md={6} xs={12}>
              <div className='per_1'>
                <div className='per1'>
                  <img src={require('./image/p1.jpeg')}></img>
                </div>
                <div className='per1_text'>
                  <p className='Kyle'>Kyle Frederick</p>
                  <p className='web'>WEB DESIGNER</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='per_1'>
                <div className='per1'>
                  <img src={require('./image/p2.jpeg')}></img>
                </div>
                <div className='per1_text'>
                  <p className='Kyle'>José Carpio</p>
                  <p className='web'>WORDPRESS DEVELOPER</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='per_1'>
                <div className='per1'>
                  <img src={require('./image/p3.jpeg')}></img>
                </div>
                <div className='per1_text'>
                  <p className='Kyle'>Michel Ibáñez</p>
                  <p className='web'>ONLINE MARKETER</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='per_1'>
                <div className='per1'>
                  <img src={require('./image/p4.jpeg')}></img>
                </div>
                <div className='per1_text'>
                  <p className='Kyle'>Adam Castellon</p>
                  <p className='web'>JAVA SPECIALIST</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='testi'>
        <Container fluid>
          <div className='slider_testi'>
            <OwlCarousel className='owl-theme' id="slider2" loop margin={10} items={1} autoplay>
              <div class='item'>
                <div className='one_test'>
                  <p className='there'>"There are design companies, and then there are user experience design interface design</p>
                  <p className='there'>professional. By far one of the worlds best known brands."</p>
                  <p className='les'>Leslie Williamson, Developer.</p>
                </div>
              </div>
              <div class='item'>
                <div className='one_test'>
                  <p className='there'>"There are design companies, and then there are user experience design interface design</p>
                  <p className='there'>professional. By far one of the worlds best known brands."</p>
                  <p className='les'>Leslie Williamson, Developer.</p>
                </div>
              </div>
              <div class='item'>
                <div className='one_test'>
                  <p className='there'>"There are design companies, and then there are user experience design interface design</p>
                  <p className='there'>professional. By far one of the worlds best known brands."</p>
                  <p className='les'>Leslie Williamson, Developer.</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>
      </div>

      <div className='Pricing'>
        <Container>
          <div className='title_save'>
            <p className='salon'>Save 20% On Beauty Spa</p>
            <p className='title_our'>Our Barber Pricing</p>
            <div className='much'>
              <img src={require('./image/pattern.png')}></img>
            </div>
          </div>
          <Row>
            <Col lg={4} md={6} xs={12}>
              <div className='hair'>
                <p className='hair_text'>Hair Styling</p>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Hair Cut</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$8</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Hair Styling</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$9</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Hair Triming</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$10</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='hair'>
                <p className='hair_text'>Shaving</p>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Clean Shaving</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$8</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Beard Triming</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$9</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Smooth Shave</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$10</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12} xs={12}>
              <div className='hair'>
                <p className='hair_text'>Face Masking</p>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>White Facial</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$8</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Face Cleaning</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$9</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
                <div className='inner_hair'>
                  <div className='price'>
                    <p className='cut_hair'>Bright Tuning</p>
                    <span className='line'></span>
                    <p className='cut_hair color_pri'>$10</p>
                  </div>
                  <p className='lorem_t'>
                    Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='look_good'>
        <Container fluid>
          <div className='inner_look'>
            <p className='you'>Making You Look Good<br></br>Is In Our Haritage.</p>
            <p className='person'>Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys hair.</p>
            <div className='btn_make'>
              <a href='#'>MAKE APPOINTMENT</a>
            </div>
          </div>
        </Container>
      </div>

      <div className='from_blog'>
        <Container>
          <div className='blog_title'>
            <p className='t_blog'>From Blog</p>
            <p className='good_a'>A Good Newspaper Is
              <br></br>A Nation Talking To Itself</p>
          </div>
          <Row className='g-4'>
            <Col lg={4} md={6}>
              <div className='one_blog'>
                <div className='blog_img'>
                  <img src={require('./image/blog_1.jpeg')} className='img'></img>
                  <p className='inter'>INTERIOR</p>
                </div>
                <div className='mini_text'>
                  <p className='mini'>Minimalist trending in modern architecture 2019</p>
                  <p className='build'>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                  <div className='read'>
                    <p className='read_line'></p>
                    <p className='more_read'>READ MORE</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='one_blog'>
                <div className='blog_img'>
                  <img src={require('./image/blog_2.jpeg')} className='img'></img>
                  <p className='inter'>ARCHITECTURE</p>
                </div>
                <div className='mini_text'>
                  <p className='mini'>Minimalist trending in modern architecture 2019</p>
                  <p className='build'>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                  <div className='read'>
                    <p className='read_line'></p>
                    <p className='more_read'>READ MORE</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='one_blog'>
                <div className='blog_img'>
                  <img src={require('./image/blog_3.jpeg')} className='img'></img>
                  <p className='inter'>DESIGN</p>
                </div>
                <div className='mini_text'>
                  <p className='mini'>Minimalist trending in modern architecture 2019</p>
                  <p className='build'>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                  <div className='read'>
                    <p className='read_line'></p>
                    <p className='more_read'>READ MORE</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='company'>
        <Container>
          <OwlCarousel className='owl-theme' loop margin={10} items={5} autoplay dots={false} {...com}>
            <div class='item c_item'>
              <img src={require('./image/c_1.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_2.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_3.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_4.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_5.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_1.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_2.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_3.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_4.png')}></img>
            </div>
            <div class='item c_item'>
              <img src={require('./image/c_5.png')}></img>
            </div>
          </OwlCarousel>
        </Container>
      </div>

      <div className='footer'>
        <Container>
          <Row className='g-4'>
            <Col lg={3} md={6} xs={12}>
              <div className='f_one_p'>
                <img src={require('./image/logo.png')}></img>
                <p className='our'>Our barbershop is the created for men who appreciate premium quality, time and flawless look.</p>
                <p className='icon_f'>
                  <i><FaFacebookF></FaFacebookF></i>
                  <i><FaTwitter></FaTwitter></i>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                  <i><ImInstagram></ImInstagram></i>
                  <i><FaLinkedinIn></FaLinkedinIn></i>
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='f_two_p'>
                <p className='Headquaters'>Headquaters</p>
                <p className='fifth'>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                <p className='fifth'>Hello@dynamiclayers.net<br></br>(+123) 456 789 101</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='f_three_p'>
                <p className='Headquaters'>Opening Hours</p>
                <p className='fifth'>Monday - Friday 11:30am - 2:008pm</p>
                <p className='fifth'>Saturday – Monday: 9am – 8pm</p>
                <p className='fifth'>Monday - Friday 5:30am - 11:008pm</p>
                <p className='fifth'>Saturday - Sunday 4:30am - 1:00pm</p>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <div className='f_four_p'>
                <p className='Headquaters'>Subscribe to our contents</p>
                <input type='text' placeholder='Email Address...'></input>
                <p className='sub'>SUBSCRIBE</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='copy_part'>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <p className='c_2023'>© 2023 Barber Shop Powered by DynamicLayers</p>
            </Col>
            <Col md={6} sm={12}>
              <p className='copy_flex'>
                <span className='order'>ORDERS</span>
                <span className='order'>TERMS</span>
                <span className='order'>REPORT PROBLEM</span>
              </p>
            </Col>
          </Row>
          <div className='inner_copy'>

          </div>
        </Container>
      </div>






    </div>

  );

}

export default App;
