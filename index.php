<?php
include dirname(__FILE__) . '/config.php';
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Un entorno natural y campestre sin perder las comodidades de la ciudad, eso es lo que define a nuestro proyecto Brisas de San Rafael, ubicado en el corazón del Maule">
  <title>Brisas de San Rafael</title>

  <link rel="shortcut icon" href="favicon.png" type="image/x-icon">

  <meta name="description" content="Un entorno privilegiado para vivir y disfrutar. Lotes desde 5.000 metros cuadrados en el corazón del la región del Maule">
  <meta name="google-site-verification" content="u-pe5-r4pReRQtlR1EG2bcU_r6wxEjWSC5hIChOq3N0" />

  <?php if (ENVIRONMENT == 'production') {  ?>
    <link rel="stylesheet" href="/css/app.min.css?v=<?php echo VERSION ?>">
  <?php } else { ?>
    <link rel="stylesheet" href="/css/app.css">
  <?php } ?>
</head>

<body>

  <header>
    <div>
      <div class="logo">
        <img src="img/iconos/logo-loteo.webp" alt="logo loteo Brisas de San Rafael" loading="lazy">

      </div>
      <button class="menu-button" aria-label="menu">
        <span></span>
        <span></span>
      </button>
    </div>
    <nav id="modal-nav">
      <ul>
        <li class="active"><a href="/#inicio">Inicio</a></li>
        <li><a href="/#proyecto">Proyecto</a></li>
        <li><a href="/#vista360">Vista 360</a></li>
        <li><a href="/#cercano">Cercano</a></li>
        <li><a href="/#galeria">Galería</a></li>
        <li><a href="/#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <div class="head" id="inicio">
    <img src="img/banner2.webp" alt="Loteo Brisas de san rafael">

    <div>
      <img src="img/iconos/viento.svg" alt="Viento">
      <h2>Un entorno privilegiado para vivir y disfrutar</h2>
    </div>
  </div>
  <section id="proyecto">

    <div class="container">



      <article>
        <div>
          <img src="img/iconos/11.svg" class="svg-purple section-icon" alt="Ondas">
          <h2>El Proyecto</h2>
          <p>Un entorno natural y campestre sin perder las comodidades de la ciudad, eso es lo que define a nuestro proyecto Brisas de San Rafael, ubicado en el corazón del Maule, tiene acceso a todos lo servicios necesarios, con la tranquilidad del campo</p>
          <p>Situado en la comuna de San Rafael, zona agricultora y vinícola por excelencia, el proyecto se encuentra a solo minutos del centro urbano de la comuna, con acceso a bancos, registro civil, farmacias, colegios, salud, supermercados, iglesias y más. Además cuenta con rápido acceso desde la Ruta 5 – Sur (Carretera Panamericana Sur)</p>
        </div>


        <img src="img/san_rafael_01.webp" alt="San Rafael" loading="lazy">
      </article>

      <div class="boxes">

        <img src="/img/aerea2-2.webp" alt="Vista Aerea" class="img" loading="lazy">

        <div>
          <img class="icon" src="/img/iconos/mapa.svg" alt="Parcelas excelente ubicación">
          <h3>Excelente Ubicación</h3>
          <p>A 2km de colegios, supermercados, farmacias y municipalidad</p>
        </div>
        <div>
          <img class="icon" src="/img/iconos/acceso.svg" alt="Loteos con acceso pavimentado">
          <h3>Acceso</h3>
          <p>Camino pavimentado hasta la entrada del proyecto (Ruta k-405)</p>
        </div>
        <div>
          <img class="icon" src="/img/iconos/cobertura.svg" alt="Cobertura telefónica en zona rural">
          <h3>Cobertura</h3>
          <p>Excelente cobertura de señal telefónica</p>
        </div>
        <div>
          <img class="icon" src="/img/iconos/auto.svg" alt="Acceso vehicular">
          <h3>Pista de acceso</h3>
          <p>el Proyecto cuenta con una pista de acceso para su mayor seguridad</p>
        </div>
        <div>
          <img class="icon" src="/img/iconos/iluminacion.svg" alt="Postación eléctrica">
          <h3>Postación</h3>
          <p>el proyecto constará con postación (en proceso)</p>
        </div>
        <div>
          <img class="icon" src="/img/iconos/agua_potable.svg" alt="Acceso agua potable">
          <h3>Agua Potable</h3>
          <p>Proyecto constará con agua potable por medio de APR (en proceso)</p>
        </div>

      </div>
    </div>


  </section>
  <section id="vista360">
    <div class="container">
      <h2>Vista 360°</h2>
    </div>

    <div id="panorama">
      <div id="controls">
        <!-- <div class="ctrl active" id="active-mouse"><i class="fas fa-hand-point-up"></i> Navegación</div> -->
      </div>

      <div id="details">
        <div class="content">

        </div>
        <div class="buttons">
          <button class="contactar">Contactar</button>
          <button class="cerrar">Cerrar</button>
        </div>
      </div>
    </div>

  </section>


  <section id="cercano">
    <div class="container">
      <h2>Lugares cercanos</h2>
      <div class="multi-item-carousel" data-current-position="0" data-interval="15000">

        <div class="mic-scroll-wrapper">
          <div class="mic-container wrapper">
            <div class="mic-item">
              <img src="img/cercano/mobile/radal-siete-tazas.webp" alt="Radal siete tazas" loading="lazy">
              <img src="img/cercano/web/radal-siete-tazas.webp" alt="Radal siete tazas" loading="lazy">
              <h2>Radal siete tazas </h2>
              <p>a 1:30 hrs en auto</p>
              <p>En la profundidad de la cordillera maulina, se encuentra este hermoso parque nacional, conocido por sus hermosos saltos de agua y relajantes senderos entre el bosque nativo de la zona.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/litoral.webp" alt="Litoral del maule" loading="lazy">
              <img src="img/cercano/web/litoral.webp" alt="Litoral del maule" loading="lazy">
              <h2>Litoral</h2>
              <p>a 1:30 hrs en auto</p>
              <p>Rancura es la puerta de acceso al litoral del Maule, donde destacan las numerosas caletas de pescadores artesanales, exquisita gastronomía, humedales, avistamiento de aves, deportes acuáticos y mucho más.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/talca.webp" alt="Talca" loading="lazy">
              <img src="img/cercano/web/talca.webp" alt="Talca" loading="lazy">
              <h2>Talca</h2>
              <p>A 20 minutos en auto</p>
              <p>En la capital regional encontrará todos los servicios que busque, centros comerciales, bancos, universidades, colegios, centros médicos, cine, teatro y mucho más.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/lago-colbun.webp" alt="Lago colbun" loading="lazy">
              <img src="img/cercano/web/lago-colbun.webp" alt="Lago colbun" loading="lazy">
              <h2>Lago Colbún</h2>
              <p>A 1:30 hrs en auto</p>
              <p>El lago Colbún es el mayor embalse artificial de Chile, ubicado en la región del Maule, fue construido con el fin de retener las aguas del río del Maule, las cuales son usadas para riego y para producción de energía hidroeléctrica. </p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/vilches.webp" alt="Vilches" loading="lazy">
              <img src="img/cercano/web/vilches.webp" alt="Vilches" loading="lazy">
              <h2>Vilches</h2>
              <p>A 1:30 hrs en auto</p>
              <p>La localidad de Vilches pertenece a la comuna de San Clemente, 70 kilómetros desde Talca por la ruta CH-115.</br>sus atractivos principales son: laguna de los patos, laguna del toro, quebrada del coigue, el parque gil de vilches, las piedras tacitas y el rio lircay. </p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/lagunas-del-maule.webp" alt="lagunas del Maule" loading="lazy">
              <img src="img/cercano/web/lagunas-del-maule.webp" alt="lagunas del Maule" loading="lazy">
              <h2>Lagunas del maule</h2>
              <p>A 1:30 hrs en auto</p>
              <p>La laguna del maule es un embalse que se construyo como fuente para propor-cionar de energía a las hidroeléctricas del sector, por lo que actualmente se puede disfrutar de un paisaje sobrecogedor de los sitios que ha inundado.. Aun así es capaz de demostrar la magnitud del lugar y poder tomar postales de la increible cordillera de los andes.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/salto-del-maule.webp" alt="salto del maule" loading="lazy">
              <img src="img/cercano/web/salto-del-maule.webp" alt="salto del maule" loading="lazy">
              <h2>Salto del maule</h2>
              <p>A 1:30 hrs on auto</p>
              <p>ubicado en la comuna de San Clemente, à metros de la ruta internacional Paso Pehuenche. <br>el Salto Maule, que es uno de los más imponentes saltos donde pasa el río Maule. <br> Este lugar es 100% recomendable por su belleza y por el entorno y otros sectores que están cerca de anty que puedes visitar como lo Montes Blancos o la Laguna del Maule.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/machicura.webp" alt="machicura" loading="lazy">
              <img src="img/cercano/web/machicura.webp" alt="machicura" loading="lazy">
              <h2>Machicura</h2>
              <p>a 1:30 hrs en auto</p>
              <p>A tres minutos de calbun, Provincia de Linares, Región del Maule, a solo 50 Kms de Talca y 27 de Linares, se encuentra el Embalse Machicura. Su cercanía con Talca y Linares, el facil acceso desde Santiago, sus aguas no contaminadas y transparentes, y su nivel permanente que no varía de invierno a verano, lo convierten en un lugar imperdible para contemplar todo el año.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/rio-melado.webp" alt="Río melado" loading="lazy">
              <img src="img/cercano/web/rio-melado.webp" alt="Río melado" loading="lazy">
              <h2>Río melado</h2>
              <p>a 20 minutos en auto</p>
              <p>El río Melado, en su cuenca superior llamado o Guacuivio es un curso natural de agua que nace en la confluencia de los rios Cajon Troncoso y Palale provenientes de la región fronteriza el primera y de la aguna Dial el segundo, en la Provincia de Linares de la Región del Maule.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/malargue.webp" alt="Malargue" loading="lazy">
              <img src="img/cercano/web/malargue.webp" alt="Melargue" loading="lazy">
              <h2>Malargüe</h2>
              <p>A 1:30 hrs en auto</p>
              <p>Malargüe se encuentra al sur de la provincia de Mendoza y la Ruta 40 pasa por el centro de la ciudad. Esta ruta comunica a Matarque con la Patagonia hacia el sury cona ciudad de Mendoza (352 kmaly San Rafael (88 kms) hacia el norte.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/constitucion.webp" alt="consitucion" loading="lazy">
              <img src="img/cercano/web/constitucion.webp" alt="consitucion" loading="lazy">
              <h2>Constitucion</h2>
              <p>A 1:30 hrs en auto</p>
              <p>Constitución es una ciudad y comuna de la provincia de Talca, ubicada en a región del Malle, en la zona centra de Chile. Es conocida como la perla del Maule, y se destaca por sus formaciones, rocosas, com la Pedra de la Iglesia y el Arco de los Enamorados. Es la ciudad costera con más poblacion de la región.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/iloca.webp" alt="Iloca" loading="lazy">
              <img src="img/cercano/web/iloca.webp" alt="Iloca" loading="lazy">
              <h2>Iloca</h2>
              <p>A 1:30 hrs on auto</p>
              <p>lloca es una aldes costera ubicada en la comuna de Licanten, Provincia de Curico, en la Region de Maule en la zona central de Chile. Es el principal balneario de la provincia de Curicó.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/llico.webp" alt="Llico" loading="lazy">
              <img src="img/cercano/web/llico.webp" alt="Llico" loading="lazy">
              <h2>Llico</h2>
              <p>A 1:30 hrs on auto</p>
              <p>Esta ubicación de 20 kilómetros del pueblo de vichuquén hacia la costa. Caleta LLico es el balneario de largas playas arenas negras y rudos acantilados lleno de salvaje vegetación. Esta extensa Playa de arenas grises, con dunas de gran tamaño, esta situada en la desembocadura del lago vichuquén y es ideal para la práctica de deportes como son el motocross, enduro y jepp fun race.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/torca.webp" alt="Torca" loading="lazy">
              <img src="img/cercano/web/torca.webp" alt="Torca" loading="lazy">
              <h2>Torca</h2>
              <p>A 1:30 hrs en auto</p>
              <p>Laguna Torca está ubicada en la Región del Maule, provincia de Curicó, comuna de vichuquén. La reserva representa uno de los ambientes húmedos más importantes de la zona central del país, ya que tiene una gran densisdad y diversidad de avifauna, la que, en parte no es posible encontrar en otros lugares de la zona central.</p>
            </div>
            <div class="mic-item">
              <img src="img/cercano/mobile/vichuquen.webp" alt="Vichuquen" loading="lazy">
              <img src="img/cercano/web/vichuquen.webp" alt="Vichuquen" loading="lazy">
              <h2>Vichuquén</h2>
              <p>A 20 minutos en auto</p>
              <p>Vichuquén es una comuna costera de la provincia de Curicó, que esta ubicada en la Región del Maule en la zona central de Chile. Vichuquén se ubica en el extremo noreste de la provincia, abarcando la zona occidental de la Cordillera de la costa y las planicies costeras.</p>
            </div>
          </div>
        </div>

        <div class="mic-footer">
          <div class="mic-indicators">
            <ol>
              <li class="mic-indicator active" data-idx="0"></li>
              <li class="mic-indicator" data-idx="1"></li>
              <li class="mic-indicator" data-idx="2"></li>
              <li class="mic-indicator" data-idx="3"></li>
              <li class="mic-indicator" data-idx="4"></li>
              <li class="mic-indicator" data-idx="5"></li>
              <li class="mic-indicator" data-idx="6"></li>
              <li class="mic-indicator" data-idx="7"></li>
              <li class="mic-indicator" data-idx="8"></li>
              <li class="mic-indicator" data-idx="9"></li>
              <li class="mic-indicator" data-idx="10"></li>
              <li class="mic-indicator" data-idx="11"></li>
              <li class="mic-indicator" data-idx="12"></li>
              <li class="mic-indicator" data-idx="13"></li>
              <li class="mic-indicator" data-idx="14"></li>
            </ol>
          </div>
          <div class="mic-arrows">
            <button class="mic-arrow" data-step="prev" aria-label="Anterior">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="mic-arrow" data-step="next" aria-label="Siguiente">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>


    </div>




  </section>

  <section id="galeria">

    <div class="container">
      <img src="img/vista2.webp" alt="Vista aerea loteo en san rafael, corzaón del maule" loading="lazy">
      <img src="img/vista3.webp" alt="hermosas parcelas en el maule" loading="lazy">
      <img src="img/vinedos_san_rafael.webp" alt="Loteo viñas del maule" loading="lazy">
      <img src="img/vinas_racimo_uva.webp" alt="Loteo cercano a viñas" loading="lazy">
      <img src="img/vista4.webp" alt="Vista aerea" loading="lazy">
      <img src="img/rio_claro.webp" alt="Río CLaro" loading="lazy">
    </div>

  </section>
  <footer id="contacto">

    <div class="container">
      <h2>Contáctanos</h2>
      <ul>
        <li>
          <a href="#">
            <img src="img/iconos/instagram.svg" class="svg-purple" alt="Icono Instagram">
            Instagram
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/iconos/facebook.svg" class="svg-purple" alt="Icono Facebook">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://wa.me/+56979060671?text=hola, estoy interesado en el proyecto Brisas de San Rafael" target="_blank">
            <img src="img/iconos/whatsapp.svg" class="svg-purple" alt="Icono Whatsapp">
            +569 7906 0671
          </a>
        </li>
      </ul>
    </div>

    <nav>
      <div>
        <img src="img/iconos/logo-loteo.webp" class="logo" alt="logo loteo Brisas de San Rafael" loading="lazy">

      </div>
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#proyecto">Proyecto</a>
        </li>
        <li>
          <a href="#vista360">Vista 360º</a>
        </li>
        <li>
          <a href="#galeria">Galería</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>


    <section id="owner">
      <a href="https://www.rodpropiedades.cl/" target="_blank">
        <img src="/img/logo-rod.webp" alt="ROD Propiedades" loading="lazy">
      </a>
    </section>


  </footer>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>


  <?php if (ENVIRONMENT == 'production') {  ?>
    <script src="/js/app.min.js?v=<?php echo VERSION ?>"></script>
  <?php } else { ?>
    <script src="/js/app.js"></script>
    <script src="/js/panoramico.js"></script>
    <script src="/js/multi-item-carousel.js"></script>
  <?php } ?>

</body>

</html>