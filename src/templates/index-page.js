import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Visit Us
                      </h3>
                      <p><strong>Address:</strong><br/>11735 Glacier Hwy, Juneau, AK 99801</p>
                      <p><strong>Phone:</strong><br/>(907) 789-7342</p>
                      <p><strong>Hours:</strong><br/>Monday - Friday, 10:00 AM - 3:00 AM</p>
                    </div>
                    <div className="column is-8">
                      <iframe title="location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.425971267845!2d-134.6470273477049!3d58.386217181247325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54011df160e66eb5%3A0x897de458f5971ab1!2sDe%20Hart&#39;s%20Auke%20Bay%20Store!5e0!3m2!1sen!2sus!4v1661959932165!5m2!1sen!2sus" width="100%" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Hungry?
                      </h3>
                      <p>Stop by our hot bar or order a pizza from our partner, Auke Bay Pizza Company!</p>
                      <button>Order pizza</button>
                    </div>
                    <div className="column is-8">
                     <img src="static/img/hot_case_menu.png"></img>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                 {/*} <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>*/}
                  {/*div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>*/}
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
