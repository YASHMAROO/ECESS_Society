<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h1 class="text-center pt-lg-4 pt-xs-1">About</h1>
            <p class="pt-3 about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
            </p>
            <p class="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
            </p>
            <p class="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
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
                    <h5 class="heading">Lorem Ipsum</h5>
                    <p class="subheading">Duis aute irure dolor in reprehenderit in voluptate</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cover"></div>
                    <img class="responsive" src="@/assets/holi.jpg" alt="Second slide" />
                    <div class="carousel-caption">
                    <h5 class="heading">Lorem Ipsum</h5>
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
}

h1 {
    font-size: 3rem !important;
    font-weight: 600;
    text-decoration: underline;
    color: blue;
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