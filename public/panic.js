function openPopup(){
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").classList.add("popup-visible");
}

function closePopup(){
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").classList.remove("popup-visible");
}

document.addEventListener('keydown', function(event){
  if(event.key === panicKey){
      openPopup();
  }
});

function savePanicKey(){
  panicKey = document.getElementById("panicKeyInput").value;
  document.getElementById("panicKeyDisplay").innerText = panicKey;
  closePopup();
}

function resetTab(){
  window.location.href = "about:blank";
}

let panicKey = "=";
document.getElementById("panicKeyDisplay").innerText = panicKey;