new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      course: {},
    }
  },
  
  computed: {
    totalTime(){
      let total = 0;
      this.courses.forEach(course => {
        total = total + parseInt(course.time)
      });
      return total;
    }
  },

  created(){
    this.initCourse();
  },
  
  methods: {
    initCourse(){
      this.course = {title: "", time: 0};
    },
    addCourse(){
      this.courses.push(this.course);
      this.initCourse();
    }
  }
})