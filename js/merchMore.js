function imageBigger() {
  
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // Images
  var img = document.getElementById("merch1");
  var img2 = document.getElementById("merch2");
  // var img3 = document.getElementById("ui1");
  // var img4 = document.getElementById("ui2");
  // var img5 = document.getElementById("ui3");
  // var img6 = document.getElementById("ui4");
 

  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Add onclick for each picture
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // img3.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // img4.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // img5.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // img6.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // img7.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

}

document.addEventListener('DOMContentLoaded', function (event) {
  imageBigger();
});


// JavaScript
Array.prototype.forEach.call(document.querySelector("img"), function (elem) {
  elem.addEventListener("click", function () {
      elem.classList.toggle("enlarged");
  });
});