import React, { useState } from 'react';
import moment from 'moment';
import ReposByYear from './ReposByYear';
import Loader from '../Loader';

const Repositories = ({
  repos,
  pageInfo,
  changePage,
  totalReposLength,
  loading,
  setLoading,
}) => {
  const [sortValue, setSortValue] = useState('newest');
  const [yearFilter, setYearFilter] = useState('all');

  // group repositories by year and month
  const repositories = repos.reduce((res, acc) => {
    let year = moment(acc.created_at).format('YYYY');
    let month = moment(acc.created_at).format('MMMM');
    res[year] = res[year] || {};
    res[year][month] = res[year][month] || [];
    res[year][month].push(acc);
    return res;
  }, {});

  // render repositories by year
  const renderReposByYear = () => {
    const reposByYear =
      yearFilter !== 'all'
        ? Object.keys(repositories).filter(year => year === yearFilter)
        : Object.keys(repositories);
    if (sortValue === 'newest') {
      reposByYear.reverse();
    }
    return reposByYear.map(year => {
      return (
        <div className="year_child" key={year}>
          <ReposByYear repositories={repositories} year={year} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="filters">
        <select
          className="sort"
          value={sortValue}
          onChange={e => setSortValue(e.target.value)}
        >
          <option disabled>Sort By</option>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
        <select
          className="year_filter"
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}
        >
          <option value="all">All</option>
          {Object.keys(repositories).map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="timeline">{renderReposByYear()}</div>

      {pageInfo.next !== pageInfo.last && yearFilter === 'all' ? (
        <button
          className="page_action"
          onClick={e => {
            setLoading(true);
            changePage(pageInfo.next);
          }}
        >
          View {totalReposLength - repos.length} More
          {loading ? <Loader /> : null}
        </button>
      ) : null}

      {/* STYLING */}
      <style jsx>{`
        .page_action {
          width: 100%;
          padding: 10px;
          position: relative;
          right: 0;
          background-color: white;
          border: 1px solid #008ecc;
          border-radius: 5px;
          color: #008ecc;
          cursor: pointer;
          transition: box-shadow 0.3s ease 0s;
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
        .page_action:hover {
          text-decoration: underline;
          box-shadow: 0.1px 0.1px 5px 0.1px #008ecc;
        }
        .container {
          font-family: 'Baloo Bhaina 2', cursive;
          position: absolute;
          right: 0;
          top: 0;
          width: 80%;
          border: 1px solid #d9d9d9;
          padding: 10px;
        }
        .filters {
          position: fixed;
          right: 20px;
          padding: 10px;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          z-index: 99;
          display: flex;
        }
        .year_filter,
        .sort {
          padding: 10px;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
        }
        .timeline {
          margin-top: 20px;
          position: relative;
          color: black;
        }

        .timeline:before {
          position: absolute;
          content: '';
          width: 4px;
          height: calc(100% + 50px);
          background: rgb(138, 145, 150);
          background: -moz-linear-gradient(
            left,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(98, 105, 109, 1) 100%
          );
          background: -webkit-linear-gradient(
            left,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(98, 105, 109, 1) 100%
          );
          background: linear-gradient(
            to right,
            rgba(138, 145, 150, 1) 0%,
            rgba(122, 130, 136, 1) 60%,
            rgba(98, 105, 109, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a9196', endColorstr='#62696d',GradientType=1 );
          left: 14px;
          top: 5px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
export default Repositories;
