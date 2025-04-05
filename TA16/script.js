function toggleParrafo() {
  const parrafo = document.getElementById("miParrafo");
  
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
}
