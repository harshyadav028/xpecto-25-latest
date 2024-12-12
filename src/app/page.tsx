"use client";

import React from "react";
import styles from "@/styles/home.module.css";
import { motion } from "motion/react";
import Image from "next/image";
import BgPic from "@/../public/background.jpg";
import { sleep } from "@/lib/utils";
import SharedContextProvider from "@/lib/context";
import UserHome from "./user/page";

const Home = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  return (
    <>
      {hasAnimated ? (
        <SharedContextProvider><UserHome /></SharedContextProvider>
      ) : (
        <>
          <div className={`${styles.gifbg}`}></div>
          <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-12 bg-[#242424]">
            <Image
              src={BgPic}
              alt={"Background"}
              className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen rounded-xl border-2 border-[#d6d3d1] opacity-20"
            />
            <svg
              viewBox="0 0 460.84 71.974"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10 w-[80vw]"
            >
              <motion.g
                id="svgGroup"
                strokeLinecap="square"
                fillRule="evenodd"
                initial={{ stroke: "#d6d3d1", fill: "#00000000" }}
                animate={{ fill: "#d6d3d1" }}
                transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                onAnimationComplete={async () => (
                  await sleep(1500), setHasAnimated(true)
                )}
              >
                <motion.path
                  d="M 17.188 0.977 L 38.574 25.977 L 59.961 0.977 L 77.295 0.977 L 47.168 36.084 L 77.1 70.997 L 59.863 70.997 L 38.574 46.192 L 17.383 70.997 L 0.098 70.997 L 29.98 36.084 L 0 0.977 L 17.188 0.977 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 155.078 24.512 L 155.078 30.274 A 30.105 30.105 0 0 1 154.818 34.327 A 22.448 22.448 0 0 1 154.004 38.038 A 23.351 23.351 0 0 1 152.365 41.995 A 19.698 19.698 0 0 1 151.099 44.068 A 20.479 20.479 0 0 1 146.875 48.536 A 24.69 24.69 0 0 1 142.196 51.414 A 23.036 23.036 0 0 1 141.87 51.563 A 24.913 24.913 0 0 1 136.638 53.264 A 23.275 23.275 0 0 1 136.597 53.272 A 27.952 27.952 0 0 1 133.703 53.706 A 22.413 22.413 0 0 1 131.592 53.809 L 102.881 53.809 L 102.881 41.114 L 131.592 41.114 Q 134.033 40.918 136.011 40.113 A 10.948 10.948 0 0 0 138.539 38.683 A 9.847 9.847 0 0 0 139.404 37.94 A 9.416 9.416 0 0 0 141.552 34.764 A 10.768 10.768 0 0 0 141.602 34.644 A 10.56 10.56 0 0 0 142.273 32.033 A 13.615 13.615 0 0 0 142.383 30.274 L 142.383 24.512 A 17.749 17.749 0 0 0 141.84 21.574 A 15.051 15.051 0 0 0 141.357 20.118 A 10.955 10.955 0 0 0 140.099 17.755 A 9.579 9.579 0 0 0 139.233 16.7 A 9.494 9.494 0 0 0 136.12 14.535 A 10.873 10.873 0 0 0 135.986 14.478 A 9.959 9.959 0 0 0 133.589 13.816 A 13.328 13.328 0 0 0 131.592 13.672 L 102.979 13.672 A 7.834 7.834 0 0 0 101.511 13.801 Q 100.027 14.084 99.121 14.991 A 4.239 4.239 0 0 0 98.064 16.814 Q 97.868 17.471 97.819 18.259 A 8.7 8.7 0 0 0 97.803 18.799 L 97.803 70.997 L 85.107 70.997 L 85.107 18.799 Q 85.107 14.369 86.574 11.145 A 13.407 13.407 0 0 1 86.89 10.499 A 18.415 18.415 0 0 1 89.137 7.112 A 15.191 15.191 0 0 1 91.333 4.981 Q 93.994 2.881 97.119 1.929 A 23.682 23.682 0 0 1 99.942 1.246 Q 101.48 0.977 102.881 0.977 L 131.592 0.977 A 28.928 28.928 0 0 1 135.669 1.252 A 22.014 22.014 0 0 1 139.307 2.076 A 23.925 23.925 0 0 1 143.262 3.734 A 20.114 20.114 0 0 1 145.337 5.005 A 20.104 20.104 0 0 1 149.519 8.895 A 18.9 18.9 0 0 1 149.78 9.229 A 26.122 26.122 0 0 1 152.808 14.234 A 24.216 24.216 0 0 1 154.471 19.175 A 22.54 22.54 0 0 1 154.541 19.507 A 27.952 27.952 0 0 1 154.975 22.401 A 22.413 22.413 0 0 1 155.078 24.512 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 229.199 58.301 L 229.199 70.997 L 183.398 70.997 Q 180.762 70.997 177.637 70.069 Q 174.512 69.141 171.851 67.017 A 16.257 16.257 0 0 1 168.479 63.308 A 19.917 19.917 0 0 1 167.407 61.499 A 14.704 14.704 0 0 1 166.071 57.721 Q 165.709 56.03 165.641 54.085 A 26.126 26.126 0 0 1 165.625 53.174 L 165.625 7.374 A 6.409 6.409 0 0 1 166.113 4.883 Q 166.602 3.711 167.456 2.832 A 6.022 6.022 0 0 1 169.482 1.465 A 6.434 6.434 0 0 1 171.683 0.985 A 7.46 7.46 0 0 1 172.021 0.977 L 229.199 0.977 L 229.199 13.672 L 178.32 13.672 L 178.32 53.174 Q 178.32 55.02 179.045 56.222 A 3.966 3.966 0 0 0 179.639 56.983 A 4.201 4.201 0 0 0 181.384 58.012 Q 182.047 58.22 182.848 58.278 A 8.897 8.897 0 0 0 183.496 58.301 L 229.199 58.301 Z M 223.486 29.59 L 223.486 42.383 L 183.398 42.383 L 183.398 29.59 L 223.486 29.59 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 303.711 58.301 L 303.711 70.997 L 257.91 70.997 A 17.003 17.003 0 0 1 255.848 70.865 A 21.741 21.741 0 0 1 254.126 70.582 A 19.451 19.451 0 0 1 250.122 69.288 Q 248.145 68.409 246.338 67.017 Q 244.531 65.625 243.14 63.648 A 15.744 15.744 0 0 1 241.492 60.629 A 19.218 19.218 0 0 1 240.918 59.058 A 17.337 17.337 0 0 1 240.236 55.817 A 22.753 22.753 0 0 1 240.088 53.174 L 240.088 18.799 A 17.003 17.003 0 0 1 240.219 16.737 A 21.741 21.741 0 0 1 240.503 15.015 A 19.451 19.451 0 0 1 241.797 11.011 A 17.834 17.834 0 0 1 243.917 7.454 A 19.795 19.795 0 0 1 244.092 7.227 A 15.905 15.905 0 0 1 247.485 4.029 A 15.938 15.938 0 0 1 250.606 2.334 A 19.225 19.225 0 0 1 252.051 1.807 Q 254.639 0.977 257.91 0.977 L 303.711 0.977 L 303.711 13.672 L 257.91 13.672 Q 256.064 13.672 254.862 14.397 A 3.966 3.966 0 0 0 254.102 14.991 A 4.17 4.17 0 0 0 253.093 16.688 Q 252.88 17.345 252.813 18.143 A 9.092 9.092 0 0 0 252.783 18.897 L 252.783 53.174 Q 252.783 55.616 254.126 56.958 A 4.384 4.384 0 0 0 256.139 58.088 Q 256.937 58.301 257.91 58.301 L 303.711 58.301 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 379.004 0.977 L 379.004 13.672 L 351.025 13.672 L 351.025 70.997 L 338.33 70.997 L 338.33 13.672 L 310.303 13.672 L 310.303 0.977 L 379.004 0.977 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 460.84 29.297 L 460.84 42.676 A 32.499 32.499 0 0 1 459.916 50.541 A 28.369 28.369 0 0 1 458.643 54.444 A 27.89 27.89 0 0 1 452.539 63.721 A 27.641 27.641 0 0 1 443.286 69.8 A 29.906 29.906 0 0 1 433.778 71.909 A 35.169 35.169 0 0 1 431.641 71.973 L 414.453 71.973 A 32.106 32.106 0 0 1 406.231 70.946 A 28.729 28.729 0 0 1 402.783 69.8 Q 397.412 67.627 393.506 63.721 A 28.203 28.203 0 0 1 387.378 54.444 A 29.562 29.562 0 0 1 385.248 45.232 A 35.14 35.14 0 0 1 385.156 42.676 L 385.156 29.297 A 31.822 31.822 0 0 1 386.206 21.019 A 28.46 28.46 0 0 1 387.378 17.554 A 28.146 28.146 0 0 1 392.541 9.287 A 26.739 26.739 0 0 1 393.506 8.277 A 28.06 28.06 0 0 1 402.699 2.232 A 31.804 31.804 0 0 1 402.783 2.198 A 29.893 29.893 0 0 1 412.507 0.054 A 34.926 34.926 0 0 1 414.453 0 L 431.641 0 A 31.637 31.637 0 0 1 439.851 1.039 A 28.22 28.22 0 0 1 443.286 2.198 A 28.143 28.143 0 0 1 452.539 8.277 A 27.475 27.475 0 0 1 458.504 17.218 A 31.331 31.331 0 0 1 458.643 17.554 A 30.144 30.144 0 0 1 460.781 27.24 A 35.388 35.388 0 0 1 460.84 29.297 Z M 448.145 42.676 L 448.145 29.297 A 20.401 20.401 0 0 0 447.771 25.318 A 16.61 16.61 0 0 0 446.948 22.486 A 15.371 15.371 0 0 0 444.483 18.254 A 14.343 14.343 0 0 0 443.579 17.261 A 14.942 14.942 0 0 0 438.756 14.055 A 17.232 17.232 0 0 0 438.354 13.892 A 17.466 17.466 0 0 0 433.461 12.773 A 21.092 21.092 0 0 0 431.641 12.696 L 414.453 12.696 A 19.983 19.983 0 0 0 410.383 13.096 A 16.627 16.627 0 0 0 407.69 13.892 Q 404.639 15.088 402.441 17.261 A 14.82 14.82 0 0 0 399.143 22.249 A 17.015 17.015 0 0 0 399.048 22.486 A 17.302 17.302 0 0 0 397.98 26.906 A 21.615 21.615 0 0 0 397.852 29.297 L 397.852 42.676 A 20.401 20.401 0 0 0 398.225 46.656 A 16.61 16.61 0 0 0 399.048 49.488 A 15.073 15.073 0 0 0 401.779 54.012 A 14.299 14.299 0 0 0 402.441 54.712 A 15.249 15.249 0 0 0 407.453 57.987 A 17.463 17.463 0 0 0 407.69 58.082 A 17.377 17.377 0 0 0 412.308 59.172 A 21.337 21.337 0 0 0 414.453 59.278 L 431.543 59.278 A 19.983 19.983 0 0 0 435.613 58.878 A 16.627 16.627 0 0 0 438.306 58.082 Q 441.357 56.885 443.555 54.712 A 14.82 14.82 0 0 0 446.853 49.725 A 17.015 17.015 0 0 0 446.948 49.488 A 17.302 17.302 0 0 0 448.016 45.067 A 21.615 21.615 0 0 0 448.145 42.676 Z"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </motion.g>
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
