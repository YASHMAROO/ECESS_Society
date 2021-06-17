<template>
  <div class="row"> 
      <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">
          <img class="hod-image m-5" src="@/assets/Durbadal Mandal.jpeg" alt="ECE HOD">
      </div>
      <div class="col-md-2 col-lg-2 col-xl-2"></div>
      <div class="col-xs-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
          <div class="about-hod mt-2 mb-2">
              <div class="name">Prof. Durbadal Mandal</div>
              <div class="designation">Head of the Department</div>
              <div class="contact pt-4">
                  <div class="head">Contact (Head)</div>
                  <div class="mail">
                      <i class="fas fa-envelope"></i><span class="mail-id"> durbadal.mondal@ece.nitdgp.ac.in</span>
                  </div>
                  <div class="research pt-3">
                      <div class="rhead">Research Interests</div>
                      <ul>
                          <li>Antenna Optimization</li>
                          <li>Signal Processing</li>
                          <li>Soft Computing</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.row {
    box-shadow: 0px 6px 5px 0px rgba(176, 164, 176, 1);
    font-family: 'Titillium Web', sans-serif;
    margin-top: -3rem !important;
    text-align: justify;
}

.hod-image {
    border: 1px solid gray;
}
.about-hod{
    .name {
        color: blue;
        font-weight: 550;
        font-size: 1.5rem;
    }

    .designation {
        font-weight: 400;
        font-size: 1.2rem;
    }

    .contact {
        .head {
            font-weight: 550;
            font-size: 1.3rem;
        }
    }

    .mail {
        .mail-id {
            font-weight: 400;
        }
    }

    .research {
        .rhead {
            font-weight: 550;
            font-size: 1.3rem;
        }
        li {
            font-weight: 400;

        }
    }
}

@media only screen and (max-width: 776px) {
    .row {
        text-align: center;
    }
}

</style>