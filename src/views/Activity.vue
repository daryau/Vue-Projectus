<template>
    <div class="wrapper-post">    
        <span class="wrapper-post__day block f14 uppercase">{{activityDate}}</span>
        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{activityItem.description}}</span>
            <span class="wrapper-post__item__time f14"> {{activityItem.time}}PM</span>
        </div>

        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{activityItemTwo.description}}</span>
            <span class="wrapper-post__item__time f14">{{activityItemTwo.time}} PM</span>
        </div>

        <div class="wrapper-post__item">
            <span class="wrapper-post__item__text f15 block">{{activityItemTwo.comment}}</span>
        </div>

        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{activityItemThird.description}}</span>
            <span class="wrapper-post__item__time f14">{{activityItemThird.time}} PM</span>
        </div>

        <div class="wrapper-post__item">
            <div class="wrapper-post__item__photos">
                <div class="wrapper-post__item__photos_img"></div>
                <div class="wrapper-post__item__photos_img"></div>
                <div class="wrapper-post__item__photos_img"></div>
                <div class="wrapper-post__item__photos_img"></div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Activity',
    data() {
        return {
            activityDate: 'Today',
            activityItem: 
            {
                icon: 'wrapper-post__item_icon',
                description: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users', 
                time: '8:40'
            },

             activityItemTwo:{
                description: 'Emilee Simchenko commented on Account for teams and personal in bottom style', 
                time: '7:32', 
                comment:'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'
                },
             activityItemThird:{
                description: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects', 
                time: '6:02'
            },
        };
    }
};
</script>
