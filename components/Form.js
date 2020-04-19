import { useState } from 'react';

import API from '../utils/API';
import Layout from './Layout';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const onKeyPress = async e => {
    // check if enter is pressed
    if (e.keyCode === 13) {
      try {
        // try to find user
        await API.get(`/users/${value}`);

        // submit with value
        onSubmit(value);
      } catch (err) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="web-info">
          <div>
            <h1>Easy View!</h1>
            <p>Timeline of all your Github repositories</p>
          </div>
        </div>
        <div className="username-div">
          <div>
            <h3>
              <img src="https://img.icons8.com/color/96/000000/github--v1.png" />
            </h3>
            <div className="username-input-field">
              <input
                onChange={e => setValue(e.target.value)}
                value={value}
                onKeyDown={onKeyPress}
                placeholder="Enter your github username"
              />
              <img src="https://img.icons8.com/color/17/000000/arrow.png" />
            </div>
            {error ? (
              <span className="error-msg">
                {error.message.toLowerCase()}
                <img
                  src="https://img.icons8.com/color/20/000000/error.png"
                  align="right"
                />
              </span>
            ) : null}
          </div>
          <span>
            <a href="https://github.com" target="_blank">
              Don't have a github account? Create one
            </a>
          </span>
        </div>
        {/* STYLING */}
        <style jsx>{`
          .container {
            font-family: 'Baloo Bhaina 2', cursive;
            width: 65%;
            display: grid;
            margin: 90px auto;
            grid-template-columns: 1fr 1fr;
            border: 0.5px solid rgb(255, 255, 255, 0.1);
            box-shadow: 2px 4px 20px 0.1px #d9d9d9;
            height: 500px;
            border-radius: 10px;
          }
          .username-div {
            position: relative;
            height: 100%;
          }
          .username-div > div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .username-input-field {
            border-bottom: 0.7px solid #d9d9d9;
            width: 250px;
            transition: all 0.5s ease-out 0s;
          }
          .username-input-field > input {
            border: none;
            padding: 7px;
            width: 80%;
          }
          .username-input-field:focus-within {
            border-bottom: 0.7px solid #008ecc;
          }
          .username-input-field > input:focus {
            outline: 0;
          }
          .username-div > span > a {
            position: absolute;
            bottom: 10px;
            right: 10px;
            color: #c0c0c0;
            font-size: 11px;
            text-decoration: none;
          }
          .error-msg {
            color: #8f0000;
            font-size: 13px;
            padding: 10px;
            background-color: #fff0f0;
            border: 1px solid #8f0000;
            width: 100%;
          }
          .web-info > div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: 'Righteous', cursive;
          }
          .web-info > div > h1 {
            font-size: 50px;
          }
          .web-info {
            position: relative;
            background-color: #330033;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Form;
