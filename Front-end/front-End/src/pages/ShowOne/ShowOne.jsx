import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowOne.css';
// import { useLocation } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';
// import jwt_decode from 'jwt-decode';
// import unchr from './UNHCR.png';
// import TimeSpan from './Time_Span.png';
// import SpinnerSmall from '../components/SpinnerLoadingSmalle'

const ShowOne = () => {
  const [article, setArticle] = useState('');
//   const [messages, setmessages] = useState('');
//   const [loading, setLoading] = useState(false);
useEffect(() => {
    const fetchArticle = async () => {
    try {
        const response = await axios.get('http://localhost:9998/article/1');
        const data = response.data;
        setArticle(data);
        // console.log(data);
    } catch (error) {
        console.log(error);
        setArticle(null);
    }
    };
    fetchArticle();
    console.log(article)
}, []);
const handleSubmit = async (e) => {
    e.preventDefault();
}


  return (
    <>
      <form className="sh7ade-page" onSubmit={handleSubmit}>
        <div className="sh7ade-page-LeftSide">
          <h1 className="sh7abe-page-LeftSide-Title">{data.title}</h1>
          <img
            className="sh7abe-page-LeftSide-Sha7adImage"
            src={`http://localhost:9998/uploads/${data.image}`}
          ></img>
          <div className="sh7ade-page-LeftSide-CreatedByWithImage">
            <img
              className="sh7abe-page-LeftSide-CreatedByImage"
              src={unchr}
            ></img>
            <p className="sh7ade-page-LeftSide-CreatedBy m-0">
              Created By: {data.User.username}
            </p>
          </div>
          <div className="sh7ade-page-LeftSide-CreatedAtWithImage">
            <img
              className="sh7abe-page-LeftSide-CreatedAtImage"
              src={TimeSpan}
            ></img>
            <p className="sh7ade-page-LeftSide-CreatedAt m-0">
              Created At: {data.startDate}
            </p>
          </div>
          <p className="sh7ade-page-LeftSide-Description">{data.description}</p>
        </div>

        <div className="sh7ade-page-DonationForm shadow-lg">
          <h1 className="sh7abe-page-EnterDonation-Text">
            Enter your Donation
          </h1>
          <p className="sh7ade-page-Text-Form">
            WeRise is a 100% startup funded and created by Lebanese youths. If
            you'd like to help us grow, you can tip us here. Thank you!
          </p>
          <div className="sh7ade-page-ThankYouAndAmount">
            <p>Thank you for including an amount of:</p>
            <div className="sh7ade-page-input">
              <input
                type="number"
                placeholder=" 0.0$"
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </div>
          </div>
          <button className="sh7ade-page-SubmitButton" type="submit">
            Submit Donation
          </button>
          <div
            className={
              messages === 'Your Donation was sent successfully'
                ? 'text-success'
                : 'text-danger'
            }
          >
            {messages}
          </div>
        </div>
      </form>
    </>
  );
};

export default ShowOne;