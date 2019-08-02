import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";
import StyledLink from "../common/StyledLink.atom";

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

const dateTimeFormatter = new Intl.DateTimeFormat("it-IT");

function PostCard({ post }) {
  const { author, date, description, image, slug, title } = post.frontmatter;

  const formattedDate = dateTimeFormatter.format(new Date(date));

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
        {formattedDate} - {author}
      </p>
    </article>
  );
}

PostCard.propTypes = {
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

export default PostCard;