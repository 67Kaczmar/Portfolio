document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".image-container img");

  image.onerror = () => {
    const container = document.querySelector(".image-container");
    container.innerHTML = "<p style='color:#89c2ff;'>Brak obrazu — wrzuć plik <b>embed1.png</b> do folderu projektu.</p>";
  };
});
