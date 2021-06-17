<template>
    <section class="our-webcoderskull padding-lg text-center">
        <div class="container">
            <h2 class="heading font-weight-bold my-5">Our amazing team</h2>
            <div v-for='(team,i) in teams' :key="i">
              <div v-if="team.year === '4'" class='fourth'>
                <h2 class='font-weight-bold text-center'>GENERAL SECRETARIES (Final Year)</h2>
                <ul class="row">
                  <li class="col-12 col-md-6 col-lg-3" v-for="(member,i) in team.members" :key="i">
                    <div class="cnt-block equal-hight" style="height: 339px;">
                      <figure>
                          <img :src="member.image" class="img-responsive" alt />
                      </figure>
                      <h3>{{ member.name }}</h3>
                      <h5>{{ member.team }}</h5>
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
              <v-divider></v-divider>
              <div v-if="team.year === '3'">
                <h4 class='font-weight-bold text-center'>3rd Year</h4>
                <ul class="row">
                  <li class="col-12 col-md-6 col-lg-3" v-for="(member,i) in team.members" :key="i">
                    <div class="cnt-block equal-hight" style="height: 339px;">
                      <figure>
                          <img :src="member.image" class="img-responsive" alt />
                      </figure>
                      <h3>{{ member.name }}</h3>
                      <h5>{{ member.team }}</h5>
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
               <v-divider></v-divider>
              <div v-if="team.year === '2'">
                <h4 class='font-weight-bold text-center'>2nd Year</h4>
                <ul class="row">
                  <li class="col-12 col-md-6 col-lg-3" v-for="(member,i) in team.members" :key="i">
                    <div class="cnt-block equal-hight" style="height: 339px;">
                      <figure>
                          <img :src="member.image" class="img-responsive" alt />
                      </figure>
                      <h3>{{ member.name }}</h3>
                      <h5>{{ member.team }}</h5>
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
            </div>
        </div>
    </section>
</template>

<script>
import common from "../services/common";

