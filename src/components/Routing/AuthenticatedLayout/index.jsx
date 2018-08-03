import { compose } from "recompose";
import { connect } from "react-redux";

import AuthenticatedLayout from "./AuthenticatedLayout";

const mapStateToProps = () => ({});

export default compose(connect(mapStateToProps))(AuthenticatedLayout);
