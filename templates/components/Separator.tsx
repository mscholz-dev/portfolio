import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

const Separator: FC = () => {
  return (
    <motion.div
      className="separator wrapper-padding-x"
      // motion
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
      <span className="separator-line-one" />
      <IconLogo className="separator-icon" />
      <span className="separator-line-one" />
    </motion.div>
  );
};

export default Separator;
