<template>
  <div class="resources-page">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>


      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">Meet your Team</h1>
        <div class="callout-copy">
          <p>At Oracle we win as a team. Here you'll find your winning team,<br class="hide-for-small-only"> from mentors to fellow interns. Get ready to fly with the best. </p>
        </div>
      </div>
    </div>

    <div class="subnav">
      <ul id="team-nav" class="menu align-center" data-smooth-scroll>
        <li><a href="#marketingclass">2018 Marketing Class</a></li>
        <li><a href="#interns">Meet the Interns</a></li>
        <li><a href="#mentors">Meet your Mentors</a></li>
      </ul>
    </div>


    <section class="gray-bg" id="marketingclass">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
            <h3>Meet Oracle’s Marketing Class of 2018</h3>
            <p>Meet members of Oracle’s Marketing Class Of 2018. Feel free to reach out to any of the
              members for help or advice.</p>
          </div>
        </div>
        <div class="class-group">


          <slick ref="slick" :options="slickOptionsClass">

            <div class="slide">
              <div class="card">
                <img src="../assets/img/laren-roberge.jpg">
                <div class="card-section">
                  <h5>Lauren Roberge</h5>
                  <p>Marketing Specialist</p>
                  <p>Cal Poly, San Luis Obispo</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/megan-leung.jpg">
                <div class="card-section">
                  <h5>Lauren Roberge</h5>
                  <p>Marketing Specialist</p>
                  <p>Cal Poly, San Luis Obispo</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/alicia-breyer.jpg">
                <div class="card-section">
                  <h5>Lauren Roberge</h5>
                  <p>Marketing Specialist</p>
                  <p>Cal Poly, San Luis Obispo</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/nathan-bao.jpg">
                <div class="card-section">
                  <h5>Lauren Roberge</h5>
                  <p>Marketing Specialist</p>
                  <p>Cal Poly, San Luis Obispo</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/elizabeth-lee.jpg">
                <div class="card-section">
                  <h5>Lauren Roberge</h5>
                  <p>Marketing Specialist</p>
                  <p>Cal Poly, San Luis Obispo</p>
                </div>
              </div>
            </div>




          </slick>





        </div>
      </div>

    </section>



    <section class="interns-grid" id="interns">
      <div class="grid-container fluid">
        <div class="grid-x align-stretch">
          <div class="cell small-12 medium-6 large-4 grid-callout dark-bg">
                <div class="grid-callout-copy">
                  <h3>Get Ready to Soar. Meet your Fellow Interns.</h3>

                  <p>Introducing your Summer 2019 class—where each intern brings to the team a unique set of skills, background, and a fresh perspective. Get to know your fellow interns this summer for the ultimate intern experience.</p>
                </div>
          </div>


          <div class="cell small-12 medium-6 large-8">
            <div class="grid-x align-stretch">
              <div class="cell large-3 medium-6 small-4">
                <div class="intern" style="background-image: url(../../static/face1.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/face2.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/face1.jpg)">
                  <div class="intern-info brand-blue">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/face2.jpg)">
                  <div class="intern-info brand-darkblue">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
                  <div class="intern-info brand-green">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
                  <div class="intern-info brand-darkgreen">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder3.jpg)">
                  <div class="intern-info brand-darkburgundy">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder4.jpg)">
                  <div class="intern-info brand-burgundy">
                    <div class="details">
                      <name>Alanna Harrist</name>
                      <school>Oklahoma State University</school>
                      <p>Mentor:<br>
                        Amy Loskutoff
                      </p>

                      <p>Department:<br>
                        Corporate Events Marketing
                      </p>
                      <p>
                        Start & End Date:<br>
                        June 4th-Aug 10th
                      </p>
                      <p>
                        Fun fact: Plays the ukulele
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face2.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face2.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
              <div class="intern-info brand-green">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4">
            <div class="quote brand-burgundy">
              <div class="quote-info">
                <div class="details">
                 <p>Be polite and follow up as much as possible. As
                  an intern, you will be remembered for not only
                  the work you do, but also the type of person you
                   are. Take full advantage of the opportunity!</p>
                  <p><strong>Travis Pillon</strong><br>
                    UC Berkeley, Summer 2013-2017</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face2.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
              <div class="intern-info brand-green">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face2.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder5.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <div class="update">
                    Come back soon to meet
                    more fellow interns!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-6">
            <div class="quote brand-green">
              <div class="quote-info">
                <div class="details">
                  <p>Be polite and follow up as much as possible. As
                    an intern, you will be remembered for not only
                    the work you do, but also the type of person you
                    are. Take full advantage of the opportunity. You will be remembered for not only
                    the work you do, but also the type of person you
                    are. Take full advantage of the opportunity!</p>
                  <p><strong>Travis Pillon</strong><br>
                    UC Berkeley, Summer 2013-2017</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face1.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/face2.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <name>Alanna Harrist</name>
                  <school>Oklahoma State University</school>
                  <p>Mentor:<br>
                    Amy Loskutoff
                  </p>

                  <p>Department:<br>
                    Corporate Events Marketing
                  </p>
                  <p>
                    Start & End Date:<br>
                    June 4th-Aug 10th
                  </p>
                  <p>
                    Fun fact: Plays the ukulele
                  </p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>



    <section class="team-footer" id="mentors">
        <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
        <h2>Meet Your Mentors</h2>
        <p>Our mentors have a wealth of knowledge and experience to share and are committed to making this year’s intern experience the best ever.</p>
        </div>
        </div>
          <div class="mentor-group">

            <slick ref="slick" :options="slickOptions">

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/megan-leung.jpg" data-src="../assets/img/nathan-bao.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>


              <div class="slide">
                <div class="card">
                  <img src="../assets/img/alicia-breyer.jpg" data-src="../assets/img/nathan-bao.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/nathan-bao.jpg" data-src="../assets/img/placeholder2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>


              <div class="slide">
                <div class="card">
                  <img src="../assets/img/elizabeth-lee.jpg" data-src="../assets/img/placeholder3.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/alicia-breyer.jpg" data-src="../assets/img/placeholder5.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/nathan-bao.jpg" data-src="../assets/img/placeholder2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>


              <div class="slide">
                <div class="card">
                  <img src="../assets/img/elizabeth-lee.jpg" data-src="../assets/img/placeholder1.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                  <div class="card-section">
                    <h5>Lauren Roberge</h5>
                    <p>Marketing Specialist</p>
                    <p>Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>




            </slick>

          </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Slick from 'vue-slick';

  export default {
    name: 'team',
    components: { Slick },
    mounted() {
      this.scroll = new Foundation.SmoothScroll($('#team-nav'));
    },
    methods: {
      hover(event) {
        const targetImage = event.target;
        const source = targetImage.src;
        const newSource = targetImage.dataset.src;

        targetImage.src = newSource;
        targetImage.dataset.src = source;
      },
      hoverOut(event) {
        const targetImage = event.target;
        const source = targetImage.src;
        const newSource = targetImage.dataset.src;

        targetImage.src = newSource;
        targetImage.dataset.src = source;
      },
    },
    data() {
      return {
        msg: '',
        slickOptions: {
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
              },
            },
          ],
        },
        slickOptionsClass: {
          slidesToShow: 5,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
              },
            },
          ],
        },
      };
    },
};
</script>


