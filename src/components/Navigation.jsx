import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from 'react-redux'

function Navigation(props) {
  const isLoading = useSelector((state) => state.isLoading)
  let loadingButton = <div></div>;
  if (isLoading) {
    loadingButton = (<div className="align-self-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>)
  }
  return (
    <div className="navigation">
      {loadingButton}
      <p className="m-0 text-center text-white bg-dark fixed-top header-text">
        {props.header}
      </p>
    </div>
  );
}

export default Navigation;