<template>
  <div class="about">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>

      <svg version="1.1" id="bird" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 126.6 72.5" style="enable-background:new 0 0 126.6 72.5;" xml:space="preserve">
        <g id="body">
          <path fill="#42AA92" d="M112.6,8.8c2.3,6.8-1.4,14.1-8.1,16.4S90.4,23.8,88.1,17C85.8,10.3,89.4,3,96.2,0.7c0,0,0,0,0,0
            C103-1.6,110.3,2,112.6,8.8"/>
          <path fill="#42AA92" d="M22,35.1c10.7,17,33.7,24.7,55.6,17.4s42-30.6,33.6-47.1L22,35.1z"/>
          <polygon fill="#42AA92" points="1.2,54.5 24.6,35.6 0,36.1 	"/>
          <polygon fill="#403A3B" points="111.1,6.2 113,11.8 126.6,5.4 	"/>
          <polygon fill="#338D7A" points="0.7,46.6 1.3,54.3 22,37.7 	"/>
          <path fill="#403A3B" d="M100.7,10c0.8,1.1,2.3,1.5,3.4,0.7c1.1-0.8,1.5-2.3,0.7-3.4c-0.7-1.1-2.3-1.4-3.4-0.7
            C100.3,7.3,100,8.8,100.7,10C100.7,10,100.7,10,100.7,10"/>
        </g>
                <path id="wing" fill="#85CDB0" d="M34.8,65.6c6.4,2.5,13,4.5,19.7,6c3.1,0.5,6.2,0.8,9.3,0.9c19.8-0.2,44.7-17,32.5-43.8
          c-2.5-5-5.4-9.8-8.6-14.3L34.8,65.6z"/>
      </svg>

      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">About Oracle</h1>
          <div class="callout-copy">
            <p>So what exactly does Oracle do? As the only full-stack cloud provider in the world, we empower businesses of all sizes on their journey to digital transformation.</p>
          </div>
        </div>
      </div>


    <section class="dark-bg">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12 text-center">
            <h2>Work with Global Brands</h2>
            <p>At Oracle, you'll have the opportunity to help us power some of the world's largest and most recognizable brands. 437,000 customers in 175 countries worldwide trust Oracle to drive innovation for their businesses.</p>
          </div>
        </div>


        <div id="orbit" class="orbit" role="region" aria-label="Brands" data-orbit data-pause-on-hover="false">
          <ul class="orbit-container">
            <li class="is-active orbit-slide">
              <div class="brands grid-x grid-margin-x small-up-2 medium-up-3 large-up-4 align-center">
                <div class="cell">
                    <img src="../assets/img/fedex.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/nike.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/sony.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/starbucks.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/dropbox.svg">
                </div>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </section>

    <section class="gray-bg">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12 text-center">
            <h2>Scale and Innovation</h2>
            <p>Oracle is the #1 provider of business software in the world. Our Cloud redefines how businesses modernize, innovate, and compete in a digital world. We deliver innovative and integrated cloud services that allow users and developers to build, deploy, and manage workloads seamlessly—in the cloud or on-premise.</p>
          </div>
        </div>


        <div class="stats grid-x grid-margin-x align-stretch">

          <div class="cell medium-6 box-customers text-center">
            <div class="box-inner">
              <img src="../assets/img/globe.svg">
              <h3>437,000</h3>
              <p>Customers in <strong>175 <br>countries</strong></p>
            </div>
          </div>


          <div class="cell medium-6">
            <div class="grid-x grid-margin-x align-stretch">
              <div class="cell medium-6 box box-employees">
                <div class="box-inner">
                  <img src="../assets/img/person.svg">
                  <h3>137,000+</h3>
                  <p>Employees</p>
                </div>
              </div>
              <div class="cell medium-6 box box-nine">
                <div class="box-inner">

                  <h3>#9</h3>
                  <p>In LinkedIn’s 50<br>
                    Top Companies<br>
                    Where the US Wants<br>
                    To Work Now 2018</p>
                </div>
              </div>
              <div class="cell medium-6 box box-students">
                <div class="box-inner">
                  <h3>3.5M<br>
                    Students</h3>
                  <p>Supported annually<br>
                    in 120 countries<br>
					through the Oracle<br>
					Education Foundation</p>
                </div>
              </div>
              <div class="cell medium-6 box box-patents">
                <div class="box-inner">
                  <img src="../assets/img/patents.svg">
                  <h3>17,000+</h3>
                  <p>Patents worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>


  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: 'About Oracle',
    };
  },
  mounted() {
    this.orbit = new Foundation.Orbit($('#orbit'), {
      // These options can be declarative using the data attributes
      timerDelay: 3000,
      animInFromLeft: 'fade-in',
      animInFromRight: 'fade-in',
      animOutToLeft: 'fade-out',
      animOutToRight: 'fade-out',


    });
  },
  destroyed() {
    this.orbit.destroy();
  },
};
</script>


<style lang="scss" scoped>


  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .callout {
    background-image: url('../assets/img/about-bg.svg');
    background-size: cover;
    background-position: center right;
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(medium down) {
      background-position: bottom center;
      background-size: cover;
    }
  }

  .callout-content {
    margin-top:27vh;
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay: 0.5s;
    @include breakpoint(small only) {
      margin-top:10vh;
    }
  }

  #bird {
    position:absolute;
    top:23vh;
    animation: flyby 40s linear infinite;
    @include breakpoint(small only) {
      top:20vh;
      animation: flyby 20s linear infinite;
    }
  }

  .x1, .x2 {
    animation: unset;
  }

  .x3 {
    animation: unset;
    width:142px;
    height:auto;
    bottom:25%;
    left:25%;
  }

  .brands {
    margin-top:50px;
    .cell {
      background: rgba(0,117,143,0.2);
      height:130px;
      @include breakpoint(small) {
        height:100px;
      }
      margin-bottom:20px;
      display: flex;
      justify-content: center; /* align horizontal */
      align-items: center; /* align vertical */
      img {
        max-height:50px;
        @include breakpoint(small) {
         max-height:30px;
        }
      }
    }
  }

  .stats {
    margin-top:50px;
  }

  .box-customers {
    background: #942645;
    color:white;
    height:580px;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
    margin-bottom:20px;
    @include breakpoint(small only) {
      height:400px;
    }
    img {
      width:50%;
      height:auto;
      margin-bottom:20px;
    }
    h3 {
      font-size: 60px;
      font-weight:900;
      color: #db7b9d;
      margin-bottom:0;
    }
    p {
      font-size:32px;
      line-height:36px;
    }
  }
  .box {
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
    text-align: center;
    margin-bottom:20px;
    height:280px;
    img {
      width:40%;
      height:auto;
      margin-bottom:20px;
    }
    h3 {
      font-size: 36px;
      font-weight:900;
      margin-bottom:10px;
      line-height:38px;
    }
    p {
      font-size:24px;
      line-height:26px;
    }
  }
  .box-employees {
    background: $tertiary-color;
    color:white;
    h3 {
      color: $secondary-color;
    }
  }
  .box-nine {
    background: #f29111;
    color:white;
    h3 {
      color: #8a331d;
    }
  }
  .box-students {
    background: #3a913f;
    color:white;
    h3 {
      color: #004f35;
    }
  }
  .box-patents {
    background: $secondary-color;
    color:white;
    h3 {
      color: $tertiary-color;
    }
  }


</style>