export default {
  data() {
    return {
      teams: [
        {
          year: '4',
          members: [
            {
              name: 'Ayut Ghosh',
              image: "https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/Ayut%20-%20Ayut%20Ghosh.jpg?alt=media&token=f4e3b3c4-a82f-4389-8a9c-e3325060ed6a",
              email: 'ayg9895@gmail.com',
              team: 'General Secretary'
            },
            {
              name: 'PAWAN KUMAR',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20200816_170700_463%20-%20Pawan%20Kumar.jpg?alt=media&token=69c443eb-5d56-4e31-9c2e-824070545a5c',
              email: 'pkrana0005@gmail.com',
              team: 'General Secretary'
            }
          ]
        },
        {
          year: '3',
          members: [
            {
              name: 'Avinash Kumar',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20210210_130853-min%20-%20Avinash%20Kumar.jpg?alt=media&token=f2b69619-071f-439b-a30e-34c0198d79a2',
              email: 'avinashkumar.99911@gmail.com',
              team: 'Design Team'
            },
            {
              name: 'Nitisha Singh',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/Photo%20from%20Nitisha%20-%20Nitisha%20Singh.jpg?alt=media&token=5ab997e6-3480-40ba-8447-df47f676dcd5',
              email: 'ns18u10301@btech.nitdgp.ac.in',
              team: 'Technical Team'
            },
            {
              name: 'Aratla Pavani',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/20201031_214850%20-%20pavani%20aratla.jpg?alt=media&token=53d80de9-ff4d-40d4-a0a8-607e494db5fb',
              email: 'pavaniaratla2000@gmail.com',
              team: 'Technical Team'
            },
            {
              name: 'Sweta Rakhecha',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/Screenshot_20210210-192023__01%20-%20sweta%20rakhecha.jpg?alt=media&token=967aaf60-1326-4701-95e6-39599902683e',
              email: 'swetarakhecha@gmail.com',
              team: 'Alumni Relations'
            },
            {
              name: 'Mukesh Gupta',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20200105_162325%20-%20MUKESH%20KUMAR%20GUPTA(1).jpg?alt=media&token=14842e89-9510-4876-9189-5cfbb58d06ca',
              email: 'mkg18u10480@btech.nitdgp.ac.in',
              team: 'Web Development'
            },
            {
              name: 'Sahaj Jha',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/2019-04-14-10-32-05-333%20-%20Sahaj%20Jha.jpg?alt=media&token=0c0b1228-00a8-4a00-8cac-3f1c55002877',
              email: 'sahajj37@gmail.com',
              team: 'Alumni Relations Team'
            },
            {
              name: 'Pritish Singhal',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/pritish%20-%20Pritish%20Singhal(1).jpg?alt=media&token=a6d5812f-1670-4b82-b1c9-1c6aa57e8895',
              email: 'marooyash@yahoo.in',
              team: 'Alumni and Social Media'
            },
            {
              name: 'Pranjal Mittal',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_8629-02-01%20-%20Pranjal%20Mittal.jpg?alt=media&token=c0499b51-c293-490b-82f0-f30db1ced6b9',
              email: 'pranjal.mittal1999@gmail.com',
              team: 'Alumini relations'
            }
          ]
        },
        {
          year: '2',
          members: [
            {
              name: 'Yash Maroo',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/Self-img%20-%20Yash%20Maroo.jpg?alt=media&token=0b0c21aa-6843-4367-93b5-a30cbade0a8f',
              email: 'marooyash@yahoo.in',
              team: 'Web Team'
            },
            {
              name: 'Abhishek Paul',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/6b055a3f-5bf2-44c3-833d-e1487223b011%20-%20Abhishek%20Paul(1).jpg?alt=media&token=aed08b2f-7227-448c-a4dd-217c1cb1af57',
              email: 'abhishek.paulcp.dbs@gmail.com',
              team: 'Technical Team'
            },
            {
              name: 'Sriman Chakri',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/MY_IMAGE%20-%20Sriman%20Chakri.jpg?alt=media&token=d0ffe655-4ffe-4387-adea-976e740c31a6',
              email: 'srimanchakrig09@gmail.com',
              team: 'Technical Team'
            },
            {
              name: 'Ayush Maurya',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20190908_021827_282%20-%20Ayush%20Maurya.jpg?alt=media&token=f6ea1289-6f58-4633-9d60-ab0651d3218e',
              email: 'ayush.maurya.2001@gmail.com',
              team: 'Designing Team'
            },
            {
              name: 'Ayush Sharma',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20201206_231804%20-%20Ayush%20Sharma.jpg?alt=media&token=78c37d3b-1ba5-4ff1-b519-cc7d0f620c90',
              email: 'asharma19112000@gmail.com',
              team: 'Tech Team'
            },
            {
              name: 'Leela Prasad Dammalapati',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20200208_150029%20-%20Leela%20Prasad.jpg?alt=media&token=0ecae31e-75f8-4162-af7d-3adeac3b1e40',
              email: 'lionleela999@gmail.com',
              team: 'Alumni Relations'
            },
            {
              name: 'Rajdeep Mondal',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/Rajdeep%20Mondal%20-%20Rajdeep%20Mondal.jpeg?alt=media&token=e0dcafb3-fed6-44e6-adbe-4958d06da37f',
              email: 'rajdeepmondal135.rm94@gmail.com',
              team: 'Technical Team'
            },
            {
              name: 'Rohit Kumar Sadhukhan',
              image: 'https://firebasestorage.googleapis.com/v0/b/ecess-img.appspot.com/o/IMG_20191021_174156%20-%20Ratan%20Sadhukhan.jpg?alt=media&token=4a393b50-8b8f-4157-91c8-0f5d036be2de',
              email: 'ratansadhukhan64@gmail.com',
              team: 'Design Team'
            }
          ]
        },
      ],
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