<template>
        <div class="wrap show-burger">
            <div class="wrap__left-menu">
                <div class="wrap__left-menu__header">
                    <a href="#" class="wrap__left-menu__header_logo uppercase f16">
                     {{companyName}}</a>
                    <div class="search-form"></div>
                </div>

                <div class="wrap__left-menu__profile">
                    <div class="wrap--profile-info">
                        <div class="wrap--profile-info__photo"></div>
                        <div class="wrap--profile-info__text">
                            <span class="wrap--profile-info__text_name f14 block">
                                {{user.userFullName}}
                            </span>
                            <span class="wrap--profile-info__text_type f12 block">
                                {{user.kindOfPositiom}}
                            </span>
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
                        <span class="wrap--tasks_completed-tasks__count f20 block">
                            {{tasks.completed}}
                        </span>
                        <span class="wrap--tasks_completed-tasks__title f12 block">
                            Completed Tasks
                        </span>
                    </div>
                    <div class="wrap__left-menu__tasks_open-tasks">
                        <span class="wrap--tasks_open-tasks__count f20 block">
                            {{tasks.open}}
                        </span>
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
                            <span class="count f13">
                                {{countNotifications}}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>

export default {
  name: 'TheSidebar',
  data() {
    return {
      companyName: 'Projectus',
      user: {
        userFullName: 'Jean Gonzales',
        kindOfPositiom: 'Product Owner',
      },
      tasks: {
        completed: 372,
        open: 11,
      },
      countNotifications: 3,
      conter: 0,
    };
  },
  created() {
    this.$root.$on('notifications', (index) => {
      this.countNotifications = index;
    });
  },
  methods: {
    closeTasks() {
      if (this.tasks.open > 0) {
        if (window.confirm('Are you sure you want to change the number of tasks?')) { this.tasks.completed += 1; this.tasks.open -= 1; }
      }
    },
  },
};
</script>
