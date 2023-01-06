const removeSlashFromPagination = () => {
  if (document.querySelector(".swiper-pagination")) {
    document.querySelector(".swiper-pagination").innerHTML = document
      .querySelector(".swiper-pagination")
      .innerHTML.replace(" / ", "");
  }
};
export default removeSlashFromPagination;
