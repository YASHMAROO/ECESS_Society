<template>
  <div class="container about-container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 about">
        <h1 class="text-center about-heading">
          <strong>About</strong>
        </h1>
        <p class="text-center about-caption pt-3">
          The embryonic formation of the Department of Electronics and Communication
          Engineering was in the year 1983 with the introduction of an undergraduate course.
          Situated amidst lush green campus with teak plantations, the Department, over the time,
          has grown in several dimensions and provides a magnetic ambience in teaching and learning.
          The faculties are engaged in research in diverse topics focussing in Telecommunication,
          Antenna and Microwave, Microelectronics and VLSI, Signal and Image processing and Computational Systems Biology.
          It is well equipped with sophisticated laboratories in the areas of VLSI, Signal Processing, Microwave, Antenna
          and Wireless Communication. The Department has been supported by, SMDP for VLSI, DST-FIST for Wireless
          Communications and NPMASS for MEMS Research. Sponsored research from research initiation grant as well as DST
          and SERB have been initiated over the years.The Department is committed to impart quality education at undergraduate
          as well as postgraduate level and promulgate quality research in diverse fields of application of electronics engineering.
        </p>
      </div>
      <div class="col-lg-1 col-xl-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 notice">
        <h1 class="text-center notice-heading">
          <strong>Notice</strong>
        </h1>
        <div
          id="noticeCarousel"
          class="carousel slide pt-4"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol class="carousel-indicators">
            <li data-target="#noticeCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#noticeCarousel" data-slide-to="1"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mb-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
            </div>

            <div class="carousel-item">
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row inbox mt-5 mb-5 mr-3 ml-3">
                  <div class="date col-2">
                    <p class="text-center pt-2">25</p>
                    <p class="text-center">Dec</p>
                  </div>
                  <div class="title col-10">
                    <p class="text-center pt-3">Lorem Ipsum is the best paragraph generator</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '../services/common.js'

export default {
  data () {
    return {
      notices: []
    }
  },
  created () {
    common.getNotice().then(response => {
      this.notices = response.data
      console.log(this.notices)
    })
  }
};
</script>

<style lang="scss" scoped>
.about-container {
  font-family: 'Titillium Web', sans-serif;
}

.about-heading, .notice-heading {
  font-size: 3rem !important;
  text-decoration: underline;
  color: rgba(27,12,89,0.9);
  font-weight: 900;
}

.about-caption {
  font-size: 1.4rem !important;
  word-spacing: 10px;
  font-weight: 800;
}

.col-xl-7 , .col-xl-4, .col-lg-7, .col-lg-4 {
  box-shadow: 0px 6px 5px 0px rgba(176, 164, 176, 1);
}

.carousel-inner {
  background: blanchedalmond;
  height: auto;
}

.inbox {
  background-color: black;
  height: auto;
  border-radius: 20px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

.date {
  background-color: white;
  color: black;
  font-weight: 500;
  border-radius: 2px;
  font-size: 1.2rem;
}

.title {
  color: white;
  display: inline-block;
  font-weight: 500;
  font-size: 1.2rem;
}

#noticeCarousel li {
  list-style-type: none;
}

@media only screen and (max-width: 576px) {
  .about-heading {
    font-size: 2.5rem !important;
  }

  .about-caption {
    font-size: 1.1rem !important;
    padding: 0 1rem !important;
  }

  .notice {
    padding-top: 2rem !important;

    p {
      font-size: 0.95rem !important;
    }
    
  }

  .carousel-inner {
    height: auto;
  }
}

@media only screen and (max-width: 776px) and (min-width: 576px) {
  .about-heading {
    font-size: 3.5rem !important;
  }

  .about-caption {
    font-size: 1.5rem !important;
    word-spacing: 5px;
    font-weight: 600; 
  }

  .notice {
    padding-top: 3rem !important;
  } 

  .notice-heading {
    font-size: 3.5rem !important;
  }

  .date {
    font-size: 1.6rem;
  }

  .title {
    font-size: 1.5rem;
  }  
}

@media only screen and (max-width: 992px) and (min-width: 776px) {
  .about-heading {
    font-size: 4rem !important;
  }

  .about-caption {
    font-size: 1.5rem !important;
    word-spacing: 10px;
    font-weight: 600; 
  }

  .notice {
    padding-top: 3rem !important;
  } 

  .notice-heading {
    font-size: 4rem !important;
  }

  .date {
    font-size: 1.8rem;
  }

  .title {
    font-size: 1.7rem;
  }  
}
</style>