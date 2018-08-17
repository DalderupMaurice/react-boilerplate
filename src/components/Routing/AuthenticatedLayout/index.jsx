import { compose } from "recompose";
import { connect } from "react-redux";

import AuthenticatedLayout from "./AuthenticatedLayout";

const mapStateToProps = state => ({
  ...state
});

export default compose(connect(mapStateToProps))(AuthenticatedLayout);
