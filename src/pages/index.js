import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SeoTags from "../components/SeoTags";

const IndexPage = () => {
  return (
    <Layout>
      <h1><span class="emoji">๐</span> Welcome to my website</h1>

      <p>๐ Hi, I'm Rohit JP Singh! ๐ฎ๐ณ</p>

      <p>๐ป I'm a full stack developer with 6+ years of experience in building
        web applications and software solutions.
      </p>

      <p>๐ I live in India, where I enjoy exploring the diverse cultures and
        cuisines of this amazing country. ๐ฎ๐ณ
      </p>

      <p>๐จโ๐ป As a developer, I'm passionate about creating innovative and
        user-friendly applications that make people's lives easier. ๐ก
      </p>

      <p>๐จโ๐ฉโ๐งโ๐ฆ In my free time, I love spending time with my family and friends, and exploring new technologies to stay up-to-date with the latest trends in the industry. ๐
      </p>
      <h3>
        Want to know more  <Link to="/about">about me</Link>?
      </h3>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SeoTags title="Home" />;
