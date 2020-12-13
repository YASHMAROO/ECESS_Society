<template>
  <div class="conatiner row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="mission">
                <h1>Mission</h1>
                <ul class="pt-3 pb-3">
                    <li>To advance and cater knowledge in the areas of Communication, Signal Processing and VLSI.</li>
                    <li>To teach state of the art technologies to meet the growing challenges.</li>
                    <li>To carry out research in frontier areas.</li>
                </ul>
          </div>
      </div>
      <div class="col-xl-1 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="vision">
                <h1>Vision</h1>
                <ul class="pt-3 pb-3">
                    <li>To produce highly competent and resourceful young engineers who can perform well in varied professions.</li>
                    <li>
                    To develop a strong fundamental base which enable students to explore academic and collaborative
                    interactions with industry, academia and research organizations.
                    </li>
                    <li>To develop excellent research facilities.</li>
                </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  text-decoration: underline;
  color: blue;
  font-weight: 600;
  font-size: 2.5rem;
}

li {
  font-size: 1rem;
  font-weight: 430;
  text-align: left;
  margin: 10px auto;
  display: list-item;
  word-spacing: 5px;
}

.col-xs-12, .col-sm-12, .col-md-12, .col-lg-5, .col-xl-5 {
  margin: 50px auto;
  text-align: center;
  box-shadow: 0px 6px 5px 0px rgba(176, 164, 176, 1);
  transition: all 0.3s ease-in-out;
}

.col-xs-12:hover, .col-sm-12:hover, .col-md-12:hover, .col-lg-5:hover, .col-xl-5:hover {
  box-shadow: -3px 18px 20px 0px rgba(99, 89, 99, 1);
}

.container {
  margin: 100px auto;
}

@media only screen and (max-width: 576px) {
    h1 {
        font-size: 2.0rem;
    }

    li {
        font-size: 0.95rem;
    }
}

</style>