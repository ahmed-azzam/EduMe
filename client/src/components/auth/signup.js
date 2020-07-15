import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
  state = {
    fName: '',
    email: '',
    password: '',
    type: '',
    gitUser: '',
    success: false,
  };

  // This function for handle changing from inputs
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // this function to set the Value for type of User ( Teacher, Student)
  setTypeVal() {
    var setType = $('#typeOfUser').val();

    this.setState({
      type: setType,
    });
    if (setType !== 'student') {
      this.setState({
        gitUser: '',
      });
    }
  }

  // this function to send data to serve to save it in database
  async handleSubmit(e) {
    e.preventDefault();
    const { fName, email, password, type, gitUser } = this.state;
    await axios
      .post('/api/users/createUser', {
        fName,
        email,
        password,
        type,
        gitUser,
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.success) {
      return <Redirect to='/sign-in' />;
    }
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          {/* Start Form Sign Up */}

          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Sign Up</h3>

            <div className='form-group'>
              <label>Full name</label>
              <input
                type='text'
                name='fName'
                value={this.state.fName}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Full name'
              />
            </div>

            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter e-mail'
              />
            </div>

            <label>Type</label>
            <div id='type-list' className='list-group'>
              {/* this is hidden input to handle type value*/}
              <input
                type='text'
                id='typeOfUser'
                name='type'
                value=''
                onChange={this.handleChange.bind(this)}
                hidden
              />
              <span
                className='list-group-item list-group-item-action'
                data-type='teacher'
                onClick={this.setTypeVal.bind(this)}
              >
                Teacher
              </span>
              <span
                className='list-group-item list-group-item-action std'
                data-type='student'
                onClick={this.setTypeVal.bind(this)}
              >
                Student
              </span>
            </div>

            {/* this Field with be visible if the type was Student */}
            <div
              data-spy='scroll'
              data-target='#type-list'
              data-offset='0'
              className='scrollspy-example'
            >
              <label id='student'>Github Username</label>
              <input
                type='text'
                name='gitUser'
                id='std'
                value={this.state.gitUser}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter Github Username'
              />
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter password'
              />
            </div>

            <button type='submit' className='btn btn-primary btn-block'>
              Sign Up
            </button>
            <p className='forgot-password text-right'>
              Already registered <a href='/sign-in'>sign in?</a>
            </p>
          </form>

          {/* End Form Sign Up */}
        </div>
      </div>
    );
  }
}

/* Start jQuery Code */

$(document).ready(function () {
  // this function to handle the value from <a></a> tag and insert it in (hidden input)
  $('.list-group-item-action').click(function () {
    $('#typeOfUser').val($(this).data('type'));
    console.log($('#typeOfUser').val());

    if ($(this).hasClass('std')) {
      $('.scrollspy-example').slideDown();
    } else {
      $('.scrollspy-example').slideUp();
    }
  });

  $('span.list-group-item').click(function () {
    $(this)
      .css({
        background: '#fbc687',
      })
      .siblings()
      .css({
        background: '#fff',
      });
  });
});

/* End jQuery Code */

export default Signup;

// function setTypeVal() {

// }
//     $(document).ready(function () {
//         $('.list-group-item-action').click(function () {
//             $('#typeOfUser').val($(this.data('type'))
//             console.log($('#typeOfUser').val())
//         })
//     });

// var el = document.getElementsByClassName('list-group-item-action');

// el.addEventListener('click', function () {
//     var type = el.getAttribute('data-type');
//     var inputT = document.getElementById('typeOfUser');
//     inputT.value = type;
//     console.log(inputT.value)
// })

// $('.list-group-item-action').click(function () {
//     console.log($('#typeOfUser').val());
//     $('#typeOfUser').attr('value', $(this).data('type'));
//     console.log($('#typeOfUser').val());
// });
