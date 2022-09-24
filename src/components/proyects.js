import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { data } from "./dataProyects";
import "../styles/Proyects.css";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Proyects = () => {
  const [width, setWith] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    /* console.log(carousel.current) */
    setWith(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <motion.div className="container-proyect" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width - 70 }}
          className="inner-carrousel"
        >
          {data.map((data, index) => (
            <motion.div
              key={index}
              layoutId={data.id}
              className="card-container"
              onClick={() => setSelectedId(data)}
            >
              <motion.h2>{data.title}</motion.h2>
              <motion.img src={data.img[0]}></motion.img>
              <motion.h5>{data.description}</motion.h5>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence exitBeforeEnter>
          {selectedId && (
            <motion.div
              className="backdrop"
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div className="modal " layoutId={selectedId.id}>
                <motion.h1>{selectedId.title}</motion.h1>
                <motion.div>
                  {" "}
                  <ImageStylus imgs={selectedId.img} cl={selectedId.class}/>
                </motion.div>
                <motion.h5>{selectedId.description}</motion.h5>
                <motion.button
                  className="car-button"
                  onClick={() => setSelectedId(null)}
                >
                  <strong>Cerrar</strong>{" "}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const ImageStylus = ({ imgs, cl }) => {
  return (
    <>
      <div className="container-imgs">
        {imgs &&
          imgs.map((data, index) => (
            <img src={data} key={index} className={cl? cl :"item-img"} />
          ))}
      </div>
    </>
  );
};

export default Proyects;
