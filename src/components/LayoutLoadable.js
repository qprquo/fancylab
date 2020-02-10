import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useStaticQuery, graphql } from 'gatsby';
import { asset } from '../util/util';
import Seo from './Seo';
import MobileMenu from './MobileMenu';
import $ from 'jquery';
import 'particles.js';

const Layout = ({
  seo,
  children
}) => {

  useEffect(() => {
    window.particlesJS.load('particles', asset('/particlesjs-config.json'), (e) => {
    })
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { title } = data.site.siteMetadata;

  return (
    <>
      <MobileMenu />
      <div className="content-wrapper">
        <Seo {...seo} />
        <Header title={title} />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;