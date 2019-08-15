import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import CookieBanner from "../components/CookieBanner";
import CssBaseline from "../components/CssBaseline";
import NotFoundLayout from "../layouts/NotFoundLayout";
import { Seo } from "../components/common";

function NotFoundPage({ data, pageContext }) {
  const locale = pageContext.locale;
  const { link, title } = data.translations.nodes[0].messages[locale];

  return (
    <Fragment>
      <Seo lang={locale} title={title} />
      <CssBaseline />
      <CookieBanner />
      <NotFoundLayout>
        <h1>{title}</h1>
        <Link to="/">{link}</Link>
      </NotFoundLayout>
    </Fragment>
  );
}

// TODO: add propTypes

export default NotFoundPage;

export const pageQuery = graphql`
  query get404Data {
    translations: allFile(
      filter: {
        extension: { eq: "json" }
        name: { eq: "404" }
        sourceInstanceName: { eq: "intl" }
      }
    ) {
      nodes {
        messages: childTranslationsJson {
          en {
            link
            title
          }
          it {
            link
            title
          }
        }
      }
    }
  }
`;
