import React from 'react';
import waterMellon from '../../main';

class Landing extends React.Component {
  state = {};

  componentDidMount() {
    waterMellon();
  }

  render() {
    return (
      <div className='landing'>
        {/* Start Header */}

        <div className='header'>
          <div className='overlay'>
            <div className='container table'>
              <div className='navbar'>
                <span>
                  <span className='main-color wl'>Edu</span>Me
                </span>
              </div>
              <div className='table-row'>
                <div className='intro text-center'>
                  <h1 className='upper'>
                    Welcome to{' '}
                    <span className='main-color wl'>
                      Edu<span>Me</span>
                    </span>
                  </h1>
                  <p className='capital'>
                    Educational platform that connects the teachers with the
                    students, <br />
                    it provides an interface that provides the required academic
                    content in one place.
                  </p>
                  <div className='buttons'>
                    <a className='upper' href='/sign-in'>
                      sign in
                    </a>
                    <a className='upper' href='/sign-up'>
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Header */}
      </div>
    );
  }
}

export default Landing;
