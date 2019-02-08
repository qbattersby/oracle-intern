<template>
  <div class="grid-container">
    <div class="grid-x text-center">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'success',
  data() {
    return {
      msg: 'Achieve Success',
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
