import { compose, mapProps } from "recompose";
import { withRouter } from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";

import PrivateRoute from "./PrivateRoute";

export default compose(
  withRouter,
  mapProps(props => ({ ...props }))
)(PrivateRoute);
