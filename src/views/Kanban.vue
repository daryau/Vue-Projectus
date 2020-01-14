<template lang="pug">
  .kanban
    h1.kanban-title.f25.fw700 Kanban
    span.kanban-text.block.f18.fw700 Your board
    .kanban-list
      .list
        .list-header
          h2.f16.fw600 ToDo
        .list-cards
          span.list-card Text
      .list
        .list-header
          h2.f16.fw600 In Progress
        .list-cards
          span.list-card Text
      .list
        .list-header
          h2.f16.fw600 Done
        .list-cards
          span.list-card Text
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
$white: #ffffff;
$white-light: #fbfbfb;
$gray: #ebecf0;
$light-gray: #dedede;
$dark-blue: #172b4d;
    .kanban {
        width: 730px;
        margin: auto;
        background: url('../assets/images/bg-kanban.jpg') no-repeat;
        background-size: cover;
        border-radius: 10px;
        height: 100vh;
        &-title {
            font-family: 'Satisfy', cursive;
            color: $white-light;
            border-radius: 10px 10px 0 0;
            background: rgba(0,0,0,.32);
            padding: 10px 4px 10px 8px;
            transition: padding .1s ease-in;
            text-align: center;
            text-shadow: 5px 5px 3px $dark-blue;
        }
        &-text {
            background: linear-gradient(180deg,hsla(0,0%,100%,.24) 0,
            hsla(0,0%,100%,.24) 48px,
            hsla(0,0%,100%,0) 80px,hsla(0,0%,100%,0));
            color: $dark-blue;
            padding: 12px;
            opacity: 0.9;
        }
        &-list {
            background: linear-gradient(180deg,hsla(0,0%,100%,.24) 0,
            hsla(0,0%,100%,.24) 48px,
            hsla(0,0%,100%,0) 80px,hsla(0,0%,100%,0));
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 5px;
            box-sizing: border-box;
            .list {
                -webkit-box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                -moz-box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                width: 30%;
                background: rgba(0, 0, 0, 0.32);
                box-shadow: 0 0 10px 5px $gray;
                border-radius: 5px;
                box-sizing: border-box;
                max-height: 100%;
                white-space: normal;
                margin: 5px 10px;
                &-header {
                    color: $white;
                    text-shadow: 1px 1px 2px $dark-blue;
                    opacity: 0.9;
                    padding: 10px 8px;
                    min-height: 20px;
                }
                &-cards {
                    padding: 6px 8px 20px ;
                    .list-card {
                        display: block;
                        padding: 6px 8px 9px;
                        margin: 0 0 5px;
                        background-color: $white;
                        box-shadow: 0 1px 0 rgba(9,30,66,.25);
                        color: $dark-blue;
                        word-wrap: break-word;
                        border-radius: 3px;
                    }
                }

            }
        }
    }
    @media screen and (max-width: 1060px) {
        .kanban {
            width: 100%;
        }
    }
    @media screen and (max-width: 669px) {
        .kanban{
            &-list {
                .list {
                    width: 70%;
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
        .kanban{
            &-list {
                .list {
                    width: 90%;
                }
            }
        }
    }
</style>