<style lang="scss" scoped>

  .callout {
    background-image: url('../assets/img/team-bg.svg');
    background-size: cover;
    background-position: center right;
    position:relative;
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(large down) {
      background-position: bottom center;
      background-size: cover;
      .x3 {
        display:none;
      }
    }
  }

  .team-footer {
    background-image: url('../assets/img/team-footer-bg.svg');
    background-size: cover;
    background-repeat:no-repeat;
    background-position: bottom left;
    position:relative;
    padding-bottom:280px;
    background-color: #eeefef;
    h2, h3 {
      color:$secondary-color;
    }
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(medium down) {
      background-position: bottom left;
      background-size: cover;
      padding-bottom:350px;
    }
  }

  .callout-content {
    margin-top:30vh;
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay: 0.5s;
    @include breakpoint(small only) {
      margin-top:23vh;
    }
    @include breakpoint(large down) {
      margin-top:20vh;
      width:70%;
    }
  }


  .x1 {
    animation: movecloudsshort 90s linear infinite;
    width:195px;
    height:auto;
    top:8%;
    left:15%;
    @include breakpoint(large down) {
      width:125px;
    }
  }

  .x2 {
    animation: moveclouds 110s linear infinite;
    width:300px;
    height:auto;
    top:20%;
    left:70%;
    @include breakpoint(large down) {
      width:265px;
    }
  }

  .x3 {
    animation: moveclouds 110s linear infinite;
    width: 132px;
    height: auto;
    bottom: 30%;
    left: 66%;
    @include breakpoint(large down) {
      width: 360px;
    }
  }

  .class-group {
    margin-top:50px;
    width:100%;
    .card {
      margin: 0 10px;
    }
    @include breakpoint(medium down) {
      width:80%;
      margin-left:auto;
      margin-right:auto;
    }
  }

  .card-section {
    h5 {
      font-size:18px;
      color: $secondary-color;
      margin: 0;
    }
    p:first-of-type {
      margin:0;
      font-size:15px;
      color: $tertiary-color;
      font-style: italic;
    }
    p:nth-of-type(2) {
      margin-bottom:0;
      margin-top:5px;
      font-size:15px;
      font-style: italic;
    }
  }

  .card img {
    width:100%;
  }

  .mentor-group {
    width:80%;
    margin: 50px auto 0;
    .card {
      margin: 0 10px;
    }
    @include breakpoint(medium down) {
      width:80%;
    }
  }

  @font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;
    src: url('../assets/fonts/slick.eot');
    src: url('../assets/fonts/slick.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/slick.woff') format('woff'), url('../assets/fonts/slick.ttf') format('truetype'), url('../assets/fonts/slick.svg#slick') format('svg');
  }


  .interns-grid {
    padding:0;
    .grid-container.fluid {
      padding-right: 0.2rem;
      padding-left: 0.2rem;
    }
    .cell {
      overflow:hidden;
    }
  }

  .intern-info {
    color:white;
  }


  .brand-orange {
    background-color: rgba(#f29111, 1);
  }
  .brand-darkorange {
    background-color: rgba(#8a331d, 1);
  }
  .brand-blue {
    background-color: rgba(#00758f, 1);
  }
  .brand-darkblue {
    background-color:rgba(#003b4d, 1);
  }
  .brand-green {
    background-color: rgba(#3a913f, 1);
  }
  .brand-darkgreen {
    background-color: rgba(#004f35, 1);
  }
  .brand-burgundy {
    background-color: rgba(#942645, 1);
  }
  .brand-darkburgundy {
    background-color: rgba(#592439, 1);
  }




  .intern {
    background-size:cover;
    background-repeat:no-repeat;
    width:16.66667vw;
    height:16.66667vw;
    overflow:hidden;
    box-sizing: border-box;

    &:hover {
      .intern-info {
        opacity:1;
      }
    }

    .brand-orange {
      background-color: rgba(#f29111, .85);
    }
    .brand-darkorange {
      background-color: rgba(#8a331d, .85);
    }
    .brand-blue {
      background-color: rgba(#00758f, .85);
    }
    .brand-darkblue {
      background-color:rgba(#003b4d, .85);
    }
    .brand-green {
      background-color: rgba(#3a913f, .85);
    }
    .brand-darkgreen {
      background-color: rgba(#004f35, .85);
    }
    .brand-burgundy {
      background-color: rgba(#942645, .85);
    }
    .brand-darkburgundy {
      background-color: rgba(#592439, .85);
    }
  }

  .intern-info {
    height:100%;
    padding:20px;
    opacity:0;
    transition: opacity 0.3s ease;
    display:flex;
    .details {
      @include flex-align-self(middle);
    }
    .update {
      text-align:center;
      font-size:18px;
      line-height:22px;
    }
    p {
      font-size:14px;
      margin-top:10px;
      margin-bottom:0;
      line-height:15px;
    }
    name {
      font-size:18px;
      display:block;
      margin-bottom:0;
      line-height:18px;
    }
    school {
      font-size:16px;
      display:block;
      margin-bottom:0;
      line-height:16px;
    }
  }

  .quote-info {
    color:white;
    padding:10px 10% 10px 16%;
    display:flex;
    height:16.666667vw;
    overflow:hidden;
    background-image: url('../assets/img/quote.svg');
    background-repeat: no-repeat;
    background-position: 5% 15%;
    background-size:40px 40px;
    @include breakpoint(medium down) {
      padding:20px 20px 20px 13%;
      height:auto;
      background-size:20px 20px;
      background-position:3% 7%;
    }
    p:last-of-type {
      margin-bottom:0;
    }
    .details {
      @include flex-align-self(middle);
    }
  }

  .grid-callout {
    padding:0px 7%;
    display:flex;

    @include breakpoint(large down) {
      padding:20px;
      font-size:15px;
      h3 {
        font-size:23px;
      }
    }
  }

  .grid-callout-copy {
    @include flex-align-self(middle);
  }




</style>
