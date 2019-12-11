export default {
  name: 'TheSidebar',
  data() {
    return {
      companyName: 'Projectus',
      userFullName: 'Jean Gonzales',
      kindOfPositiom: 'Product Owner',
      tasks: {
        completed: 372,
        open: 11,
      },
      countNotifications: 3,
      conter: 0,
      visible: true,
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
        // eslint-disable-next-line no-alert
        if (window.confirm('Are you sure you want to change the number of tasks?')) { this.tasks.completed += 1; this.tasks.open -= 1; }
      }
    },
    openTasks() {
      if (this.tasks.open > 0) { this.$router.push('/activity'); }
    },
  },
};