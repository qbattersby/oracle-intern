<template>
  <div id="app">
    <div class="grid-container full">
      <header class="top-bar grid-x">
        <div class="cell medium-12 large-4">
              <router-link to="/" class="logo" v-on:click.native="seen = false"><img src="./assets/img/logo.svg" alt="Oracle Intern Experience"></router-link>
              <button class="menu-icon hide-for-large" type="button" v-on:click="seen = !seen"></button>
        </div>
        <div class="cell medium-12 large-8">
          <ul class="menu align-right show-for-large vertical medium-horizontal">
            <!--<li><router-link to="/meet-the-team" exact>Meet the Team</router-link></li>-->
            <li><router-link to="/about-oracle" exact>About Oracle</router-link></li>
            <!--<li><router-link to="/achieve-success" exact>Achieve Success</router-link></li>-->
            <!--<li><router-link to="/helpful-resources" exact>Helpful Resources</router-link></li>-->
          </ul>
          <ul class="menu vertical text-center hide-for-large mobile-menu" v-if="seen">
            <!--<li><router-link to="/meet-the-team" exact v-on:click.native="seen = !seen">Meet the Team</router-link></li>-->
            <li><router-link to="/about-oracle" exact v-on:click.native="seen = !seen">About Oracle</router-link></li>
            <!--<li><router-link to="/achieve-success" exact v-on:click.native="seen = !seen">Achieve Success</router-link></li>-->
            <!--<li><router-link to="/helpful-resources" exact v-on:click.native="seen = !seen">Helpful Resources</router-link></li>-->
          </ul>
        </div>
      </header>
      <main class="content-wrapper">
        <transition name="page" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>

      <footer>
        <div class="grid-x">
          <div class="cell shrink small-12 medium-3">
            &copy; Oracle {{ new Date().getFullYear() }}
          </div>
          <div class="cell auto small-12 medium-9">

            <ul class="menu footer-menu align-right">
              <li><a href="https://www.oracle.com/corporate/#info">About Oracle</a></li>
              <li><a href="https://www.oracle.com/corporate/contact/">Contact Us</a></li>
              <li><a href="https://www.oracle.com/legal/privacy/">Terms of Use and Privacy</a></li>
              <li><div id="teconsent"></div></li>
              <li><a href="https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html#12">Ad Choices</a></li>
            </ul>

          </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        seen: false,
      };
    },
    mounted() {
      const dtmScript = document.createElement('script');
      dtmScript.setAttribute('src', 'https://www.oracle.com/asset/web/dtm/dtm-vendor.js');
      dtmScript.setAttribute('language', 'JavaScript');
      document.head.appendChild(dtmScript);


      const dtmcustomScript = document.createElement('script');
      const code = "var footer_type = 'custom';";
      dtmcustomScript.setAttribute('type', 'text/javascript');
      dtmcustomScript.appendChild(document.createTextNode(code));
      document.head.appendChild(dtmcustomScript);
    },
  };
</script>



<style lang="scss">
  @import './styles/global';

  a:focus {
    outline: none;
  }

  .logo img {
    width:300px;
    height:auto;
  }

  .top-bar {
    padding:0 2rem;
    position:fixed;
    z-index:9999;
    width:100%;
    .cell:first-of-type {
      position:relative;
    }
    @include breakpoint (medium down) {
      padding:0;
      flex-wrap: wrap;
    }
    a {
      color: $dark-gray;
      font-weight:normal;
      transition: 0.2s ease all;
      &:hover {
        color: lighten($dark-gray, 15%);
      }
    }
  }

  .top-bar,.top-bar ul {
    background-color: #fff;
    font-size:16px;
  }

  footer {
    padding: 1rem 1.3rem;
    font-size:14px;
    @include breakpoint(small only) {

      .footer-menu {
        justify-content: normal;
        line-height:1.5;
        width:90%;
        margin-left:-0.3rem;
        li a {
         margin-top:3px;
        }
      }
    }
  }

  .silentbox-single {
    position: relative;
    display: flex;
    width: 100%;
    cursor: pointer;
    &:hover {
      &:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110.63 110.63'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23003B4D;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Ebtn-play%3C/title%3E%3Ccircle class='a' cx='55.32' cy='55.32' r='55.32'/%3E%3Cpolygon class='b' points='45.18 71.85 71.95 55.32 45.18 38.78 45.18 71.85'/%3E%3C/svg%3E%0A");
      }
    }
    &:before {
      position:absolute;
      z-index:99;
      display:block;
      content:'';
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110.63 110.63'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%2300758F;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Ebtn-play%3C/title%3E%3Ccircle class='a' cx='55.32' cy='55.32' r='55.32'/%3E%3Cpolygon class='b' points='45.18 71.85 71.95 55.32 45.18 38.78 45.18 71.85'/%3E%3C/svg%3E");
      background-position:top left;
      background-size:contain;
      width:115px;
      height:115px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transition:all 0.2s ease;
    }
    img {
      width: 100%;
      height:auto;
    }
  }

  .page-enter-active {
    transition: opacity 0.5s;
  }
  .page-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .page-enter {
    opacity:0;
  }
  .page-enter, .page-leave-to {
    transform: translateX(-100%);
  }

  .menu-icon {
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    right:15px;
  }

    .menu-icon::after {
      background:black;
      box-shadow: 0 7px 0 black, 0 14px 0 black;
    }

  .top-bar ul.mobile-menu {
    background:#f9f9f9;
    padding: 30px 0;
  }

  .footer-menu {
    margin-top:5px;
    margin-bottom:0;
    line-height:1.5;
    a {
      color: $body-font-color;
      padding:0 0.3rem;
      border-right: 1px solid $body-font-color;
    }
    li:last-of-type a {
      border-right:none;
    }
  }


</style>
