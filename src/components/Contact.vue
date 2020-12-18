<template>
  <div class="container-fluid">
    <h2 class="text-center font-weight-bold pt-5 pb-3">
      Contact Us
    </h2>
    <div class="row p-0 Contact-us">
      <div class="col-md-12 col-lg-5 m-0 pb-4 pt-4">
        <div
          v-for="(contact,index) in contacts"
          :key="index"
          class="row d-flex justify-content-center"
        >
          <div class="col-11 font-weight-bold">
            <div class="contact-card">
              {{ contact.name }}
              <br />
              <i class="fas fa-phone" />
              {{ contact.phone }}
              <br />
              <i class="fas fa-envelope" />
              {{ contact.mail }}
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-7 p-0">
        <div class="Contact-footer--right">
          <div class="Contact-footer--right-content">
            <div class="row mt-2">
              <div class="col-1 p-0 mr-2">
                <i class="fas fa-map-marker-alt fa-2x" />
              </div>
              <div class="col-10">
                <p>
                  <strong>
                    ECESS
                    <br />NIT Durgapur
                  </strong>
                </p>
                <p>
                  Durgapur
                  <br />West Bengal 713209
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Lorem Ipsum",
          phone: "+91 98765 43210",
          mail: "loremispum@gmail.com"
        },
        {
          name: "Lorem Ipsum",
          phone: "+91 98765 43210",
          mail: "loremispum@gmail.com"
        },
        {
          name: "Lorem Ipsum",
          phone: "+91 98765 43210",
          mail: "loremispum@gmail.com"
        },
        {
          name: "Lorem Ipsum",
          phone: "+91 98765 43210",
          mail: "loremispum@gmail.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container-fluid {
  font-family: 'Titillium Web', sans-serif;
}

h2 {
  font-size: 3.5rem;
  color: blue;
  /* text-transform: uppercase; */
  font-family: 'Titillium Web', sans-serif;

}
.highlighted {
  color: #fa631c;
}
.Contact-us {
  background-color: #f5f5f5;
}
.contact-card {
  background-color: white;
  margin: 5px 10px;
  min-width: 50%;
  padding: 1rem;
  border-left: 0.8vw solid #444;
}
.Contact-footer--right {
  background-image: url("~@/assets/map.jpeg");
  background-size: cover;
  color: white;
  line-height: normal;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
}
.Contact-footer--right-content {
  margin: 0;
  padding: 3vh 1vw 3vh;
  width: 100%;
  float: left;
  box-sizing: border-box;
  padding-bottom: 20vh;
}
.Contact-footer--right .Contact-footer--right-content > div {
  position: relative;
  max-width: 70%;
  padding: 36px 36px 36px 36px;
  margin: auto;
  background: #444;
  box-sizing: border-box;
}
.Contact-footer--right .Contact-footer--right-content > div::after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -12px;
  content: " ";
  pointer-events: none;
  border: solid transparent;
  border-width: 12px;
  border-color: rgba(218, 77, 60, 0);
  border-top-color: #444;
}
</style>