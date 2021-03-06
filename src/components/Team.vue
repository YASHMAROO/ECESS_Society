<template>
    <section class="our-webcoderskull padding-lg text-center">
        <div class="container">
            <h2 class="heading font-weight-bold my-5">Our amazing team</h2>
            <ul class="row">
                <li class="col-12 col-md-6 col-lg-3" v-for="(member,i) in members" :key="i">
                <div class="cnt-block equal-hight" style="height: 349px;">
                    <figure>
                        <img :src="member.image" class="img-responsive" alt />
                    </figure>
                    <h3>{{ member.name }}</h3>
                    <ul class="follow-us clearfix">
                    <li>
                        <a class="p-2 fa-lg ins-ic" :href="member.email">
                        <i class="fas fa-envelope blue-text"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import common from "../services/common";

export default {
  data() {
    return {
      members: []
    };
  },
  created() {
    common.getTeam().then(res => {
      this.members = res.data;
      this.members.splice(0, 12);
    });
  }
};
</script>

<style scoped>
.row.heading h2 {
  color: #fff;
  font-size: 52.52px;
  line-height: 95px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 40px;
  padding-bottom: 20px;
  text-transform: uppercase;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.heading.heading-icon {
  display: block;
}
.padding-lg {
  display: block;
  padding-top: 60px;
  padding-bottom: 60px;
}
.our-webcoderskull .cnt-block:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;
}
.our-webcoderskull .cnt-block {
  float: left;
  width: 100%;
  background: #fff;
  padding: 30px 20px;
  text-align: center;
  border: 2px solid #d5d5d5;
  margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  display: inline-block;
  margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img {
  width: 148px;
  height: 148px;
  border-radius: 100%;
}
.our-webcoderskull .cnt-block h3 {
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-transform: uppercase;
}
.our-webcoderskull .cnt-block h3 a {
  text-decoration: none;
  color: #2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover {
  color: #337ab7;
}
.our-webcoderskull .cnt-block p {
  color: #2a2a2a;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
}
.our-webcoderskull .cnt-block .follow-us {
  margin: 20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li {
  display: inline-block;
  width: auto;
  margin: 0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa {
  font-size: 24px;
  color: #767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover {
  color: #025a8e;
}

.fab:hover {
  transition: 0.2s ease-in;
  font-size: 3vh;
  color: #00008f !important;
}
</style>