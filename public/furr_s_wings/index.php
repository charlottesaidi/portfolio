<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, intial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/53fe39a7b7.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="flexslider/flexslider.css">
    <link rel="stylesheet" href="css/style_common.css">
    <link rel="stylesheet" href="css/style_home.css">
    <title>Furr's Wings: Animal shelters and free veterinary clinics network</title>
  </head>
  <body>

    <img id="background" src="img/design/main_background.png" alt="">

    <div id="body_layer">

      <p style="width: 100%; text-align: center; color: #811453; font-size: 15px; font-weight: bold; position: fixed; top: 10px;"> Fictional website. Work in progress ... <i class="fas fa-spinner fa-pulse" style="font-size: 20px;"></i></p>

      <?php include 'inc/header.php' ?>

      <main>
        <section class="reveal left" id="introduction">
          <div class="wrap introduction">
            <h2>We give wings to those who <span>Lost their own</span></h2>
            <div class="intro_box">
              <div class="block block_1">
                <i class="fa fa-paw"></i>
                <div class="text">
                  <h3>We are everywhere you might need us</h3>
                  <p>First european humane society, we deployed shelters, free clinics and voluteers across the continent. We give everyone access to pet care for their furry friends.</p>
                </div>
              </div>
              <div class="block block_2">
                <i class="fa fa-paw"></i>
                <div class="text">
                  <h3>We are trained and qualified</h3>
                  <p>Our partners are professionals and volunteers who offered their skills and free time for the health and well-being of animals.</p>
                </div>
              </div>
              <div class="block block_3">
                <i class="fa fa-paw"></i>
                <div class="text">
                  <h3>Everything they need, we provide</h3>
                  <p>Be it a shelter, health care, food, a foster family or a forever home... we are here to find it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="reveal right" id="shelter">
          <div class="wrap shelter">
            <div class="text">
            <h2>Bringing european humane societies together <span>because united we stand</span></h2>
            <p>Every year, thousands of animals suffer from abandonment and abuse. For now, our organisation combines the eight main societies of each state member of the EU. Working as a network, we are able to provide fully equiped shelters in every territory where you might find an animal in need.</p>
            <p>Visit our partners and explore our shelters networks.</p>
            <i class="fa fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;<a class="read" href="#">Find your shelter</a>
            </div>
            <div class="map">
              <img src="img/pictures/home/map_europe.png" alt="">
              <a class="france" href="#" title="SPA: Société Protectrice des Animaux"><i class="fa fa-map-marker-alt"></i></a>
              <a class="uk" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="germany" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="spain" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="suede" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="norway" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="belgium" href="#"><i class="fa fa-map-marker-alt"></i></a>
              <a class="italy" href="#"><i class="fa fa-map-marker-alt"></i></a>
            </div>
          </div>
        </section>

        <section class="reveal left" id="free_clinic">
          <div class="wrap free_clinic">
            <div class="text">
              <h2>Everyone should be able to take care of their family <span>and your pet is family</span></h2>
              <p>Health is something you don't usually take lightly, isn't it ? But veterinary care can be at great expenses ... <br> Fortunately, associated veterinarian work with our volunteers to fund free clinics affordable for everyone.</p>
              <a class="read" href="#">Read more</a>
            </div>
            <div class="flexslider flexslider_1">
              <ul class="slides">
                <li>
                  <img src="img/pictures/team/volunteer_in_shelter.jpg" alt="">
                  <img src="img/pictures/team/vet_dog.jpg" alt="">
                </li>
                <li>
                  <img src="img/pictures/adoption/ivar_kitty.jpg" alt="">
                  <img src="img/pictures/team/volunteers_sarah.jpg" alt="">
                </li>
              </ul>
            </div>
          </div>
        </section>


        <section class="reveal right" id="volunteering_recruiting">
          <div class="wrap volunteering_recruiting">
            <img src="img/design/recruit_background.jpg" alt="">
            <div class="text">
              <h2>You want to join us, <span>apply now</span></h2>
              <p>You are interested in a full time/part time job, an internship or in volunteering. <br> Contact our human resources service through the application platform below.</p>
              <p> <strong>Fill in the form and upload your CV</strong> </p>
              <button type="button" name="upload">Apply</button>
            </div>
          </div>
        </section>

      </main>      

      <?php include 'inc/footer.php' ?>

    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="js/jquery.js"></script>
    <script src="flexslider/jquery.flexslider-min.js"></script>
    <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
    <script src="js/main_script.js"></script>

  </body>

</html>
