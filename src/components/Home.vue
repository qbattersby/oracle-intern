<template>
  <div class="home">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>

      <div class="callout-content grid-container">
        <h1 class="callout-heading text-uppercase">The Sky's The Limit</h1>
        <!-- <img class="main-plane" src="../assets/img/main-plane.svg" alt="Welcome to Team Oracle"> -->
        <Plane :name="$store.state.username"></Plane>

        <div class="grid-x">
          <div class="callout-copy cell medium-7">
            <p>We’re excited about your future here. It’s time to push boundaries, challenge convention, and reach for the clouds.</p>
            <p>Meet your team, hear from past interns, and learn what Oracle is all about. Everything you need is right here! </p>
			<!-- <router-link to="/achieve-success" exact class="button secondary">Take a sneak peek</router-link> -->
          </div>
        </div>
      </div>
    </div>

    <section class="dark-bg">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-middle">
          <div class="cell medium-6 padded-right">
            <h3>Take a Sneak Peek.</h3>
            <p>Check out the video to get a feel for what you can expect this summer.</p>
			      <router-link to="/meet-the-team" exact class="button">Meet the Team</router-link>
          </div>
          <div class="cell medium-6">

            <a class="video-preview" href="?bcid=6011821841001" rel="vbox">
              <img src="../../static/internship-video-poster.jpg">
            </a>

          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
import Plane from './Plane';

export default {
  components: {
    Plane,
  },
  mounted() {
    if (this.$route.params.username) {
      this.$store.commit('setUsername', this.$route.params.username);
    }
  },
};
</script>


<style lang="scss" scoped>

  .main-plane {
    display: inline-block;
    margin-left:-160px;
    margin-top:-80px;
    max-width:100vw;
    width:calc(100% + 300px);
    @include breakpoint(large down) {
      margin-left: -50px;
      margin-top:-40px;
      max-width:100%;
      width:100%;
    }
    @include breakpoint(medium down) {
       margin-top:-20px;

     }
    @include breakpoint(small only) {
      margin-top:-30px;
      max-width:240%;
      width:240%;
      margin-left:-110px;

    }
  }

  .callout-copy, .callout-heading {
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay: 1.4s;
  }

  .callout-content {
    width:100%;
  }


</style>
