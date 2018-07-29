import { compose, mapProps } from "recompose";
import { withRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

export default compose(
  withRouter,
  mapProps(props => ({ ...props }))
)(PrivateRoute);
