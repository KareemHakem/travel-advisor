import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import useStyle from "./style";

const Map = () => {
  const classes = useStyle();
  const isMobile = useMediaQuery("(min-width: 600px");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDIFsYAASjDgzFBwsVXD-p1K-EtGO2ejx4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
