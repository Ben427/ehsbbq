import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import Slider from "../components/Slider"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
    <section className="i-need-a-hero">
      <img className="criss-cross" src="https://edmondsbbq.com/static/criss_cross_bbq_utensils-003d840ae4ca57ec8dcf0f60039c08bb.png"></img>
      <img className="hero-logo" src="https://edmondsbbq.com/static/home_town_smoke_logo-6f45d615629ceb5dc5c7d51652af3dbf.png"></img>
      <img className="criss-cross" src="https://edmondsbbq.com/static/criss_cross_bbq_utensils-003d840ae4ca57ec8dcf0f60039c08bb.png"></img>
    </section>
      {/*<FullWidthImage img={heroImage} title={title} subheading={subheading} />*/}
      <section className="section section--gradient" style={{paddingBottom: "0px"}}>
        <div className="container">
          <div className="section section-bg" style={{paddingTop: "0px"}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                
                  <div className="content">
                    <div className="tile">
                      <h1 className="title" className="has-text-weight-semibold is-size-2">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <hr></hr>
                    {/*
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>*/}
                    <div className="columns" id="visit">
                      <div className="column is-6">
                        <h3 className="has-text-weight-semibold is-size-2">
                        Our Menu
                        </h3>
                        <p>Choose from our selection of meats smoked on site, or make it a sandwich with sides!</p>
                        <a href="/img/edmondsbbq_menu.pdf" target="_blank"><button>View full menu</button></a>
                      </div>
                      <div className="column is-6">
                      <div className="slick-track slick-list"></div>
                        <Slider />
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="content">
                    <div className="columns" id="location">
                      <div className="column is-6">
    
                      <iframe style={{borderRadius: "25px", border: "2px solid #363636"}} title="location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.7178612295384!2d-122.37856900000001!3d47.8063047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901af73e7083a1%3A0x8ce38967907e21c5!2s550%205th%20Ave%20S%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1718834136386!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                      <div className="column is-6">
                        
                        <h3 className="has-text-weight-semibold is-size-2">
                          Visit Us
                        </h3>
                        <h4><strong>Hours:</strong></h4>
                        <p>Monday - Saturday: 11am - 7pm<br/>Sunday: Closed</p>
                        
                        <h4><strong>Address:</strong></h4>
                        <p>550 5th Ave S - Edmonds, WA 98020</p>
                        
                        <a href="https://order.toasttab.com/online/hometown-smoke-and-bbq" target="_blank"><button style={{marginTop: "20px",}}>Order now</button></a>
                        {/*<p><a href="#" target="_blank"><img  style={{maxWidth: "150px", paddingTop: "20px"}}  src="/img/order_now_button.png"></img></a></p>*/}
                      </div>
                      </div>
                    </div>
                    
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
