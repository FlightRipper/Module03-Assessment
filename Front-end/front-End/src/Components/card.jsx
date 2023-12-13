import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./custom.scss";


const HomeCampaignsCards = ({ data }) => {
  
  return (
    <>
      <div className="card w-25 custom-cards-home-lol">
        <img
          src={`http://localhost:9998/uploads/${data.image}`}
          className="card-img-top h-100 w-100"
          alt="..."
        />
        <div className="card-body d-flex flex-column align-items-center gap-3">
          <h3 className="card-title text-info">{data.category}</h3>
          <div className="d-flex flex-column align-items-center gap-3">
            <h4 className="card-text">{data.title}</h4>
            <p className="card-text">{data.description}</p>
            <p className="card-text">
              Target Amount: $
            </p>
            <input
              className="mb-2"
              type="range"
              // min="0"
              // max={data.targetAmount}
              // value={data.totalDonations}
              disabled
            ></input>
            <p className="card-text">
              <small className="text-body-secondary">
                Created by: <span>{data.User.username}</span>
              </small>
            </p>
          </div>

          <Link to="/donation" state={{ data: data }}>
        <button
          type="button"
          className="btn btn-primary donate-button-home m-auto p-3"
        >
          Donate Now
        </button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCampaignsCards;
