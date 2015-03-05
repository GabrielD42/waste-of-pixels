$(document).ready(function() {
var current = 0;

function previousIndex() {
  var previous = current - 1;
  if(previous == -1) {
    previous = $(".slide").size() -1;
  }
  return previous;
}

function nextIndex() {
  var next = current + 1;
  if(next == $(".slide").size()) {
    next = 0;
  }
  return next;
}

function removeClasses() {
  $(".slide").each(function(index) {
    if(index != current) {
      $(this).removeClass("active fadeInRight fadeInLeft fadeOutRight fadeOutLeft");
    }
  });
}

function nextElement() {
  removeClasses();
  $($(".slide")[current]).addClass("fadeOutLeft");
  current = nextIndex();
  setTimeout(function() {
    $($(".slide")[current]).addClass("active fadeInRight");
  }, 300);
  setTimeout(function() {
    $($(".slide")[previousIndex()]).removeClass("active fadeOutLeft");
  }, 750);
}

function previousElement() {
  removeClasses();
  $($(".slide")[current]).addClass("fadeOutRight");
  current = previousIndex();
  setTimeout(function() {
    $($(".slide")[current]).addClass("active fadeInLeft");
  }, 300);
  setTimeout(function() {
    $($(".slide")[nextIndex()]).removeClass("active fadeOutRight");
  }, 750);
}

Mousetrap.bind('left', previousElement);
Mousetrap.bind('right', nextElement);

$(".previous").click(previousElement);
$(".next").click(nextElement);

function openModal() {
  $(".modal").removeClass("hidden").addClass("active");
}

function closeModal() {
  $(".modal").removeClass("active");
  setTimeout(function() {
    $(".modal").addClass("hidden");
  }, 750);
}

$(".information").click(openModal);
$(".close").click(closeModal);
});
