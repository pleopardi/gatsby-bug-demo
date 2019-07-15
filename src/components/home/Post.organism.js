import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";
import StyledLink from "../common/StyledLink.atom";

const styles = {
  details: {
    fontSize: "0.8rem",
  },
  imageWrapper: {
    borderRadius: "0.4rem",
    overflow: "hidden",
  },
  text: {
    textAlign: "justify",
  },
};

const dateTimeFormatter = new Intl.DateTimeFormat("it-IT");

function Post({ post }) {
  const { author, date, description, image, slug, title } = post.frontmatter;

  const formattedDate = dateTimeFormatter.format(new Date(date));

  const to = `/${slug}`;

  return (
    <div>
      <Link to={to}>
        <div css={styles.imageWrapper}>
          <Image alt={title} fluid={image.sharp.fluid} />
        </div>
      </Link>
      <StyledLink to={to}>
        <h3 css={styles.text}>{title}</h3>
      </StyledLink>
      <StyledLink to={to}>
        <p css={styles.text}>{description}</p>
      </StyledLink>
      <p css={{ ...styles.details, ...styles.text }}>
        {formattedDate} - {author}
      </p>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      slug: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
