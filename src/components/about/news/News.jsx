import React from "react";
import { GoDash } from "react-icons/go";
import "./news.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import NewsSlider from "../../slider/news-slider/NewsSlider";

const News = () => {
  const news = [
    {
      imageUrl:
        "https://imgs.search.brave.com/E_s9mnD8ZxmSxHexW1UgS0q1Ah13jELeOPjKeKohfOk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzI1LzEyLzQ4/LzM2MF9GXzIyNTEy/NDg1Nl9mN29nSlE1/MUJHSlNJZ2hJRkV0/eUpqa0tQaXJrc1RJ/Ti5qcGc",
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit la.",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/d2k-PxAxuyzxkRalP_iyayHO1zeWn0zpIX-Zdt-1uSM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTIzNjIwNC9waG90/by90ZWNobm9sb2d5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1fZjFiY044OTY3/VmIyLTluSTJNOExD/T1R5TjlDSlJhQk5v/bW5KNzg2TXpZPQ",
      caption: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/Md6bknP9ji9XYZpDM05ySsfqFU_EyAm6KV9PZy7-Xdk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRldW0uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEwL0lvVC13YXRl/ci1tYW5hZ2VtZW50/X3NvaWxlc3MtYWdy/aWN1bHR1cmUuanBn",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/22eoz78Cr-6PSaJBSm3OL1qGhklnV-ci0Wq0i0KUMe4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdGVxLmNvbS9o/dWJmcy9CbG9nL1Nt/YXJ0JTIwV2F0ZXIl/MjBNYW5hZ2VtZW50/JTIwVXNpbmclMjBJ/b1QuanBn",
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit labor.",
    },
  ];

  return (
    <div className="news-disp">
      <Slide left>
        <div className="news-top">
          <h1>Stay updated on our latest news</h1>
          <article>
            - Check our news blog on how Majiup is transforming lives in Africa
            and beyond.
          </article>
        </div>
      </Slide>
      <Zoom>
        <div className="news-bottom">
          <div className="news-content">
            <NewsSlider news={news} />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default News;
