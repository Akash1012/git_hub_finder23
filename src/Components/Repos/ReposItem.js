import React from "react";
import PropTypes from "prop-types";

const ReposItem = (props) => {
  const { repo } = props;
  const openInNewTab = (repo) => {
    console.log("akash", repo);
    window.open(repo.html_url);
  };
  return (
    <div className="card">
      <h3>
        <a onClick={() => openInNewTab(repo)}>{repo.name}</a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default ReposItem;
