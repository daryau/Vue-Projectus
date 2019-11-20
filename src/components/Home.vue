<template>
    <div class="cnt-main">
        <div class="wrap show-burger">

            <div class="wrap__left-menu">
                <div class="wrap__left-menu__header">
                    <a href="#" class="wrap__left-menu__header_logo uppercase f16">{{companyName}}</a>
                    <div class="search-form"></div>
                </div>

                <div class="wrap__left-menu__profile">
                    <div class="wrap--profile-info">
                        <div class="wrap--profile-info__photo"></div>
                        <div class="wrap--profile-info__text">
                            <span class="wrap--profile-info__text_name f14 block">{{user.userFullName}}</span>
                            <span class="wrap--profile-info__text_type f12 block">{{user.kindOfPositiom}}</span>
                        </div>
                    </div>
                    <ul class="wrap_left-menu__profile__more">
                        <li class="one-dot"></li>
                        <li class="one-dot"></li>
                        <li class="one-dot"></li>
                    </ul>
                </div>

                <div class="wrap__left-menu__tasks">
                    <div v-on:click="closeTasks" class="wrap__left-menu__tasks_completed-tasks">
                        <span class="wrap--tasks_completed-tasks__count f20 block" id="completedTasks">{{tasks.countCompleted}}</span>
                        <span class="wrap--tasks_completed-tasks__title f12 block">Completed Tasks</span>
                    </div>
                    <div class="wrap__left-menu__tasks_open-tasks">
                        <span class="wrap--tasks_open-tasks__count f20 block" id="openTasks">{{tasks.countOpen}}</span>
                        <span class="wrap--tasks_open-tasks__title f12 block">Open Tasks</span>
                    </div>
                </div>

                <ul class="wrap--left-menu__menu-list">
                    <li class="wrap--left-menu__menu-list_item uppercase f12">Menu </li>
                    <li class="wrap--left-menu__menu-list_item">
                        <a href="#" class="wrap--left-menu__menu-list_item__link f14">Home</a>
                    </li>
                    <li class="wrap--left-menu__menu-list_item">
                        <a href="#" class="wrap--left-menu__menu-list_item__link f14">My Tasks</a>
                    </li>
                    <li class="wrap--left-menu__menu-list_item">
                        <a href="#" class="wrap--left-menu__menu-list_item__link f14">Notifications
                            <span class="count f13" id="notifications">{{countNotifications}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

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
                        <router-link class="f16 menu-list__item__link" exact to="/Tasks" active-class="is-active">Tasks</router-link>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Kanban</a>
                    </li>
                    <li class="menu-list__item">
                        <router-link class="f16 menu-list__item__link" to="/Activity" active-class="is-active">Activity</router-link>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Calendar</a>
                    </li>
                    <li class="menu-list__item">
                        <a href="#" class="f16 menu-list__item__link">Files</a>
                    </li>
                </ul>
            </nav>
            <div class="content-body">
                <router-view/>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      companyName: "Projectus",
      user: {
        userFullName: "Jean Gonzales",
        kindOfPositiom: "Product Owner"
      },

      tasks: {
          countCompleted: 372,
          countOpen: 11
      },

      countNotifications: 3,
      titleTasks: 'Website Redesign'
    };
  },

    methods: {
        closeTasks() {
            if(confirm("Are you sure you want to change the number of tasks?") == true) {
                if(this.tasks.countOpen != 0) { this.tasks.countCompleted++; this.tasks.countOpen--; }
                else {alert("Sorry! You don't have open tasks.");}
            }
        },
    }

};
</script>
