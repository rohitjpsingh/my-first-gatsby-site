import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SeoTags from "../components/SeoTags";

const AboutPage = () => {
  return (
    <Layout>
      <h1><span class="emoji">๐โโ๏ธ</span> About Me</h1>
      <h4>Intro:</h4>
      <p>๐ Full-stack developer with 6+ years of experience </p>
      <p>
        ๐ผ Worked with multiple companies, delivering successful projects and
        solutions that meet business requirements and exceed user expectations
      </p>
      <p>
        ๐จโ๐ป Proficient in various technologies such as HTML, CSS, JavaScript,
        React, Node.js, and SQL
      </p>
      ๐ฎ๐ณ Based in India
      <p>
        ๐งณ Enjoys exploring the diverse cultures and cuisines of India, and
        traveling to new places
      </p>
      <p>๐จโ๐ฉโ๐งโ๐ฆ Values spending time with family and friends </p>
      <p>
        ๐ก Passionate about creating user-friendly applications that solve
        real-world problems and enhance people's lives
      </p>
      <p>
        ๐ Always eager to learn and stay up-to-date with the latest trends and
        technologies in the industry
      </p>
      <p>
        ๐ค Works collaboratively with other developers, designers, and project
        managers to deliver quality solutions on time and within budget
      </p>
      <p>
        Overall, Rohit is a skilled and passionate developer who is dedicated to
        creating high-quality solutions that make a real difference in people's
        lives. ๐ป๐
      </p>
      <h4>Expertised:</h4>
      <table>
        <tr>
          <th>Skills</th>
          <th>Technologies</th>
          <th>Tools</th>
        </tr>
        <tr>
          <td>๐ป PHP, Codeigniter, Laravel</td>
          <td>๐ฅ ReactJS, Node.js, GatsbyJS, ExpressJS</td>
          <td>
            ๐ ๏ธ AWS, Server Management, GitHub, Bitbucket, Gitlab, Heroku,
            DigitalOcean
          </td>
        </tr>
        <tr>
          <td>๐ HTML5, CSS3, JavaScript, jQuery, AJAX, Axios</td>
          <td>๐๏ธ MySQL, MongoDB, GraphQL, Rest API, JSON</td>
          <td>๐ง Jira, Trello, Asana</td>
        </tr>
        <tr>
          <td>๐จ Bootstrap, Redux, TypeScript</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <h3>
        Let's bring your website idea to life -
        <Link to="/contact">Contact me</Link> today to discuss your project!
      </h3>
    </Layout>
  );
};
export const Head = () => <SeoTags title="About Me" />;
export default AboutPage;
