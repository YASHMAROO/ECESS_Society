<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h1 class="text-center pt-lg-4 pt-xs-1">About</h1>
            <p class="pt-3 about-text">
                The embryonic formation of the Department of Electronics and Communication Engineering 
                was in the year 1983 with the introduction of an undergraduate course. Situated amidst 
                lush green campus with teak plantations, the Department, over the time, has grown in several 
                dimensions and provides a magnetic ambience in teaching and learning. Apart from the four 
                years B. Tech course the Department also offers two full time M.Tech courses, one in 
                Telecommunication Engineering and another in Microelectronics and VLSI. The Department also 
                offers PhD in several areas.
            </p>
            <p class="about-text">
                The faculties are engaged in research in diverse topics focussing in Telecommunication, Antenna 
                and Microwave, Microelectronics and VLSI, Signal and Image processing and Computational Systems 
                Biology. It is well equipped with sophisticated laboratories in the areas of VLSI, Signal Processing, 
                Microwave, Antenna and Wireless Communication. The Department has been supported by, SMDP for VLSI, 
                DST-FIST for Wireless Communications and NPMASS for MEMS Research. Sponsored research from research 
                initiation grant as well as DST and SERB have been initiated over the years. The Department has also 
                received fund from TEQIP for its development
            </p>  
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-5 pb-5">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="cover"></div>
                    <img class="responsive" src="@/assets/0.jpg" alt="First slide" />
                    <div class="carousel-caption">
                    <h5 class="heading">NIT Durgapur</h5>
                    <p class="subheading">Duis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cover"></div>
                    <img class="responsive" src="@/assets/ECE Dept.jpeg" alt="Second slide" />
                    <div class="carousel-caption">
                    <h5 class="heading">ECE Department</h5>
                    <p class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cover"></div>
                    <img class="responsive" src="@/assets/hall 1.jpg" alt="Third slide" />
                    <div class="carousel-caption">
                    <h5 class="heading">Lorem Ipsum</h5>
                    <p class="subheading">Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>
                </div>
                <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
                >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    box-shadow: 0px 6px 5px 0px rgba(176, 164, 176, 1);
    font-family: 'Titillium Web', sans-serif;
}

h1 {
    font-size: 3rem !important;
    font-weight: 600;
    text-decoration: underline;
    color: rgba(27,12,89,0.9);
}

.about-text {
    font-weight: 450;
}

.carousel-inner {
    height: 50vh
}

.responsive {
    width: 100%;
    height: 50vh;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center;
}

#carouselExampleIndicators {
    border: 3px solid black;
}

</style>