const heroMenu = document.querySelector(".hero-menu");
const navMenu = document.querySelector(".nav-menu");

heroMenu.addEventListener("click", () => {
    heroMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => 
  n.addEventListener("click", () => {
    heroMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


document.addEventListener('DOMContentLoaded', function () {
  const selectBox = document.querySelector('.select-box');

  selectBox.addEventListener('change', function (event) {
    if (event.target.type === 'radio' && event.target.name === selectBox.dataset.name) {
      const selectedText = event.target.nextElementSibling.querySelector('.select-box__input-text');
    }
  });
});


$(function() {
  const today = new Date();
  const formattedToday = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  $("#datepicker").val(formattedToday);

  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast"
  });
});


   // Initialize slider

   document.addEventListener('DOMContentLoaded', function () {
    var firstInputValueTag = document.getElementById('firstInputValue');
    var secondInputValueTag = document.getElementById('secondInputValue');
    
    firstInputValueTag.addEventListener('click', function () {
        showPopup('popup1', 'princeSlider1Popup', 'popupFirstValue1');
        hidePopup('popup2');
    });


  secondInputValueTag.addEventListener('click', function () {
    showPopup('popup2', 'princeSlider2Popup', 'popupSecondValue2');
    hidePopup('popup1');
});

    function showPopup(popupId, sliderId, popupValueId) {
      var popup1 = document.getElementById('popup1');
      var popup2 = document.getElementById('popup2');
        var popup = document.getElementById(popupId);
        var slider = document.getElementById(sliderId);
        var popupValue = document.getElementById(popupValueId);

        if (popup && slider && popupValue) {
            // Set initial value
            popupValue.textContent = slider.value;

            // Show popup
            popup.style.display = 'block';

            // Update popup value on slider change
            slider.addEventListener('input', function () {
                popupValue.textContent = slider.value;
            });


            // Close popup on close button click
            var popupCloseButton = popup.querySelector('.popup-close');
            if (popupCloseButton) {
                popupCloseButton.addEventListener('click', function () {
                    popup.style.display = 'none';
                });
            }
            slider.addEventListener('dblclick', function () {
              popup.style.display = 'none';
          });

          secondInputValueTag.addEventListener('click', function () {
            popup1.style.display = 'none';
        });

          
        }
    }

    function hidePopup(popupId) {
      var popup = document.getElementById(popupId);
      if (popup) {
          popup.style.display = 'none';
      }
  }
});



