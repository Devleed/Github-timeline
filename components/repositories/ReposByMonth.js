import React from 'react';
import Repo from './Repo';

const ReposByMonth = ({ years, month }) => {
  const renderRepos = month => {
    return month.reverse().map(repo => {
      return <Repo repo={repo} key={repo.id} />;
    });
  };

  const noOfReposInMonth = years[month].length;

  return (
    <div>
      <div className="timeline-section">
        <div className="timeline-date">
          {month}
          <span>
            {noOfReposInMonth} - repositor{noOfReposInMonth > 1 ? 'ies' : 'y'}
          </span>
        </div>
        <div className="row">{renderRepos(years[month])}</div>
      </div>
      <style jsx>{`
        .timeline-section {
          padding-left: 35px;
          display: block;
          position: relative;
          margin-bottom: 30px;
        }
        .timeline-date span {
          position: absolute;
          top: -1px;
          left: calc(100% - 10px);
          z-index: -1;
          white-space: nowrap;
          display: inline-block;
          background-color: #111;
          padding: 4px 10px 4px 20px;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
          border: 1px solid black;
          box-sizing: border-box;
        }
        .timeline-date {
          margin-bottom: 15px;
          padding: 4px 15px 4px 35px;
          background: linear-gradient(#550055, #770077 60%, #990099);
          position: relative;
          display: inline-block;
          border: 1px solid #17191b;
          color: #fff;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        }
        .timeline-section:before {
          content: '';
          position: absolute;
          width: 30px;
          height: 1px;
          background-color: #444950;
          top: 12px;
          left: 20px;
        }

        .timeline-section:after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: linear-gradient(
            to bottom,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(112, 120, 125, 1) 100%
          );
          top: 7px;
          left: 11px;
          border: 1px solid #17191b;
          border-radius: 100%;
        }
        .row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default ReposByMonth;
