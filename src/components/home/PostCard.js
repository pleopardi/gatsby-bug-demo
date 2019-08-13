import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { StyledLink } from "../common";

const styles = {
  details: {
    fontSize: "0.9rem",
    fontWeight: 600,
    marginBottom: 0,
  },
  imageWrapper: {
    borderRadius: "0.4rem",
    overflow: "hidden",
  },
};

function PostCard({ post }) {
  const { author, date, description, image, title } = post.frontmatter;
  const { slug } = post.fields;

  const to = `/${slug}`;

  return (
    <article>
      <Link to={to}>
        <div css={styles.imageWrapper}>
          <Image alt={title} fluid={image.sharp.fluid} />
        </div>
      </Link>
      <StyledLink to={to}>
        <h2>{title}</h2>
      </StyledLink>
      <p>{description}</p>
      <p style={styles.details}>
        {date} - {author}
      </p>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostCard;
