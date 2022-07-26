import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contate-me" />
            <h3 className="mt-4 mb-4">Entre em contato comigo </h3>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p> */}

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Duque de Caxias,RJ - Brasil</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>Dlins300@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+55 (21) 99896-6350</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              {/* <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link> */}
              <a
                href="https://github.com/Daniel-lins"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                href="https://www.facebook.com/daniel.lins.543"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-lins-/">
                <i className="ri-linkedin-line" target="_blank"></i>
              </a>
              <a
                href="https://www.instagram.com/lins_265/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
