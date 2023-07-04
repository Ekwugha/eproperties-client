import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Contact from '../../components/contact/contact';
import './about.css'

const About = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row className='mt-5'>
          <Col md={7} lg={8}>
            <h3 className="about-us-header mt5">
              PropTech Spotlight: House Africa
            </h3>
            <img src="/images/about.png" alt="about" className="img-fluid" />
            <div className="my-5">
              <p className="about-us-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                animi ipsam obcaecati dolorum illo iure amet quos consequuntur
                architecto nobis, quia iste enim itaque quo maiores?
                Consectetur, non! Culpa ex ullam sequi veniam itaque deserunt
                quo, deleniti soluta quae necessitatibus, molestias ipsum.
                Adipisci alias provident vitae debitis est dolore mollitia?
              </p>
              <p className="about-us-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                animi ipsam obcaecati dolorum illo iure amet quos consequuntur
                architecto nobis, quia iste enim itaque quo maiores?
                Consectetur, non! Culpa ex ullam sequi veniam itaque deserunt
                quo, deleniti soluta quae necessitatibus, molestias ipsum.
                Adipisci alias provident vitae debitis est dolore mollitia?
              </p>
              <p className="about-us-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                nobis ad! Ipsam magni qui facilis explicabo accusantium
                voluptatum quam rem officia expedita non eos laborum perferendis
                impedit, veniam fugit dolores voluptate suscipit tempora cumque
                pariatur eaque. Magnam dolorem accusantium libero similique
                consequuntur consequatur fugiat at excepturi, voluptatum alias
                odit natus perspiciatis, aliquam esse exercitationem sint.
                Maxime, fuga delectus! Eos, soluta amet. Architecto laudantium
                temporibus quasi consectetur, voluptatibus, quo delectus culpa
                nesciunt et doloribus illum est.
              </p>
            </div>
          </Col>

          {/* CONTACT COLUMN */}
          <Col md={5} lg={4}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About