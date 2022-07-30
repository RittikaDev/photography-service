import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import Contact from "../Contact/Contact";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filter, setFilter] = useState([]);
  const [notFiltered, setNotFiltered] = useState(true);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);
  console.log(gallery);

  const filterCategory = (category) => {
    if (category === "all") {
      setFilter(gallery);
    } else if (category === "Wedding") {
      setNotFiltered(false);
      setFilter(gallery.filter((item) => item.category === category));
    } else if (category === "OutDoor") {
      setNotFiltered(false);
      setFilter(gallery.filter((item) => item.category === category));
    }
  };
  return (
    <>
      <div className="container mt-5" id="gallery">
        <div className="filter mb-5 text-center">
          <button
            onClick={() => {
              filterCategory("all");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              filterCategory("Wedding");
            }}
          >
            Wedding
          </button>
          <button
            onClick={() => {
              filterCategory("OutDoor");
            }}
          >
            Outdoor
          </button>
        </div>
        <div className="gallery ">
          {notFiltered
            ? gallery.map((image) => (
                <motion.div layout key={image.id}>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <img src={image.image} alt={image.name} />
                  </motion.div>
                </motion.div>
              ))
            : filter.map((image) => (
                <motion.div layout key={image.id}>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <img src={image.image} alt={image.name} />
                  </motion.div>
                </motion.div>
              ))}
        </div>
      </div>
      <div className="slider">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 4,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 6,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 4,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 6,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
