import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Front-end Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            {/* <SectionSubtitle subtitle="O que faço ?" />
            <h3 className="mb-0 mt-4">Resolvo problemas,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Com exeperiencia em diversos projetos usando diversas tecnlogias
              web, sou um profissional que sempre busca se aperfeiçoar
            </p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
