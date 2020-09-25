var imageDescription = document.getElementById("imageDescribe");
var baseImage = document.getElementById("stoneImage");
var iteration = 0;
var secondIteration = 0;
var objectDirection = "";
var imageDescribeOpacity = 1;
var aboutMePageOpacity = 0;
var contactPageOpacity = 0;
var baseImagePositionX = 350;
var eventName = "";
var imageDescribeOpacityPresentValue = 0;
var aboutMePageOpacityPresentValue = 0;
var contactPageOpacityPresentValue = 0;
var baseImagePositionXPresentValue = 0;
var lastId = 'art';





function myFunction() {


  var imageOpacity = setInterval(setImageOpaque, 1);
  var descriptionOpacity;
  var prevEvent;



  function setImageOpaque() {

    baseImage.style.opacity = "" + (iteration);
    iteration = iteration + 0.01;

    if (iteration > 1) {
      clearInterval(imageOpacity);
      descriptionOpacity = setInterval(setImageDescriptionOpaque, 50);
      iteration = 0;


    }
  }

  function setImageDescriptionOpaque() {
    imageDescription.style.opacity = "" + (iteration);

    iteration = iteration + 0.05;

    if (iteration > 1) {
      clearInterval(descriptionOpacity);


    }
  }

}


function mouseOverButton(event) {
  // console.log(event.id);
  // makeTransparent(event,10,0.3);
  event.style.backgroundColor = "#505050";
  event.style.color = "#F5F5F5";


}

function mouseOutButton(event) {
  // console.log(event.id + " Out of It");
  // makeOpague(event,10,0.3);
  event.style.backgroundColor = "white";
  event.style.color = "#303030";
}

function makeOpague(event, duration, opacity) {

  imageOpacity = setInterval(eventOpague, duration);
  iteration = opacity;

  function eventOpague() {
    event.style.opacity = "" + (iteration);
    iteration = iteration + 0.1;
    if (iteration > 1) {
      clearInterval(imageOpacity);
      iteration = 1;

    }

  }
}

function makeTransparent(event, duration, opacity) {

  imageOpacity = setInterval(eventTransparent, duration);
  iteration = 1;

  function eventTransparent() {
    event.style.opacity = "" + (iteration);
    iteration = iteration - 0.1;
    if (iteration < opacity) {
      clearInterval(imageOpacity);

    }
  }
}

function onClick(event) {
  // console.log(event.id + " clicked");
  iteration = 0;
  if (event.id != lastId) {
    if (event.id === "art") {
      eventName = "art";
      document.getElementById("mainHeading").innerHTML = "Poonam Sehgal";
      imageDescribeOpacity = 1;
      aboutMePageOpacity = 0;
      contactPageOpacity = 0;
      baseImagePositionX = 350;
      disableNavigation();
      imageMoveAndObjectTransparency = setInterval(commonEvent, 30);
    }
    if (event.id === "aboutMe") {
      eventName = "aboutMe";
      document.getElementById("mainHeading").innerHTML = "Poonam Sehgal - About Me";
      imageDescribeOpacity = 0;
      aboutMePageOpacity = 1;
      contactPageOpacity = 0;
      baseImagePositionX = 650;
      disableNavigation();

      imageMoveAndObjectTransparency = setInterval(commonEvent, 30);


    }
    if (event.id === "contact") {
      eventName = "contact";
      document.getElementById("mainHeading").innerHTML = "Poonam Sehgal";
      imageDescribeOpacity = 0;
      aboutMePageOpacity = 0;
      contactPageOpacity = 1;
      baseImagePositionX = 150;
      disableNavigation();
      imageMoveAndObjectTransparency = setInterval(commonEvent, 30);
    }

  }
}

function moveImageHorizontal(positionX) {

  if (positionX > baseImage.getBoundingClientRect().x) {
    objectDirection = "right";

  }
}

