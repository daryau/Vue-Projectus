<template lang="pug">
div
  nav.nav
    ul.menu-list
      li.menu-list__item
        router-link.f16.menu-list__item__link(exact='' to='/tasks' active-class='is-active')
          | Tasks
      li.menu-list__item
        a.f16.menu-list__item__link(href='#') Kanban
      li.menu-list__item
        router-link.f16.menu-list__item__link(to='/activity' active-class='is-active')
          | Activity
      li.menu-list__item
        a.f16.menu-list__item__link(href='#') Calendar
      li.menu-list__item
        a.f16.menu-list__item__link(href='#') Files
  .content-body
    router-view
</template>

<script>
export default {
  name: 'TheContent',
};
</script>
