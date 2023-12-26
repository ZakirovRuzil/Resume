<template>
  <section class="container">
    <div class="about">
      <div class="about__hobby">
        <h2>Мои хобби</h2>
        <ol class="card__list">
          <li v-for="(hobby, index) in hobbies" :key="index">
            {{ hobby }}
          </li>
        </ol>
      </div>
      <div class="about__experience">
        <h2>Опыт работы</h2>
        <table class="about__experience-table">
          <tbody>
            <tr v-for="(job, index) in jobs" :key="index">
              <td>{{ job.company }}</td>
              <td>{{ job.position }}</td>
              <td>{{ job.year }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  </section>  
</template>

<script>
export default {
  data() {
    return {
      hobbies: [
        "Игра в League of Legends",
        "Просмотр аниме и чтение манги",
        "Баскетбол",
        "Программирование",
      ],
      selectedHobbies: [false, false, false, false],
      jobs: [
        { company: "Парк развлечений 'Волшебный мир'", position: "Оператор", year: "2019-2020" },
        { company: "Салон красоты 'Soha'", position: "SMM-менеджер", year: "2021-2022" },
        { company: "Магазин люстр 'Империя света'", position: "Продавец-консультант", year: "2022-2023" },
      ],
    };
  },
};
</script>

<style scoped lang="css" src="./styles.css"></style>