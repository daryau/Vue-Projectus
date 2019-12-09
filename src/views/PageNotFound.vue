<template lang="pug">
    div.notFound
        img.notFound__img(src='../assets/images/bg-error.png' alt='image error')
        div.notFound-text
            h1.fw600 Awww...Don't Cry.
            span.notFound-text__span.block.center.f25.fw500 {{textNotFound}}
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
      textNotFound: 'Coming soon!',
    };
  },
};
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Sulphur+Point:400,500,600&display=swap');    $error:#4c4c4c;
    .notFound {
        background: url('../assets/images/bg-error.jpg') no-repeat;
        background-size: cover;
        padding: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        &__img {
            width: auto;
            height: auto;
        }
        &-text {
            font-family: 'Sulphur Point', sans-serif;
            color: $error;
            margin-top: 25px;
            &__span {
                margin-top: 15px;
                background: linear-gradient(to right, #dd9f3e, #6d01ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>
