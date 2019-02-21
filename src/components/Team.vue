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
        <li><a href="#meet">Meet the Interns</a></li>
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







    <section class="team-footer">
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
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 700,
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
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 700,
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
    @include breakpoint(medium down) {
      background-position: bottom center;
      background-size: cover;
    }
  }

  .team-footer {
    background-image: url('../assets/img/team-footer-bg.svg');
    background-size: cover;
    background-repeat:no-repeat;
    background-position: bottom right;
    position:relative;
    padding-bottom:280px;
    background-color: #eeefef;
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(medium down) {
      background-position: bottom right;
      background-size: cover;
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
  }


  .x1 {
    animation: movecloudsshort 50s linear infinite;
    width:195px;
    height:auto;
    top:8%;
    left:15%;
    @include breakpoint(large down) {
      width:125px;
    }
  }

  .x2 {
    animation: moveclouds 60s linear infinite;
    width:300px;
    height:auto;
    top:20%;
    left:70%;
    @include breakpoint(large down) {
      width:265px;
    }
  }

  .x3 {
    animation: moveclouds 60s linear infinite;
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
    }
    p:nth-of-type(2) {
      margin-bottom:0;
      margin-top:10px;
      font-size:15px;
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




</style>
