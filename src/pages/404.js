import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SeoTags from "../components/SeoTags";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>
        <i class="fas fa-exclamation-triangle"></i> 404 Page Not Found
      </h1>
      <p>
        Sorry, the page you're looking for doesn't exist or has been moved. 😕
      </p>
      <p>Here are a few things you can try:</p>
      <ul>
        <li>Double-check the URL for typos or errors. 🔍</li>
        <li>
          Go back to the{" "}
          <a href="/">
            <i class="fas fa-home"></i> homepage
          </a>{" "}
          and navigate from there. 🏠
        </li>
        <li>Use the search bar to find what you're looking for. 🔎</li>
        <li>
          Contact us if you need further assistance.{" "}
          <i class="fas fa-phone-alt"></i>
        </li>
      </ul>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
