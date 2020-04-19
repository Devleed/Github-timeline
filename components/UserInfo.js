import React from 'react';
import moment from 'moment';
import Head from 'next/head';

const UserInfo = ({ user }) => {
  return (
    <div className="container">
      <Head>
        <title>{user.login}</title>
      </Head>
      <div className="coverage"></div>
      <div className="top">
        <img className="profile_avatar" src={user.avatar_url} />
        <h4>
          <a href={user.html_url} target="_blank">
            {user.login}
          </a>
        </h4>
        <p>{user.bio}</p>
      </div>
      <div className="middle">
        <a
          href={`https://github.com/${user.login}?tab=followers`}
          target="_blank"
        >
          <img src="https://img.icons8.com/color/25/000000/user-male-circle.png" />
          <p>followers</p> <span>{user.followers}</span>
        </a>
        <a
          href={`https://github.com/${user.login}?tab=following`}
          target="_blank"
        >
          <img src="https://img.icons8.com/color/25/000000/user-shield.png" />
          <p>following</p> <span>{user.following}</span>
        </a>
      </div>
      <div className="middle">
        <a
          href={`https://github.com/${user.login}?tab=repositories`}
          target="_blank"
        >
          <img src="https://img.icons8.com/color/25/000000/github-2.png" />
          <p>public repositories</p> <span>{user.public_repos}</span>
        </a>
        {user.company ? (
          <a href={user.html_url} target="_blank">
            <img src="https://img.icons8.com/color/25/000000/briefcase.png" />
            <p>company</p> <span>{user.company}</span>
          </a>
        ) : null}
      </div>
      <span className="joining-date">
        Joined in {moment(user.created_at).format('ll')}
      </span>
      {/* STYLING */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        .joining-date {
          font-size: 13px;
          color: gray;
          /* margin-top: -32px; */
        }
        .middle {
          width: 100%;
          position: relative;
          top: -50px;
          border-bottom: 0.7px solid #d9d9d9;
          padding: 10px 0;
        }
        .middle > a {
          color: black;
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          margin: 0 10px;
        }
        .middle > a:hover {
          text-decoration: underline;
        }
        .middle > a > p {
          flex: 2;
        }
        .middle > a > img {
          margin-right: 5px;
        }
        .container {
          font-family: 'Baloo Bhaina 2', cursive;
          position: fixed;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          width: 250px;
          align-items: center;
          border: 0.7px solid #d9d9d9;
          border-radius: 10px;
        }
        .profile_avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid white;
        }
        .top {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          top: -70px;
          min-height: 180px;
          border-bottom: 0.7px solid #d9d9d9;
        }
        .top a {
          color: black;
          text-decoration: none;
        }
        .top a:hover {
          text-decoration: underline;
        }
        .top p {
          font-size: 13px;
          padding: 13px;
        }
        .coverage {
          width: 100%;
          height: 120px;
          position: relative;
          background-color: #330033;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='480' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default UserInfo;
