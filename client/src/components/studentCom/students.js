import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import $ from 'jquery';
import waterMellon from '../../main';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
// import { Redirect } from 'react-router-dom';

class Student extends React.Component {
  state = {
    videos: [],
    userName: '',
    repos: [],
  };

  componentDidMount() {
    // console.log(this.props.location.state);
    const { fName, gitUser } = this.props.location.state;
    this.setState({
      userName: fName,
    });
    console.log(gitUser);
    fetch(`https://api.github.com/users/${gitUser}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({
          repos: data,
        });
        console.log(this.state.repos);
      })
      .catch(error => {
        console.log(error);
      });
    waterMellon();
  }

  async getAllVideos() {
    await axios
      .get('/api/courses')
      .then(response => {
        this.setState({
          videos: response.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  async getCustomVideos(e) {
    var type = $(e.target)[0].dataset.filter.slice(1);
    await axios
      .get(`/api/courses/${type}`)
      .then(response => {
        this.setState({
          videos: response.data,
        });
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  showVideo(e) {
    e.preventDefault();
    $('.video-popup').on('click', function (e) {
      var videoUrl = $(this).attr('data-media');
      var popupIframe = $('#popup-frame');

      popupIframe.attr('src', videoUrl);
      $('.popup').addClass('show-popup');
    });

    $('.popup').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      $('#popup-frame').attr('src', '');
      $('.popup').removeClass('show-popup');
    });

    $('.popup > iframe').on('click', function (e) {
      e.stopPropagation();
    });
  }

  render() {
    return (
      <div className='students'>
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
                    Welcome{' '}
                    <span className='main-color wl'>{this.state.userName}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}
        {/* Start Main Feature */}
        <div className='features'>
          <div className='container'>
            <div data-feat='#courses' className='box'>
              <FontAwesomeIcon icon={faFilm} />
              <h3>My Courses</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#questions' className='box'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <h3>Start Quiz</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div data-feat='#students' className='box'>
              <FontAwesomeIcon icon={faGithub} />
              <h3>My Github Repos</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
        </div>
        {/* End Main Feature */}
        <div className='container'>
          {/* Start First Feature Added Courses */}
          <div id='courses' className='feat text-center active'>
            <h4>Courses</h4>
            <p className='h1'>In this section you can watch online courses</p>
            <div className='course-videos'>
              {/* Start Section Courses */}
              <div className='sections'>
                <div data-filter='.all' onClick={this.getAllVideos.bind(this)}>
                  All Categories
                </div>
                <div
                  data-filter='.technical-skills'
                  onClick={this.getCustomVideos.bind(this)}
                >
                  Technical Skills
                </div>
                <div
                  data-filter='.non-technical'
                  onClick={this.getCustomVideos.bind(this)}
                >
                  Non-Technical
                </div>
                <div
                  data-filter='.other'
                  onClick={this.getCustomVideos.bind(this)}
                >
                  Other
                </div>
              </div>
              {/* End Section Courses */}
              <section>
                {this.state.videos.map((video, index) => {
                  return (
                    <table className='other' key={index}>
                      <tbody>
                        <tr>
                          <td
                            className='video'
                            onClick={this.showVideo.bind(this)}
                          >
                            <a
                              className='video-popup'
                              href='#'
                              data-media={video.videoUrl}
                            >
                              <div className='play-icon-wrap'>
                                <div className='play-icon'>
                                  <FontAwesomeIcon icon={faPlayCircle} />
                                </div>
                              </div>
                              <img src={video.videoImg} width='100%' alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th className='videos'>{video.title}</th>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kihxoUcFf9Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              </section>
            </div>
          </div>
          {/* End First Feature Added Courses */}
          <div id='questions' className='feat'>
            <h1>feature two</h1>
          </div>
          {/* Start Github Repos Feature */}
          <div id='students' className='feat'>
            <div className='repos-container'>
              <div className='get-repos'>
                <input type='text' value='hackreactor' hidden />
              </div>
              <div className='show-data'>
                {this.state.repos.map((repo, index) => {
                  return (
                    <div className='repo-box' key={index}>
                      {repo.name}
                      <a href={repo.html_url} target='_blank'>
                        <FontAwesomeIcon icon={faEye} />{' '}
                      </a>
                      <span>
                        <FontAwesomeIcon icon={faStar} />{' '}
                        {repo.stargazers_count}
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* End Github Repos Feature */}
        </div>
        {/* this div for clear float */}
        <div className='clearFix'></div>
        {/* End Our Features */}
        {/* Start Footer */}
        <footer className='text-center'>
          Copyright &copy; <span>EduMe</span> 2020
        </footer>
        {/* Start Footer */}
        {/* This div To Pop Course Video */}
        <div className='popup'>
          <iframe
            id='popup-frame'
            src=''
            frameBorder='0'
            width='720'
            height='445'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Student;
