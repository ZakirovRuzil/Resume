<template>
  <div class="container">
    <div class="skills">
        <div class="skills__hard-skills">
          <h2>Hard Skills:</h2>
          <ul>
            <li v-for="(skill, index) in hardSkills" :key="index">{{ skill }}</li>
          </ul>
        </div>

        <div class="skills__soft-skills">
          <h2>Soft Skills:</h2>
          <ul>
            <li v-for="(skill, index) in softSkills" :key="index">{{ skill }}</li>
          </ul>
        </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      hardSkills: [
        'HTML/CSS',
        'Анимации CSS',
        'Адаптивная верстка',
        'JavaScript',
        'Базовые знания Vue',
        'Препроцессоры CSS - SASS/SCSS',
        'Tailwind',
        'PostgreSQL/Microsoft SQL',
        'GIT',
        'npm/yarn',
        'Понимание модели MVC',
      ],
      softSkills: [
        'Стрессоустойчивость',
        'Ответственность',
        'Пунктуальность',
        'Быстрое усваивание материала',
      ],
    };
  },
};
</script>

<style scoped lang="css" src="./styles.css"></style>