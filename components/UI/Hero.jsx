import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Olá" />
              <h2 className="mt-3 mb-3">Eu sou Daniel Lins</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                Sou apaixonado pelas melhores tecnologias de desenvolvimento
                web. Tendo experiência em projetos utilizando JavaScript,
                Typescript, ReactJs, Next.js.. dentre outras tecnologias. Já
                trabalhei em comercio e outros lugares fora do mercado de T.I
                onde adquiri softs Skills como comunicação, trabalho em equipe e
                flexibilidade. Sou dedicado e pontual, buscando sempre aprender
                e me aperfeiçoar de alguma forma.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://linktr.ee/lins_265">
                    Entre em contato
                  </Link>
                </button>

                <button className="secondary__btn">
                  <a href="Junior.pdf" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
