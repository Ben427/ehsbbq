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
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
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
                        <p>Use your imagination or pick one of our Juneau-themed specialty pies.</p>
                        <a href="https://www.aukebaypizza.com/img/takeoutmenu.pdf" target="_blank"><button>View full menu</button></a>
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
                      <iframe style={{borderRadius: "25px", border: "2px solid #363636"}} title="location map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8365.578208265855!2d-134.644614!3d58.386747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64882f201c912a14!2sAuke%20Bay%20Pizza%20Company!5e0!3m2!1sen!2sus!4v1665676463573!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                      <div className="column is-6">
                        
                        <h3 className="has-text-weight-semibold is-size-2">
                          Visit Us
                        </h3>
                        <p><strong>Available from 10:00 AM to 8:00 PM</strong></p>
                        
                        <p><strong>Address:</strong><br/>11735 Glacier Hwy, Juneau, AK 99801</p>
                        <p><a href="https://order.toasttab.com/online/auke-bay-pizza-co-11735-glacier-highway" target="_blank"><strong>Order now</strong></a></p>
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
