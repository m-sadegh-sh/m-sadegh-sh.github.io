import React from 'react';

import Layout from '../components/Layout';

import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          I've been collaborating with
          <br />
          several companies since 2011
          <br />
          also I'm based in Mashhad, Iran
        </h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-signal">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>Jack of all trades</h3>
            <p>
              I'm an experienced Full-stack developer with more
              than 8 years of experience in developing and
              deploying corporate websites and web services
              for government bodies and commercial organizations
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-code">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>Top Skills</h3>
            <p>
              I've an strong proficiency in the back-end (ASP.NET Core / C#)
              and the front-end (HTML5 / CSS3 / React.js / Redux / Bootstrap) development
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-mobile">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>Other Abilities</h3>
            <p>
              I'm also a rookie and enthusiastic in the field of
              Mobile application development using Java and Flutter
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Are you a talent hunter?</h3>
        <p>
          I highly recommend you to get in touch with me if
          you're looking for someone with mentioned skills &amp; abilities
        </p>
        <ul className="actions special">
          <li>
            <a href="mailto:m.sadegh.sh@gmail.com?subject=Hi there Mohammad" className="button">
              Say Hi to Mohammad
            </a>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
