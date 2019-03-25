<template>
  <div class="resources-page">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>


      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">Meet Your Team</h1>
        <div class="callout-copy">
          <p>At Oracle, we win as a team. From mentors to fellow interns,<br class="hide-for-small-only">  get ready to fly with the best. </p>
        </div>
      </div>
    </div>

    <div class="subnav">
      <ul id="team-nav" class="menu align-center" data-smooth-scroll>
        <li><a href="#recruitmentteam">2018 Recruitment Team </a></li>
        <li><a href="#interns">Meet your Class</a></li>
        <li><a href="#mentors">Meet your Mentors</a></li>
      </ul>
    </div>


    <section class="gray-bg" id="recruitmentteam">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
            <h3>Meet Your Recruitment Team</h3>
            <p>Feel free to reach out to any of them for help or advice throughout your internship.</p>
          </div>
        </div>
        <div class="class-group">


          <slick ref="slick" :options="slickOptionsClass">

            <div class="slide">
              <div class="card">
                <img src="../assets/img/rachel-blackbourn1.jpg" data-src="../assets/img/rachel-blackbourn2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Rachel Blackbourn</h5>
                  <p>Marketing Internship Mentor</p>
                  <p>University of Wisconsin - Madison</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/alex-mandel1.jpg" data-src="../assets/img/alex-mandel2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Alex Mandel</h5>
                  <p>Marketing Internship Mentor</p>
                  <p>Swarthmore College</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/rita-franov1.jpg" data-src="../assets/img/rita-franov2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Rita Franov</h5>
                  <p>Marketing Internship Manager</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/nathan-bao1.jpg" data-src="../assets/img/nathan-bao2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Nathan Bao</h5>
                  <p>Marketing Internship Mentor</p>
                  <p>American University</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/sarina-price1.jpg" data-src="../assets/img/sarina-price2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Sarina Price</h5>
                  <p>Marketing Internship Mentor</p>
                  <p>Texas Christian University</p>
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
                  <h3>Get Ready to Soar with Your Fellow Interns.</h3>

                  <p>Introducing your Summer 2019 Class! Each of you brings a unique set of skills, background, and perspectives.</p>
                </div>
          </div>


          <div class="cell small-12 medium-6 large-8">
            <div class="grid-x align-stretch">
              <div class="cell large-3 medium-6 small-4">
                <div class="intern" style="background-image: url(../../static/max-sickinger.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <name>Max Sickinger</name>
                      <school>Claremont McKenna College</school>
                      <p>Mentor:<br>
                        Chip Woerner
                      </p>

                      <p>Department:<br>
                        Corporate Marketing
                      </p>
                      <p>
                        Fun fact: I’m Swiss but speak Spanish!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/anne-pacholski.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <name>Anne Pacholski</name>
                      <school>Indiana University</school>
                      <p>Mentor:<br>
                        Sonang Kim
                      </p>

                      <p>Department:<br>
                        Global Customer Programs (GCP)
                      </p>
                      <p>
                        Fun fact: I won a car my freshman year of high school in a raffle!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/parker-carroway.jpg)">
                  <div class="intern-info brand-blue">
                    <div class="details">
                      <name>Parker Carroway</name>
                      <school>University of Oklahoma</school>
                      <p>Mentor:<br>
                        Julian Edwards
                      </p>

                      <p>Department:<br>
                        Event Marketing
                      </p>
                      <p>
                        Fun fact: I’m obsessed with discovering music!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/danny-weinreb.jpg)">
                  <div class="intern-info brand-darkblue">
                    <div class="details">
                      <name>Danny Weinreb</name>
                      <school>Indiana University</school>
                      <p>Mentor:<br>
                        Lisa Marcyes
                      </p>

                      <p>Department:<br>
                        Social Media
                      </p>
                      <p>
                        Fun fact: I love sports!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/ilana-basman.jpg)">
                  <div class="intern-info brand-green">
                    <div class="details">
                      <name>Ilana Basman</name>
                      <school>Boston University</school>
                      <p>Mentor:<br>
                        Sarita Kincaid and Dennis MacNeil
                      </p>

                      <p>Department:<br>
                        Analyst Relations
                      </p>
                      <p>
                        Fun fact: I’ve visited 32 countries!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/kenan-kitchen.jpg)">
                  <div class="intern-info brand-darkgreen">
                    <div class="details">
                      <name>Kenan Kitchen</name>
                      <school>Georgetown University</school>
                      <p>Mentor:<br>
                        Jason Williamson
                      </p>

                      <p>Department:<br>
                        Startup Ecosystem
                      </p>
                      <p>
                        Fun fact: I have been to 27 countries!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder6.jpg)">
                  <div class="intern-info brand-darkburgundy">
                    <div class="details">
                      <div class="update">
						Come back soon to meet
						more fellow interns!
					  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 small-4">
                <div class="intern" style="background-image: url(../../static/placeholder4.jpg)">
                  <div class="intern-info brand-burgundy">
                    <div class="details">
                      <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
              <div class="intern-info brand-darkorange">
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
            <div class="intern" style="background-image: url(../../static/placeholder5.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder3.jpg)">
              <div class="intern-info brand-green">
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
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4">
            <div class="quote brand-burgundy">
              <div class="quote-info">
                <div class="details">
                 <p>Be polite and follow up as much as possible. As an intern, you will be remembered for not only the work you do, but also the type of person you are.</p>
                  <p><strong>Travis Pillon</strong><br>
                    Intern Class of 2015</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder4.jpg)">
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
            <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
              <div class="intern-info brand-green">
                <div class="details">
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder6.jpg)">
              <div class="intern-info brand-darkgreen">
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
            <div class="intern" style="background-image: url(../../static/placeholder5.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder3.jpg)">
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
            <div class="intern" style="background-image: url(../../static/placeholder4.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-6">
            <div class="quote brand-green">
              <div class="quote-info">
                <div class="details">
                  <p>Don’t be afraid to ask questions. This is the time to learn, so find someone that can help you grow. Step out of your comfort zone and embrace projects that will teach you something new. Most importantly, remember that the mentors care about making sure you succeed and have the best experience possible.</p>
                  <p><strong>Alicia Breyer</strong><br>
                    Intern Class of 2017</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder2.jpg)">
              <div class="intern-info brand-darkgreen">
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
            <div class="intern" style="background-image: url(../../static/placeholder6.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                  <div class="update">
                    Who’s next? Meet more
					of your class soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-2">
            <div class="intern" style="background-image: url(../../static/placeholder1.jpg)">
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



        </div>
      </div>
    </section>



    <section class="team-footer" id="mentors">
        <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
        <h2>Meet Your Mentors</h2>
        <p>Your mentors have the knowledge and experience to share and are committed to making your intern experience the best ever.</p>
        </div>
        </div>
          <div class="mentor-group">

            <slick ref="slick" :options="slickOptions">

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/travis-ohara.jpg">
                  <div class="card-section">
                    <h5>Travis O’Hara</h5>
                    <p>Global Events</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/julian-edwards.jpg">
                  <div class="card-section">
                    <h5>Julian Edwards</h5>
                    <p>Events Marketing</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/carol-sato.jpg">
                  <div class="card-section">
                    <h5>Carol Sato</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/celina-bertallee.jpg">
                  <div class="card-section">
                    <h5>Celina Bertallee</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/lisa-marcyes.jpg">
                  <div class="card-section">
                    <h5>Lisa Marcyes</h5>
                    <p>Social Marketing</p>
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
    .card-section {
      min-height:160px;
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
