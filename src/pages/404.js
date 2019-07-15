import React from "react";
import { graphql } from "gatsby";
import BaseLayout from "../components/BaseLayout";
import Seo from "../components/common/Seo";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <BaseLayout location={this.props.location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </BaseLayout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
