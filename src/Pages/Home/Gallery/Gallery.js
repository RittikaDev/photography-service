import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filter, setFilter] = useState([]);
  const [notFiltered, setNotFiltered] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
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
        <div className="gallery mx-5">
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
        {data.map((data) => {
          const duration = data.id;
          return (
            <motion.div
              key={data.id}
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: duration / 10,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity,
              }}
            >
              <img src={data.image} alt="" />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
