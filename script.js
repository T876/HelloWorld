// Open modal on click
function openModal(modal, spanModal) {
    // Get the modal
    var modal = document.getElementById(modal);

    // Get the <span> element that closes the modal
    var spanModal = document.getElementById(spanModal);

    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    spanModal.onclick = function() {
        modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Copy to clipboard on click
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
  }


  // draws stuff on stuff
  function draw(x, y) {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var altX = x + 10;
      var altY = y - 10;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(altX, altY);
      ctx.lineTo(altX + 30, altY);
      ctx.lineTo(x + 50, y);
      ctx.stroke();
      for (var i = 0; i < 4; i++) {
          ctx.strokeRect(x + (i * 50), y, 50, 50 )
      }
    }
  }