function disableNavigation() {
  document.getElementById('art').style.pointerEvents = 'none';
  document.getElementById('aboutMe').style.pointerEvents = 'none';
  document.getElementById('contact').style.pointerEvents = 'none';
}

function enableNavigation() {
  document.getElementById('art').style.pointerEvents = 'auto';
  document.getElementById('aboutMe').style.pointerEvents = 'auto';
  document.getElementById('contact').style.pointerEvents = 'auto';
}

function imageDescribeOpacityChange() {

  imageDescribeOpacityPresentValue = Number(document.getElementById('imageDescribe').style.opacity);

  if (imageDescribeOpacity != imageDescribeOpacityPresentValue) {
    if (imageDescribeOpacity > imageDescribeOpacityPresentValue) {
      imageDescribeOpacityPresentValue = iteration;

    } else {
      imageDescribeOpacityPresentValue = 1 - iteration;
    }
    document.getElementById('imageDescribe').style.opacity = "" + imageDescribeOpacityPresentValue;
    //console.log("Image description opacity will change " + imageDescribeOpacityPresentValue);
  }
}

function aboutMePageOpacityChange() {
  aboutMePageOpacityPresentValue = Number(document.getElementById('aboutMePage').style.opacity)
  if (aboutMePageOpacity != aboutMePageOpacityPresentValue) {
    if (aboutMePageOpacity > aboutMePageOpacityPresentValue) {
      aboutMePageOpacityPresentValue = iteration;
    } else {
      aboutMePageOpacityPresentValue = 1 - iteration;
    }
    document.getElementById('aboutMePage').style.opacity = "" + aboutMePageOpacityPresentValue;
    //console.log("About Me Page  opacity will change " + aboutMePageOpacityPresentValue);

  }
}

function contactPageOpacityChange() {
  contactPageOpacityPresentValue = Number(document.getElementById('contactPage').style.opacity);
  if (contactPageOpacity != contactPageOpacityPresentValue) {
    if (aboutMePageOpacity > aboutMePageOpacityPresentValue) {
      contactPageOpacityPresentValue = iteration;
    } else {
      contactPageOpacityPresentValue = 1 - iteration;
    }
    document.getElementById('contactPage').style.opacity = "" + contactPageOpacityPresentValue;
    //console.log("contact me opacity opacity will change " + contactPageOpacityPresentValue);
  }
}

function baseImagePositionXChange() {
  baseImagePositionXPresentValue = Number(baseImage.getBoundingClientRect().x);

  if (baseImagePositionX > baseImagePositionXPresentValue) {
    baseImage.style.left = (baseImagePositionXPresentValue + (baseImagePositionX - baseImagePositionXPresentValue) * iteration) + "px";
    console.log("left");
  }
  if (baseImagePositionX < baseImagePositionXPresentValue) {
    baseImage.style.left = (baseImagePositionX + (baseImagePositionXPresentValue - baseImagePositionX) * (1 - iteration)) + "px";
    console.log("right" + "base = " + baseImagePositionX + " change value = " + baseImagePositionXPresentValue * (1 - iteration) + " iteration = " + iteration);
  }
}

function commonEvent() {
  secondIteration = secondIteration + 0.001;
  imageDescribeOpacityChange();
  aboutMePageOpacityChange();
  contactPageOpacityChange();
  baseImagePositionXChange();
  iteration = iteration + secondIteration;


  if (iteration > 1) {
    clearInterval(imageMoveAndObjectTransparency);
    iteration = 0;
    secondIteration = 0;
    document.getElementById('imageDescribe').style.opacity = "" + imageDescribeOpacity;
    document.getElementById('aboutMePage').style.opacity = "" + aboutMePageOpacity;
    document.getElementById('contactPage').style.opacity = "" + contactPageOpacity;
    baseImage.style.left = baseImagePositionX + "px";
    enableNavigation();
    lastId = eventName;

  }


}
