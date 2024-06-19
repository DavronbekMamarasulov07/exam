import axios from "../api/axios.js";

const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const $swiperWrapper = document.querySelector(".swiper-wrapper");

const renderBlog = async () => {
  const response = await axios.get("/blogs");
  const data = response.data.data;

  data.forEach((blog) => {
    const $swiperSlide = document.createElement("div");
    $swiperSlide.className= "swiper-slide"
    $swiperSlide.innerHTML  = `
            <div class="swipper-slide-img">
                <a href="./src/pages/blog.html?blog-id=${blog._id}">
                    <img id="swipper-slide-img" src="${blog.image}" alt="${blog.title}">
                </a>
            </div>
            <div class="swipper-slide-body">
                <strong class="swiper-slide-body-title" >
                    ${blog.title.slice(0,20)}  
                </strong>
                <p class="swiper-slide-body-description" >
                    ${blog.description.slice(0,60)}...
                </p>
            </div>
            <div class="swiper-slide-footer">
                <img src="./src/images/img.png" alt="img">
                <div class="swiper-slide-footer-info">
                    <p class="blog-author">
                        Ibrokhim Jalalov
                    </p>
                    <span class="author">
                        Author
                    </span>
                </div>
            </div>
        `
    $swiperWrapper.appendChild($swiperSlide)
  });
};

renderBlog()