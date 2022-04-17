const stickyHeader = () => {
  const header = document.querySelector(".js-header");

  let prevPosY = window.scrollY;
  if (window.scrollY > 10) {
    header.classList.add("not-top");
  }

  window.addEventListener("scroll", () => {
    const posY = window.scrollY;
    if (posY < 10) {
      header.classList.remove("not-top");
    } else {
      header.classList.add("not-top");
    }
    if (posY < prevPosY || posY <= 0) {
      header.classList.remove("hide");
    } else {
      header.classList.add("hide");
    }
    prevPosY = posY;
  });
};

export default stickyHeader;
