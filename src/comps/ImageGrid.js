import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="Uploaded"
            />
          </motion.div>
        ))}
    </div>
  );
}

export default React.memo(ImageGrid);
