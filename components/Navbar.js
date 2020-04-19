import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>

      {/* STYLING */}
      <style jsx>{`
        .main-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background-color: #2d2d2d;
        }
        ul {
          display: flex;
          margin: 0 auto;
          width: 80%;
          height: 100%;
          align-items: center;
          justify-content: flex-end;
        }
        ul > li {
          list-style-type: none;
          padding: 20px;
          transition: background-color 0.3s ease 0s;
          cursor: pointer;
        }
        ul > li:hover {
          background-color: #18191a;
        }
        ul > li > a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
