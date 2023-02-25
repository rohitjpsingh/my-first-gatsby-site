import * as React from "react";
import Layout from "../components/layout";
import SeoTags from "../components/SeoTags";

const ServicePage = () => {
  return (
    <Layout>
      <h1>Our Services 🛠️</h1>
      <p>
        As a full-stack developer freelancer, I offer a wide range of services
        to help you achieve your goals online. Whether you're looking to build a
        brand new website, redesign an existing one, or add new features and
        functionality, I've got you covered.
      </p>

      <h2>Web Development 🔧</h2>
      <p>
        I specialize in creating custom web applications tailored to your
        specific needs. I use the latest technologies and frameworks such as
        React, Node.js, and Laravel to build fast, scalable, and secure web
        applications.
      </p>

      <h2>Web Design 🎨</h2>
      <p>
        I'm an expert in creating beautiful and intuitive user interfaces that
        enhance the user experience and make your website stand out from the
        competition. I work closely with you to understand your brand and design
        a website that reflects your unique style and vision.
      </p>

      <h2>E-commerce 🛍️</h2>
      <p>
        If you're looking to sell products or services online, I can help you
        create an e-commerce website that's easy to manage and user-friendly. I
        can integrate your website with popular e-commerce platforms such as
        Shopify, WooCommerce, or Magento to provide a seamless shopping
        experience for your customers.
      </p>

      <h2>Search Engine Optimization 🚀</h2>
      <p>
        I can help you improve your website's visibility in search engine
        results pages (SERPs) and drive more traffic to your website. I use a
        combination of on-page optimization techniques, keyword research, and
        link building strategies to help you rank higher in search results and
        reach more potential customers.
      </p>

      <h2>Custom Solutions 🤖</h2>
      <p>
        I can also provide custom solutions to fit your unique business needs.
        Whether it's a custom CMS, API integration, or a specialized
        application, I can create a solution that's tailored specifically to
        your requirements.
      </p>
    </Layout>
  );
};
export const Head = () => <SeoTags title="My Services" />;
export default ServicePage;
