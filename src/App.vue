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
            <li><router-link to="/meet-the-team" exact>Meet the Team</router-link></li>
            <li><router-link to="/about-oracle" exact>About Oracle</router-link></li>
            <li><router-link to="/achieve-success" exact>Achieve Success</router-link></li>
            <li><router-link to="/helpful-resources" exact>Helpful Resources</router-link></li>
          </ul>
          <ul class="menu vertical text-center hide-for-large mobile-menu" v-if="seen">
            <li><router-link to="/meet-the-team" exact v-on:click.native="seen = !seen">Meet the Team</router-link></li>
            <li><router-link to="/about-oracle" exact v-on:click.native="seen = !seen">About Oracle</router-link></li>
            <li><router-link to="/achieve-success" exact v-on:click.native="seen = !seen">Achieve Success</router-link></li>
            <li><router-link to="/helpful-resources" exact v-on:click.native="seen = !seen">Helpful Resources</router-link></li>
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
          <div class="cell">
            &copy; Oracle {{ new Date().getFullYear() }}
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
  };
</script>



<style lang="scss">
  @import './styles/global';

  // Chrome Reset
  a:focus {
    outline: none;
  }

  .logo img {
    width:300px;
    height:auto;
  }

  .top-bar {
    padding:0 2rem;
    .cell:first-of-type {
      position:relative;
    }
    @include breakpoint (medium down) {
      padding:0;
      flex-wrap: wrap;
    }
    a {
      color: $dark-gray;
      font-weight:500;
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
  }

  .silentbox-single {
    position: relative;
    display: flex;
    width: 100%;
    cursor: pointer;
    &:hover {
      &:before {
        opacity:0.8;
      }
    }
    &:before {
      position:absolute;
      z-index:99;
      display:block;
      content:'';
      background-image: url('assets/img/btn-play.svg');
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


</style>
