import React from 'react';
import ReposByMonth from './ReposByMonth';

const ReposByYear = ({ repositories, year }) => {
  const renderReposByMonth = years => {
    return Object.keys(years)
      .reverse()
      .map(month => {
        return (
          <React.Fragment key={month}>
            <ReposByMonth years={years} month={month} />
            {/* STYLING */}
            <style jsx>{``}</style>
          </React.Fragment>
        );
      });
  };

  const noOfReposInYear = Object.values(repositories[year]).flat().length;

  return (
    <div>
      <div className="timeline-year">
        {year}
        <span>
          {noOfReposInYear} - repositor{noOfReposInYear > 1 ? 'ies' : 'y'}
        </span>
      </div>
      <div className="month">{renderReposByMonth(repositories[year])}</div>
      <style jsx>{`
        .timeline-year {
          position: relative;
          padding: 4px 15px 0px 35px;
          background-color: #444950;
          display: inline-block;
          width: auto;
          border: 1px solid #17191b;
          border-right-color: black;
          margin-bottom: 30px;
          color: white;
        }

        .timeline-year span {
          position: absolute;
          top: -1px;
          left: calc(100% - 10px);
          z-index: -1;
          white-space: nowrap;
          display: inline-block;
          background-color: #111;
          padding: 4px 10px 0px 20px;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
          border: 1px solid black;
          box-sizing: border-box;
        }

        .timeline-year:before {
          position: absolute;
          content: '';
          width: 20px;
          height: 20px;
          background: rgb(138, 145, 150);
          background: -moz-linear-gradient(
            top,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(112, 120, 125, 1) 100%
          );
          background: -webkit-linear-gradient(
            top,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(112, 120, 125, 1) 100%
          );
          background: linear-gradient(
            to bottom,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(112, 120, 125, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a9196', endColorstr='#70787d',GradientType=0 );
          border-radius: 100%;
          border: 1px solid #17191b;
          left: 5px;
        }
      `}</style>
    </div>
  );
};

export default ReposByYear;
