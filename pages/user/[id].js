import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserInfo from '../../components/UserInfo';
import Repositories from '../../components/repositories/Repositories';
import API from '../../utils/API';

// function to parse links
const parseLinks = links => {
  if (links) {
    links = links.split(',');
    let pageInfo = links.reduce((res, acc) => {
      let rel = acc.split(';')[1].split('=')[1].replace(/"/g, '');
      let page = acc.split(';')[0].split('&')[2].split('=')[1].replace('>', '');
      res[rel] = Number(page);
      return res;
    }, Object.create(null));

    return pageInfo;
  } else {
    return { next: 1, last: 1 };
  }
};

const User = ({ user, repositories, links }) => {
  const [pageInfo, setPageInfo] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPageInfo(parseLinks(links));
    setRepos(repositories);
  }, []);

  // function to change page
  const changePage = async page => {
    const res = await getRepos(user.login, page);
    setPageInfo(parseLinks(res.headers.link));
    setRepos([...repos, ...res.data]);
    setLoading(false);
  };

  // mapping through repositories and printing them
  return (
    <Layout>
      <div className="container">
        <UserInfo user={user} />
        <Repositories
          repos={repos}
          pageInfo={pageInfo}
          changePage={changePage}
          totalReposLength={user.public_repos}
          loading={loading}
          setLoading={setLoading}
        />
        <style jsx>{`
          .container {
            width: 100%;
            margin: 10px auto;
            position: relative;
          }
        `}</style>
      </div>
    </Layout>
  );
};

const getRepos = (id, page = 1, per_page = 100) => {
  return API.get(
    `/users/${id}/repos?sort=created&per_page=${per_page}&page=${page}`
  );
};

User.getInitialProps = async ({ query }) => {
  // get repositories by getting the username from the url
  const [user, repos] = await Promise.all([
    API.get(`/users/${query.id}`),
    getRepos(query.id),
  ]);

  // return repostories
  return {
    user: user.data,
    repositories: repos.data,
    links: repos.headers.link,
  };
};

export default User;
