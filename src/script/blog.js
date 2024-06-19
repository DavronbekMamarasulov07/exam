
import axios from "../api/axios.js";

const newUrl = location.search;
const url = new URLSearchParams(newUrl).get("blog-id");

const $blogTitle = document.querySelector("#blog-info-title");
const $blogTag = document.querySelector("#blog-tag");
const $blogImg = document.querySelector("#blog-img");
const $blogDescription = document.querySelector("#blog-description");

const renderBlog = async () => {
    try {
        const response = await axios(`/blogs/${url}`);
        const data = response.data.data;

        $blogTitle.innerText = data.title;

        if (data.tags && data.tags.length > 0) {
            $blogTag.innerText = "#" + data.tags[0];
        } else {
            $blogTag.innerText = "#no tags";
        }

        $blogImg.src = data.image;
        $blogImg.alt = data.title;
        $blogDescription.innerText = data.description;
    } catch (error) {
        console.log(error);
    }
};

renderBlog();
