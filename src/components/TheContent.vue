<template lang="pug">
div
  nav.nav
    ul.menu-list
      router-link.f16.menu-list__item__link(exact='' to='/tasks' active-class='is-active')
        | Tasks
      router-link.f16.menu-list__item__link(to='/kanban' active-class='is-active')
        | Kanban
      router-link.f16.menu-list__item__link(to='/activity' active-class='is-active')
        | Activity
      router-link.f16.menu-list__item__link(to='/calendar' active-class='is-active')
        | Calendar
      router-link.f16.menu-list__item__link(to='/files' active-class='is-active')
        | Files
  .content-body
    router-view
</template>

<script>
export default {
  name: 'TheContent',
};
</script>
