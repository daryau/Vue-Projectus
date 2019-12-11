<template lang="pug">
    .wrap
        .burger(v-on:click='visible =! visible')
            span
            span
            span
            span
        .wrap__left-menu(v-if='visible')
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

    visible: boolean = true;

    tasks: TasksInterface = {
      completed: 372,
      open: 11,
    }

    created() {
      this.$root.$on('notifications', (index) => {
        this.countNotifications = index;
      });
    }

    // methods
    closeTasks() {
      if (this.tasks.open > 0) {
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
