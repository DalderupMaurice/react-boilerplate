import { compose } from 'recompose';
import { connect } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';

import AuthenticatedLayout from './AuthenticatedLayout';

const mapStateToProps = () => ({

})

export default compose(
  connect(mapStateToProps),
)(AuthenticatedLayout);
