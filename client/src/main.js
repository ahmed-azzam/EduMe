import $ from 'jquery';

const waterMellon = () => {
  $(document).ready(function () {
    // Change Header Height

    $('.header').height($(window).height());

    // Main Features tab
    $('.features .box').click(function () {
      var feat = $(this).data('feat');
      $(feat).slideDown().siblings().slideUp();
    });

    // Section Of Features Tab

    $('.teacher .feat .course-tabs .sections .vid').click(function () {
      var section = $(this).data('section');
      $(section).parent().slideDown();
      $(section).slideDown().siblings().slideUp();
      console.log(section);
    });

    // Pop Up Videos In Student Page (Courses)

    // $('.video-popup').on('click', function (e) {
    //   e.preventDefault();
    //   var videoUrl = $(this).attr('data-media');
    //   var popupIframe = $('#popup-frame');

    //   popupIframe.attr('src', videoUrl);
    //   $('.popup').addClass('show-popup');
    // });

    // $('.popup').on('click', function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   $('#popup-frame').attr('src', '');
    //   $('.popup').removeClass('show-popup');
    // });

    // $('.popup > iframe').on('click', function (e) {
    //   e.stopPropagation();
    // });

    // Trigger MixitUp
    // $('.feat .course-videos .sections div').click(function () {
    //     var type = $(this).data('filter')
    //     console.log(type)
    //     if (type == 'all') {
    //         $('.feat .course-videos section ').show()
    //     } else if (type == 'technical-skills') {
    //         $('.' + type).show().siblings().hide()
    //     } else if (type == 'non-technical') {
    //         $('.' + type).show().siblings().hide()
    //     } else if (type == 'other') {
    //         $('.' + type).show().siblings().hide()
    //     }
    // })

    // var mixer = mixitup('.feat .course-videos section', {
    //     animation: {
    //         effectsOut: 'fade translateX(-100%)'
    //     }
    // })

    // Starting Work With GitHub API (For lating)

    //   let theInput = document.querySelector('.repos-container .get-repos input');
    //   let reposData = document.querySelector('.repos-container .show-data');

    // this function for get repos
    //   function getRepos() {
    // fetch(`https://api.github.com/users/${theInput.value}/repos`)
    //     .then((response) => response.json())
    //     .then((repos) => {
    //         repos.forEach(repo => {
    //             let mainDiv = document.createElement("div");
    //             let repoName = document.createTextNode(repo.name);
    //             mainDiv.appendChild(repoName);
    //             let theUrl = document.createElement('a');
    //             let theUrlText = document.createTextNode("Visit");
    //             theUrl.appendChild(theUrlText);
    //             theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
    //             theUrl.setAttribute('target', '_blank');
    //             mainDiv.appendChild(theUrl);
    //             let starsSpan = document.createElement("span");
    //             let starsText = document.createTextNode(`Stars : ${repo.stargazers_count}`);
    //             let forksSpan = document.createElement("span");
    //             // <i class="fas fa-code-branch"></i>
    //             let forksText = document.createTextNode(`Forks : ${repo.forks}`);
    //             starsSpan.appendChild(starsText);
    //             forksSpan.appendChild(forksText);
    //             mainDiv.appendChild(starsSpan);
    //             mainDiv.appendChild(forksSpan);
    //             mainDiv.className = 'repo-box';
    //             reposData.appendChild(mainDiv);
    //         });
    //     });
    //   }
    //   getRepos();
  });
};

export default waterMellon;
