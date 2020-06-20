import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
// import  from "../constants/colors";

function Status({ }) {
//   const classes = useStyles({ block });
// className={classes.dot}
  return (
    <Box display="flex" alignItems="center">
      <span ></span>
      <span>
      </span>
    </Box>
  );
}

// const useStyles = makeStyles((theme) => ({
//   dot: ({ online, loading }) => {
//     const color = loading
//       ? colors.warning
//       : online
//       ? colors.success
//       : colors.danger;
//     return {
//       borderRadius: "50%",
//       display: "inline-block",
//       width: 5,
//       height: 5,
//       backgroundColor: color,
//     };
//   },
//   text: ({ online }) => ({
//     fontSize: theme.typography.pxToRem(14),
//     display: "block",
//     lineHeight: 1.5,
//     fontWeight: "400",
//     letterSpacing: 1,
//     paddingLeft: 5,
//     color: online ? colors.text : colors.faded,
//   }),
// }));

Status.propTypes = {
  block: PropTypes.any,
};

export default Status;
