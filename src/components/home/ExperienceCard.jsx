import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
        {data.description && (
          <p className="text-muted mt-3">{data.description}</p>
        )}
        {data.demo && (
          <a
            href={data.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-secondary"
          >
            Visit Website
          </a>
        )}
      </div>
    </Col>
  );
};

export default ExperienceCard;
