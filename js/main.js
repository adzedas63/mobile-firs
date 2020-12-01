$(function () {



  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrows_right.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrows_left.svg" alt="prev arrow"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {

        }
      },
    ]
  });

});


let btns = document.querySelectorAll("*[data-modal-btn]");

for(let i = 0; i<btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let name = btns[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='"+name+"']");
    modal.style.display = "block";
    let close = modal.querySelector(".close__modal__window");
    close.addEventListener('click', function() {
      modal.style.display = "none";
    })
  })
}

window.onclick = function(e) {
  if(e.target.hasAttribute('data-modal-window')) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for(let i = 0; i<modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
}