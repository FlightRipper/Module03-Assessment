// ArticlesPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeArticlesCards from '../../Components/card';
import { useMediaQuery } from 'react-responsive';
import '../../Components/custom.scss'; // Import the custom CSS file

const ArticlesPage = () => {
  const [article, setArticle] = useState(null);
  const isMediumScreen = useMediaQuery({ maxWidth: 1250 }); // Adjust the breakpoint as needed
  const isSmallScreen = useMediaQuery({ maxWidth: 567 }); // Adjust the breakpoint as needed


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get('http://localhost:9998/article/');
        const data = response.data;
        setArticle(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setArticle(null);
      }
    };
    fetchArticle();
  }, []);

  return (
    <div className="w-100 vh-100 mt-5">
        <div className="article-request-card-home-container d-flex flex-column flow-row justify-content-center align-items-center gap-5">
          <div className="w-50">
            <h1 className="text-info ">Top Articles</h1>
            <h4 className="text-dark">
              Have An Overview of Our Articles and Raise for what you care for
            </h4>
          </div>
          {article && (
            <div
              id="campaignCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* {article
                  .reduce((acc, item, index) => {
                    if (
                      index % (isSmallScreen ? 1 : isMediumScreen ? 2 : 3) ===
                      0
                    ) {
                      acc.push([]);
                    }
                    acc[acc.length - 1].push(item);
                    return acc;
                  }, [])
                  .map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className={`carousel-item ${
                        groupIndex === 0 ? 'active' : ''
                      }`}
                    >
                      <div className="d-flex justify-content-around">
                        {group.map((item, itemIndex) => (
                          <HomeArticlesCards
                            key={itemIndex}
                            data={item}
                            className={`${
                              isMediumScreen ? 'custom-medium-width' : ''
                            } col-md-4 col-sm-6 col-12`}
                          />
                        ))}
                      </div>
                    </div>
                  ))} */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#campaignCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#campaignCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
    </div>
  );
};

export default ArticlesPage;
