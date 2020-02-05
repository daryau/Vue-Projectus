<template lang="pug">
    .wrap
        .wrap__left-menu#sidebar-desktop
            .wrap__left-menu__header
                a.wrap__left-menu__header_logo.uppercase.f16(href='#')
                    | {{companyName}}
                .search-form
            .wrap__left-menu__profile
                .wrap--profile-info
                    .wrap--profile-info__photo
                    .wrap--profile-info__text
                        span.wrap--profile-info__text_name.f14.block
                            | {{userFullName}}
                        span.wrap--profile-info__text_type.f12.block
                            | {{kindOfPositiom}}
                ul.wrap_left-menu__profile__more
                    li.one-dot
                    li.one-dot
                    li.one-dot
            .wrap__left-menu__tasks
                .wrap__left-menu__tasks_completed-tasks(v-on:click='closeTasks')
                    span.wrap--tasks_completed-tasks__count.f20.block
                        | {{tasks.completed}}
                    span.wrap--tasks_completed-tasks__title.f12.block
                        | Completed Tasks
                .wrap__left-menu__tasks_open-tasks(v-on:click='openTasks')
                    span.wrap--tasks_open-tasks__count.f20.block
                        | {{tasks.open}}
                    span.wrap--tasks_open-tasks__title.f12.block Open Tasks
            ul.wrap--left-menu__menu-list
                li.wrap--left-menu__menu-list_item.uppercase.f12 Menu
                li.wrap--left-menu__menu-list_item
                    a.wrap--left-menu__menu-list_item__link.f14(href='#') Home
                li.wrap--left-menu__menu-list_item
                    a.wrap--left-menu__menu-list_item__link.f14(href='#') My Tasks
                li.wrap--left-menu__menu-list_item
                    a.wrap--left-menu__menu-list_item__link.f14(href='#')
                        | Notifications
                        span.count.f13
                            | {{countNotifications}}
        .burger-menu(v-on:click='showBurger =! showBurger')
            span.burger-menu_lines
        transition(name='burger')
            .wrap__left-menu(v-if='showBurger')
                .close-burger(@click="showBurger = false")
                  span
                .wrap__left-menu__header
                    a.wrap__left-menu__header_logo.uppercase.f16(href='#')
                        | {{companyName}}
                    .search-form
                .wrap__left-menu__profile
                    .wrap--profile-info
                        .wrap--profile-info__photo
                        .wrap--profile-info__text
                            span.wrap--profile-info__text_name.f14.block
                                | {{userFullName}}
                            span.wrap--profile-info__text_type.f12.block
                                | {{kindOfPositiom}}
                    ul.wrap_left-menu__profile__more
                        li.one-dot
                        li.one-dot
                        li.one-dot
                .wrap__left-menu__tasks
                    .wrap__left-menu__tasks_completed-tasks(v-on:click='closeTasks')
                        span.wrap--tasks_completed-tasks__count.f20.block
                            | {{tasks.completed}}
                        span.wrap--tasks_completed-tasks__title.f12.block
                            | Completed Tasks
                    .wrap__left-menu__tasks_open-tasks(v-on:click='openTasks')
                        span.wrap--tasks_open-tasks__count.f20.block
                            | {{tasks.open}}
                        span.wrap--tasks_open-tasks__title.f12.block Open Tasks
                ul.wrap--left-menu__menu-list
                    li.wrap--left-menu__menu-list_item.uppercase.f12 Menu
                    li.wrap--left-menu__menu-list_item
                        a.wrap--left-menu__menu-list_item__link.f14(href='#') Home
                    li.wrap--left-menu__menu-list_item
                        a.wrap--left-menu__menu-list_item__link.f14(href='#') My Tasks
                    li.wrap--left-menu__menu-list_item
                        a.wrap--left-menu__menu-list_item__link.f14(href='#')
                            | Notifications
                            span.count.f13
                                | {{countNotifications}}
        .blackout(v-if='showBurger' @click="showBurger = false")

</template>

<script lang = "ts">
import { Component, Vue } from 'vue-property-decorator';

interface TasksInterface {
  completed: number;
  open: number;
}

@Component
export default class TheSidebar extends Vue {
    // initial data
    companyName: string = 'Projectus';

    userFullName: string = 'Jean Gonzales';

    kindOfPositiom: string = 'Product Owner';

    countNotifications: number = 3;

    conter: number = 0;

    showBurger: boolean = false;

    tasks: TasksInterface = {
      completed: 372,
      open: 11,
    }

    created() {
      this.$root.$on('notifications', (index: number) => {
        this.countNotifications = index;
      });
    }

    // methods
    closeTasks() {
      if (this.tasks.open > 0) {
        // eslint-disable-next-line no-alert
        if (window.confirm('Are you sure you want to change the number of tasks?')) {
          this.tasks.completed += 1;
          this.tasks.open -= 1;
        }
      }
    }

    openTasks() {
      if (this.tasks.open > 0) { this.$router.push('/activity'); }
    }
}
</script>

<style lang="scss" scoped>
  .burger-enter-active, .burger-leave-active {
    transition: transform .4s ease-in-out;
  }
  .burger-enter, .burger-leave-to {
    transform: translateX(-100%);
  }
    .close-burger {
        margin-top: 5px;
        width: 95%;
        height: 30px;
        position: relative;
        top: 0;
        right: 0;
        border-radius: 4px;
        z-index: 5;
        cursor: pointer;
          span {
            &:before {
                transition: all .5s ease-in-out;
                content: '';
                position: absolute;
                width: 20px;
                height: 2px;
                background: #ffffff;
                transform: translateY(9px) rotate(45deg);
                right: 0;
                top: 7px;
            }

            &:after {
                transition: all .5s ease-in-out;
                content: '';
                position: absolute;
                width: 20px;
                height: 2px;
                background: #ffffff;
                transform: translateY(-9px) rotate(-45deg);
                right: 0;
                top: 25px;
             }
          }
          span:hover {
            &:before, &:after {
                background: gray;
            }
          }
    }
</style>
