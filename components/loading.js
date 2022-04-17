import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import classes from "./util-css.module.css";
import Image from "next/image";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`${classes.superCenter} h-100 p-5 mt-5`}>
      <div
        className={`container d-flex flex-column align-items-center ${classes.textrighteous}`}
      >
        <h2>Stay Tune!</h2>

        <Image
          src="/staytune_loading.png"
          alt="photo of michael tran in a hexigon"
          width={450}
          height={450}
        />
        <h2>Page will be ready soon!</h2>
        <h2 className="mb-4">Loading...</h2>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className={`${classes.loadingBox} w-75 `}>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </div>
      </div>
    </div>
  );
}
