<template>
  <div class="">
    <h1 class="text-3xl text-black font-bold">{{title}}</h1>
    <!-- <label class="text-gray-300">{{sub}}</label> -->

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    sub: {
      type: String,
      required: false,
    }
  }
}
</script>

<style>

</style>
