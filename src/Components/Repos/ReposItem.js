import React from "react";
import PropTypes from "prop-types";

const ReposItem = (props) => {
  const { repo } = props;
  const openInNewTab = (repo) => {
    window.open(repo);
  };
  return (
    <div className="card">
      <h3>
        <a href={() => openInNewTab(repo)}>{repo.name}</a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default ReposItem;
