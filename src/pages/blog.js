import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import { posts, post } from "./blog.module.css";
import SeoTags from "../components/SeoTags";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Our Blog 📝</h1>
      <p>
        Welcome to our blog! Here you'll find the latest news, insights, and
        tips on all things related to web development, design, and technology.
        From tutorials and how-to guides to industry news and best practices,
        we've got you covered.
      </p>

      <h2>Recent Posts 📰</h2>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <SeoTags title="My Blog Posts" />;
