<template>
  <div class="grid-container">
    <div class="grid-x text-center">
      <div class="cell">
        <h1>{{ msg }}</h1>
        <a class="button secondary call-button" data-toggle="offCanvas"><i class="icon-puzzle"></i>JS Components</a>
        <a class="button secondary call-button" href="https://github.com/vue-foundation/vue-foundation"><i class="icon-github-circled"></i>Source</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  data() {
    return {
      msg: 'Meet the Team',
    };
  },
};
</script>


<style lang="scss" scoped>

  .image {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }


</style>
