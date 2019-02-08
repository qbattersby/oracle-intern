<template>
  <div class="home">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>

      <div class="callout-content grid-container">
        <h1 class="callout-heading">Get Ready to Soar</h1>
        <img class="main-plane" src="../assets/img/main-plane.svg" alt="Welcome to Oracle">

        <div class="grid-x">
          <div class="callout-copy cell medium-7">
            <p>Welcome to the Oracle Team. It’s time to push boundaries, breakdown tradition and reach the clouds.</p>
            <p>Want to succeed at Oracle? We have everything you need right here. We’re excited about your future.</p>
            <router-link to="/achieve-success" exact class="button large secondary">Achieve Success</router-link>
          </div>
        </div>
      </div>



    </div>

    <div class="grid-container">
      <div class="grid-x text-center">
        <div class="cell">
          <h1>{{ msg }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Home',
    };
  },
};
</script>


<style lang="scss" scoped>

  .callout {
    height: calc(100vh - 55px);
    background:#bde6ee;
  }

  .callout-content {
    z-index:90;
    position:relative;
    margin-top:25vh;
    color: $dark-gray;
    h1 {
      text-transform: uppercase;
      font-weight:bold;
      color: $secondary-color;
    }
    p {
      font-size:22px;
    }
  }

  .main-plane {
    margin-left:-160px;
    margin-top:-80px;
    max-width:calc(100% + 300px);
    width:calc(100% + 300px);
  }


</style>
