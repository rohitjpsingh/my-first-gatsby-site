import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SeoTags from "../components/SeoTags";

const AboutPage = () => {
  return (
    <Layout>
      <h1>📧 Contact Me</h1>

      <p>
        <span class="emoji">👋</span> Have a question or want to discuss a
        project? Please feel free to get in touch via email at{" "}
        <a href="mailto:rohitjpsingh@gmail.com" rel="noopener noreferrer">rohitjpsingh@gmail.com</a> or
        connect with me on <a
          href="https://www.linkedin.com/in/rohitjpsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>.
      </p>
      <p>
        <span class="emoji">📩</span> I'll do my best to get back to you as soon
        as possible, typically within 1-2 business days.
      </p>
      <p>
        <span class="emoji">👉</span> Looking forward to hearing from you!
      </p>
    </Layout>
  );
};

export const Head = () => <SeoTags title="Contact Me" />;

export default AboutPage;
