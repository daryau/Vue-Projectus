<template>
    <div>
      <nav class="nav">
        <ul class="menu-list">
          <li class="menu-list__item">
              <router-link class="f16 menu-list__item__link"
              exact to="/tasks" active-class="is-active">
                Tasks
              </router-link>
          </li>
          <li class="menu-list__item">
              <a href="#" class="f16 menu-list__item__link">Kanban</a>
          </li>
          <li class="menu-list__item">
              <router-link class="f16 menu-list__item__link" to="/activity"
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
      <div class="content-body">
        <router-view></router-view>
      </div>
      </div>
</template>

<script>
export default {
  name: 'TheContent',
};
</script>
