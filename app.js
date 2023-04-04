
  const btns = document.querySelectorAll(".anchors");
  const filterImgs = document.querySelectorAll(".store-item");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      filterImgs.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });

