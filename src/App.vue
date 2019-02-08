<template>
  <div id="app">

    <div class="grid-container full">
      <div class="top-bar grid-x">
        <div class="cell small-6 shrink">
              <router-link to="/" class="logo"><img src="./assets/img/logo.svg" alt="Oracle Intern Experience"></router-link>
        </div>
        <div class="cell small-6 shrink">
          <ul class="menu align-right">
            <li><router-link to="/meet-the-team" exact>Meet the Team</router-link></li>
            <li><router-link to="/about-oracle" exact>About Oracle</router-link></li>
            <li><router-link to="/achieve-success" exact>Achieve Success</router-link></li>
            <li><router-link to="/helpful-resources" exact>Helpful Resources</router-link></li>
          </ul>
        </div>
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  }

  .top-bar,.top-bar ul {
    background-color: #fff;
  }

</style>
