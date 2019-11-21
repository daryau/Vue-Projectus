<template>
    <div class="wrapper-post">    
        <span class="wrapper-post__day block f14 uppercase">{{taskDate}}</span>
        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{taskItem.description}}</span>
            <span class="wrapper-post__item__time f14">{{taskItem.time}} AM</span>
        </div>

        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{taskItemTwo.description}}</span>
            <span class="wrapper-post__item__time f14">{{taskItemTwo.time}}PM</span>
        </div>

        <div class="wrapper-post__item">
            <span class="wrapper-post__item__text f15 block">{{taskItemTwo.comment}}</span>
        </div>

        <div class="wrapper-post__item">
            <div class="wrapper-post__item_icon"></div>
            <span class="wrapper-post__item__text f16 block">{{taskItemThird.description}}</span>
            <span class="wrapper-post__item__time f14">{{taskItemThird.time}} PM</span>
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
    name: 'Tasks',
    data() {
        return {
            taskDate: 'Tomorrow',
            taskItem: 
            {
                description: 'Samanta Kwin write and publish an article about our team', 
                time: '5:40'
            },

             taskItemTwo:{
                description: 'Minika Roil commented on Account for teams and personal in bottom style', 
                time: '9:32', 
                comment:'Redesign our website, evaluate and say the timeline'
                },
             taskItemThird:{
                description: 'Samanta Kwin uploaded 4 files on An option to search in current projects or in all projects', 
                time: '2:22'
            },
            

        };
    }
};
</script>
