<template>
        <div class="content">
            <span id="trigger" class="trigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
            <header class="header">
                <div class="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header-logo">
                    <h1 class="header-logo__title">{{titleTasks}}</h1>
                    <div class="header__dots" id="id1">
                        <ul class="header__dots_cnt">
                            <li class="dot"></li>
                            <li class="dot"></li>
                            <li class="dot"></li>
                        </ul>
                    </div>
                </div>
                <div class="header-share">
                    <div class="header-share-cnt">
                        <div class="header-share-cnt__people"></div>
                        <div class="header-share-cnt__people"></div>
                        <div class="header-share-cnt__people"></div>
                    </div>

                    <div class="header-share-btns">
                        <div class="header-share-btns__btn f14">Share</div>
                        <div class="header-share-btns__btn chat f14">Сhat</div>
                    </div>

                </div>
            </header>
            <nav class="nav">
                <ul class="menu-list">
                    <li class="menu-list__item">
                        <router-link class="f16 menu-list__item__link"
                        exact to="/Tasks" active-class="is-active">
                            Tasks
                        </router-link>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Kanban</a>
                    </li>
                    <li class="menu-list__item">
                        <router-link class="f16 menu-list__item__link" to="/Activity"
                         active-class="is-active">Activity
                        </router-link>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Calendar</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Files</a>
                    </li>
                </ul>
            </nav>
            <TheContent></TheContent>
        </div>
</template>

<script>
import TheContent from './TheContent.vue';

export default {
  name: 'TheHeader',
  components: { TheContent },
  data() {
    return {
      titleTasks: 'Website Redesign',
    };
  },
};
</script>
