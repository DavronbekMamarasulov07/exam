
import axios from "../api/axios.js";
import { saveToLocalStorage } from "../utils/index.js";

const $blogTitle = document.querySelector("#new-post-title");
const $blogImg = document.querySelector("#new-post-img");
const $blogHashtag = document.querySelector("#new-post-hashtag");
const $blogDescription = document.querySelector("#new-post-description");
const $blogAuthor = document.querySelector("#new-post-author");
const $blogForm = document.querySelector("#new-blog-form");
const $blogContent = document.querySelector(".new-blog")




function Blog(title, description, image, tags, author) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.author = author;
}

const createNewBlog = async (e) => {
    e.preventDefault();

    const blogTitle = $blogTitle.value;
    const blogDescription = $blogDescription.value;
    const blogImg = $blogImg.value;
    const blogHashtag = $blogHashtag.value;
    const blogAuthor = $blogAuthor.value;

    const formValues = new Blog(blogTitle, blogDescription, blogImg, blogHashtag, blogAuthor);
    console.log(formValues);

    try {
        const response = await axios.post("/blogs", formValues);
        const data = response.data;
        console.log(data);

        
        saveToLocalStorage('token');

        $blogForm.reset();


        setTimeout(() => {
            location.replace(location.origin + "/index.html");
        }, 3000); 


        alert("Blog created successfully!");
    } catch (error) {
        console.error("Error creating blog:", error);
        alert("Failed to create blog. Please try again.");
    }
};

$blogForm.addEventListener("submit", createNewBlog);
