import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar">
      <motion.div
        className="progress-inner"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
      ></motion.div>
    </div>
  );
}

export default ProgressBar;
