// grafiki.js
document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".folder");

  folders.forEach(folder => {
    folder.addEventListener("click", () => {
      const folderName = folder.getAttribute("data-folder");

      switch (folderName) {
        case "miniaturki":
          alert("Otwieranie folderu: Miniaturki Minecraft (strona w przygotowaniu)");
          break;

        case "embed":
          // Przejście do nowej podstrony embedy.html
          window.location.href = "embedy.html";
          break;

        case "gui":
          alert("Otwieranie folderu: GUI PixelArt (strona w przygotowaniu)");
          break;

        default:
          console.warn("Nieznany folder:", folderName);
      }
    });
  });
});
