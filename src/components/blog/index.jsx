import React from "react";
import "./blog.css";
import catalogIcon from "../../assets/catalog-icon.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { ArrowTop } from "../icons";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 2,
      image: blog2,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 3,
      image: blog3,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
  ];

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Блог</h1>
        <button className="hammaKatalog">
          Перейти в блог <img src={catalogIcon} alt="catalogIcon" />
        </button>
      </div>
      <div className="blog-content">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="blog-card-center">
              <h3>{post.title}</h3>
              <ArrowTop color="rgba(0, 0, 0, 1)" />
            </div>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
