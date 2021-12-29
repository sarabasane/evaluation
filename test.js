/**  Déclaration de la constante "conteneur" et création du tableau de logos*/
const $conteneur = $(".conteneur");
const $logogeneral = $('.logoGle');
const $logo1 = $('.img1');
const $logo2 = $('.img2');
const $logo3 = $('.img3');
const $logo4 = $('.img4');
const $logo5 = $('.img5');
const $logo6 = $('.img6');
const $logo7 = $('.img7');
const $logo8 = $('.img8');
const $logo9 = $('.img9');

const tabLogo = [$logo1, $logo2, $logo3, $logo4, $logo5, $logo6, $logo7, $logo8, $logo9];

let compteurClick = 0;

/** Organisation de l'apparition des logos*/
$logo1.css('display', 'flex');
$logo2.css('display', 'none');
$logo3.css('display', 'none');
$logo4.css('display', 'none');
$logo5.css('display', 'none');
$logo6.css('display', 'none');
$logo7.css('display', 'none');
$logo8.css('display', 'none');
$logo9.css('display', 'none');

/** Fonction d'affichage des logos par incrémentation*/
const action = function() {

  $logogeneral.click(function() {
    
    compteurClick++;

    if(compteurClick == 1) {
      $logo1.css('display', 'none');
      $logo2.css('display', 'flex');
      disparitionLogo();
    }
    if(compteurClick == 2) {
      $logo2.css('display', 'none');
      $logo3.css('display','flex');
    }
    if(compteurClick == 3) {
      $logo3.css('display', 'none');
      $logo4.css('display', 'flex');
    }
    if(compteurClick == 4) {
      $logo4.css('display', 'none');
      $logo5.css('display', 'flex');
    }
    if(compteurClick == 5) {
      $logo5.css('display', 'none');
      $logo6.css('display', 'flex');
    }
    if(compteurClick == 6) {
      $logo6.css('display', 'none');
      $logo7.css('display', 'flex');
    }
    if(compteurClick == 7) {
      $logo7.css('display', 'none');
      $logo8.css('display', 'flex');
    }
    if(compteurClick == 8) {
      $logo8.css('display', 'none');
      $logo9.css('display', 'flex');
    }
    if(compteurClick == 9) {
      $logo9.css('display', 'none');
      alert('Félicitations, tu as découvert mon trésor; les compétences que j\'ai à t\'offrir !');
    }
    captureLogo();
    disparitionLogo();
  });
};
action();

/**Fonction d'affichage du score*/
const captureLogo = function() {
  const score = document.querySelector("#compteurScore").innerHTML
  const scoreHTML = document.querySelector("#compteurScore");
  
  let compteur = Number(score);
  scoreHTML.innerHTML = compteur + 1;
};

/** Fonction de calcul des positions maximale d'affichage*/
const getRandomNum = function(num) {
  return Math.floor(Math.random() * 750 + 1);
};

/** Fonction d'affichage aléatoire des logos sur la page*/
const disparitionLogo = function() {
  const w = getRandomNum(850) + "px";
  const h = getRandomNum(- 850) + "px";
  $logogeneral.css('left', w);
  $logogeneral.css('top', h);
};