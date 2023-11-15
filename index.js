var started = false;

var movesCounter = -2;

$(".card-image").click(function () {
  movesCounter++;
  $("#move-counter").text("Moves: " + movesCounter);
});

$("body").click(function () {
  started = true;
  $("#h1-heading").text("Started");
});

var slot1 = Math.floor(Math.random() * 4 + 1);

do {
  var slot2 = Math.floor(Math.random() * 4 + 1);
} while (slot1 == slot2);

do {
  var slot3 = Math.floor(Math.random() * 4 + 1);
} while (slot3 == slot1 || slot3 == slot2);

do {
  var slot4 = Math.floor(Math.random() * 4 + 1);
} while (slot4 == slot3 || slot4 == slot2 || slot4 == slot1);

var slot5 = Math.floor(Math.random() * 4 + 1);

do {
  var slot6 = Math.floor(Math.random() * 4 + 1);
} while (slot6 == slot5);

do {
  var slot7 = Math.floor(Math.random() * 4 + 1);
} while (slot7 == slot5 || slot7 == slot6);

do {
  var slot8 = Math.floor(Math.random() * 4 + 1);
} while (slot8 == slot5 || slot8 == slot6 || slot8 == slot7);

$(".image-1").click(function () {
  $(".image-1").attr("src", "./images/card" + slot1 + ".jpg");
  setTimeout(function () {
    $(".image-1").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-2").click(function () {
  $(".image-2").attr("src", "./images/card" + slot2 + ".jpg");
  setTimeout(function () {
    $(".image-2").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-3").click(function () {
  $(".image-3").attr("src", "./images/card" + slot3 + ".jpg");
  setTimeout(function () {
    $(".image-3").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-4").click(function () {
  $(".image-4").attr("src", "./images/card" + slot4 + ".jpg");
  setTimeout(function () {
    $(".image-4").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-5").click(function () {
  $(".image-5").attr("src", "./images/card" + slot5 + ".jpg");
  setTimeout(function () {
    $(".image-5").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-6").click(function () {
  $(".image-6").attr("src", "./images/card" + slot6 + ".jpg");
  setTimeout(function () {
    $(".image-6").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-7").click(function () {
  $(".image-7").attr("src", "./images/card" + slot7 + ".jpg");
  setTimeout(function () {
    $(".image-7").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

$(".image-8").click(function () {
  $(".image-8").attr("src", "./images/card" + slot8 + ".jpg");
  setTimeout(function () {
    $(".image-8").attr("src", "./images/Card-Back.jpg");
  }, 500);
});

let firstClick = [];
let secondClick = [];

function clickStore(clickNoOne, clickNoTwo) {
  if (clickNoOne == clickNoTwo) {
    $("img[src|=" + "'" + firstClick[0] + "'" + "]").addClass("green-border");
    console.log("clickStore: Correct");
  } else {
    console.log("clickStore: Wrong");
  }
}

$(".card-image").click(function () {
  $(".set-1").click(function () {
    var clickOne = $(this).attr("src");
    firstClick.unshift(clickOne);
  });
  $(".set-2").click(function () {
    var clickTwo = $(this).attr("src");
    secondClick.unshift(clickTwo);
  });
  $(".set-2").click(function () {
    clickStore(firstClick[0], secondClick[0]);
    setTimeout(function () {
      clickStore("a", "b");
    }, 500);
  });
});
