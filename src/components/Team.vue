<template>
  <div class="resources-page">
    <div class="callout">
      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">Meet your Team</h1>
        <div class="callout-copy">
          <p>At Oracle we win as a team. Here you'll find your winning team,<br class="hide-for-small-only"> from mentors to fellow interns. Get ready to fly with the best. </p>
        </div>
      </div>
    </div>

    <div class="subnav">
      <ul id="team-nav" class="menu align-center" data-smooth-scroll>
        <li><a href="#general">General Resources</a></li>
        <li><a href="#marketing">Marketing, Brand & Editorial Resources</a></li>
        <li><a href="#transportation">Transportation</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </div>




    <section class="team-footer">
      <div class="section-callout text-center">
        <h2>Meet Your Mentors</h2>
        <p>Our mentors have a wealth of knowledge and experience to share and are committed to making this year’s intern experience the best ever.</p>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'team',
  mounted() {
    this.scroll = new Foundation.SmoothScroll($('#resources-nav'));
  },
  data() {
    return {
      msg: '',
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
    padding-bottom:480px;
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

</style>
