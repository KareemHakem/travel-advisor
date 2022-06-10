import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import useStyle from "./style";

const Map = () => {
  const classes = useStyle();
  const isMobile = useMediaQuery("(min-width: 600px");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact>
                                    
      </GoogleMapReact>
    </div>
  );
};

export default Map;
