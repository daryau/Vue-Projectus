<template lang="pug">
    .files-wrap
      .file
        .file-header
          .title
            .name {{name}}
            .count
              | 4
              span.count__span files
        .file-content
            .title Files
            .card
                .document
                    .document-chamfer
                    .document-corner
                .title-document.dflex
                    h2 File
                    .upload
                    .file-size 1.3MB
            .card
                .document
                    .document-chamfer
                    .document-corner
                .title-document.dflex
                    h2 File
                    .upload
                    .file-size 1.3MB

            .card
                .document
                    .document-chamfer
                    .document-corner
                .title-document.dflex
                    h2 File
                    .upload
                    .file-size 1.3MB

            .card
                .document
                    .document-chamfer
                    .document-corner
                .title-document.dflex
                    h2 File
                    .upload
                    .file-size 1.3MB

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'files',
})
export default class Files extends Vue {
    name: string = 'Jean';
}
</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $lg-purple: #e7e6ff;
    $purple: #708fff;
    $blue: #5dacff;
    $gray: #c2c2c2;
    $red: #f088a0;
    $orange: #ffc200;
    .files-wrap {
        width: 730px;
        margin: auto;
        transition: all .5s ease-in-out;
        box-sizing: border-box;
        padding: 50px 0;
        border-radius: 8px;
        height: 100%;
        background: rgba(248,247,255,1);
        background: linear-gradient(to bottom, rgba(248,247,255,1) 0%,
        rgba(231,230,255,1) 59%, rgba(231,230,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#f8f7ff', endColorstr='#e7e6ff', GradientType=0 );
        .file {
            margin-top: 50px;
            border-radius: 0 55px 0 55px;
            width: 300px;
            margin: auto;
            -webkit-box-shadow: 1px 4px 30px -1px rgba(150,144,235,0.78);
            -moz-box-shadow: 1px 4px 30px -1px rgba(150,144,235,0.78);
            box-shadow: 1px 4px 30px -1px rgba(150,144,235,0.78);
            transition: all .5s ease-in-out;
                &-header {
                    background: url('../assets/images/profile-photo.jpg') no-repeat;
                    background-size: cover;
                    border-radius: 3px;
                    height: 140px;
                    position: relative;
                    color: $white;
                    border-radius: 0 55px 0 0;
                    &:before {
                        content: '';
                        position: absolute;
                        background: url('../assets/images/wave.png') no-repeat;
                        background-size: cover;
                        width: 100%;
                        background-size: cover;
                        width: 100%;
                        height: 40px;
                        right: 0;
                        left: 0;
                        bottom: 0;
                    }
                    .title {
                        padding: 30px 10px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .name {
                            position: relative;
                            font-size: 18px;
                            &:before {
                                content: 'Happy to share';
                                position: absolute;
                                color: $white;
                                opacity: .6;
                                width: 100%;
                                top: 25px;
                                right: 0;
                                bottom: 0;
                                left: 0;
                                font-size: 8px;
                            }
                        }
                        .count {
                            font-size: 20px;
                            &__span {
                                display: inline-block;
                                font-size: 10px;
                                margin-left: 5px;
                            }
                        }
                    }
                }
                &-content {
                    box-sizing: border-box;
                    background: $white;
                    padding: 15px;
                    border-radius: 3px;
                    border-radius: 0 0 0 55px;
                    .title {
                        display: flex;
                        align-items: center;
                        color: $purple;
                        position: relative;
                        padding: 5px 10px 15px;
                        &:before {
                            content: '';
                            position: absolute;
                            width: 5px;
                            height: 5px;
                            border-radius: 50px;
                            background: $purple;
                            left: 0;
                        }
                    }
                    .card {
                        padding: 15px;
                        box-sizing: border-box;
                        display: flex;
                        cursor: pointer;
                        transition: all 0.5s ease-in-out;
                        margin-bottom: 10px;
                            .document {
                                background: linear-gradient(138.6789deg, #81d5ee 29%, #6eb4f7 64%);
                                border-radius: 3px;
                                height: 45px;
                                position: relative;
                                width: 50px;
                                margin-right: 15px;

                                   &:before {
                                    content: "JPG";
                                    position: absolute;
                                    color: $white;
                                    top: 19px;
                                    right: 13px;
                                    font-size: 10px;
                                   }

                                    &-chamfer {
                                    width: 0;
                                    height: 0;
                                    border-style: solid;
                                    border-width: 0 20px 20px 0;
                                    border-color: transparent $white transparent transparent;
                                    position: absolute;
                                    right: -3px;
                                    top: -3px;
                                    z-index: 3;
                                    }
                                    &-corner {
                                        width: 0;
                                        height: 0;
                                        border-style: solid;
                                        border-width: 14px 0 0 14px;
                                        border-color: transparent transparent transparent $blue;
                                        position: absolute;
                                        border-radius: 3px;
                                        right: 0;
                                        z-index: 2;
                                        -moz-box-shadow:    -1px 1px 4px 0px rgba(0,0,0,0.20);
                                        -webkit-box-shadow: -1px 1px 4px 0px rgba(0,0,0,0.20);
                                        box-shadow:         -1px 1px 4px 0px rgba(0,0,0,0.20);
                                    }
                                }
                                .title-document {
                                    box-sizing: border-box;
                                    width: 100%;
                                    color: $purple;
                                    .upload {
                                        position: relative;
                                        margin-top: 5px;
                                        width: 100%;
                                        height: 2px;
                                        background: -moz-linear-gradient(-45deg,
                                        rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                        background: -webkit-gradient(left top, right bottom,
                                        color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(
                                            254,182,69,1)));
                                        background: -webkit-linear-gradient(-45deg,
                                        rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                        background: -o-linear-gradient(-45deg,
                                        rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                        background: -ms-linear-gradient(-45deg,
                                        rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                        background: -ms-linear-gradient(-45deg,
                                         rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                        background: linear-gradient(135deg,
                                        rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
                                       filter: progid:DXImageTransform.Microsoft.gradient(
                                           startColorstr='#f1e767', endColorstr='#feb645',
                                           GradientType=1 );

                                           &:before {
                                               content: '100%';
                                               position: absolute;
                                               top: -16px;
                                               right: 0;
                                               font-size: 10px;
                                               color: $gray;
                                           }
                                    }
                                    .file-size {
                                        color: $gray;
                                        font-size: 10px;
                                        margin-top: 10px;
                                    }
                                }
                        &:hover {
                            box-shadow: 1px 4px 10px -1px rgba(150, 144, 235, 0.6);
                            border-radius: 0 25px 0 25px;
                        }
                    }
                    .card:nth-child(3) {
                      .document {
                        background:linear-gradient(138.6789deg, #fff8dd 22%, #feb645 64%);
                        &-corner {border-color: transparent transparent transparent $orange;}
                      }
                    }
                    .card:nth-child(4) {
                      .document {
                        background:linear-gradient(138.6789deg, #d05c77 29%, #ff7f50 64%);
                        &-corner {border-color: transparent transparent transparent $red;}
                      }
                    }
                    .card:nth-child(5) {
                      .document {
                        background:linear-gradient(138.6789deg,rgba(150,144,235,0.78) 61%,
                        #e7e6ff 83%);
                        &-corner {border-color: transparent transparent transparent $lg-purple;}
                      }
                    }
                }
        }
    }
    @media screen and (max-width: 1055px) {
        .files-wrap {
            width: 100%;
        }
    }
    @media screen and (max-width: 410px) {
        .files-wrap {
            .file { width: 90%; }
        }
    }
</style>
