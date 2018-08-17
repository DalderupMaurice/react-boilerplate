import React from "react";
import { bool } from "prop-types";
import Loading from "../containers/Loading";

// TODO use transition for loading screen
// import { Spring, Transition } from "react-spring";

const withLoadingScreen = WrappedComponent =>
  class LoadingScreen extends React.PureComponent {
    static propTypes = {
      loading: bool.isRequired
    };

    render() {
      const { loading } = this.props;

      if (loading) return <Loading />;
      return <WrappedComponent {...this.props} />;

      // Tryout snippets
      //   return (
      //     <Transition
      //       from={{ opacity: 0 }}
      //       enter={{ opacity: 1 }}
      //       leave={{ opacity: 0 }}
      //     >
      //       {loading ? Loading : WrappedComponent}
      //     </Transition>
      //   );

      //       return (
      // <Spring from={{ opacity: 0 }} to={{ opacity: 100 }}>
      //     {styles =>
      //     <div style={Object.assign({}, styles, style)}>
      //         <WrappedComponent {...this.props} />
      //     </div>}
      // </Spring>
      //       );
    }
  };

export default withLoadingScreen;
