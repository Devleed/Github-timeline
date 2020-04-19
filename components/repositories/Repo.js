import React from 'react';
import moment from 'moment';

const Repo = ({ repo }) => {
  return (
    <div>
      <div className="timeline-box">
        <div className="box-title">
          <i className="fa fa-asterisk text-success" aria-hidden="true"></i>
          {repo.name}
        </div>
        <div className="box-content">
          <div className="box-item">
            <strong>Created</strong>: {moment(repo.created_at).format('LL')}
          </div>
          <div className="box-item">
            <strong>Last Pushed</strong>: {moment(repo.pushed_at).format('LL')}
          </div>
          {repo.description ? (
            <div className="box-item">
              <strong>Description</strong>: {repo.description}
            </div>
          ) : null}
          <div className="box-item">
            <strong>Branch</strong>: {repo.default_branch}
          </div>
          {repo.license ? (
            <div className="box-item">
              {/* <strong>License</strong>: {repo.license} */}
            </div>
          ) : null}
        </div>
        {repo.language ? (
          <div className="box-footer">{repo.language}</div>
        ) : null}
      </div>
      <style jsx>{`
        .timeline-box {
          position: relative;
          background-color: #d9d9d9;
          border-radius: 15px;
          border-top-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border: 1px solid #d9d9d9;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .box-icon {
          position: absolute;
          right: 5px;
          top: 0px;
        }

        .box-title {
          padding: 5px 15px;
          border-bottom: 1px solid #d9d9d9;
        }

        .box-title i {
          margin-right: 5px;
        }

        .box-content {
          padding: 5px 15px;
          background-color: white;
        }

        .box-content strong {
          color: #666;
          font-style: italic;
          margin-right: 5px;
        }

        .box-item {
          margin-bottom: 5px;
        }

        .box-footer {
          padding: 5px 15px;
          border-top: 1px solid #d9d9d9;
          background-color: #d9d9d9;
          text-align: right;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default Repo;
