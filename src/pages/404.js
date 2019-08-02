import React, { Fragment } from "react";
import { Link } from "gatsby";
import CssBaseline from "../components/CssBaseline";
import NotFoundLayout from "../layouts/NotFoundLayout";
import Seo from "../components/common/Seo";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Seo lang="it" title="Pagina inesistente" />
        <CssBaseline />
        <NotFoundLayout>
          <h1>Pagina inesistente</h1>
          <Link to="/">Vai alla home</Link>
        </NotFoundLayout>
      </Fragment>
    );
  }
}

export default NotFoundPage;
