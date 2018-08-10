import React from "react";
import { bool } from "prop-types";
import { Spring, Transition } from "react-spring";
import Loading from "../containers/Loading";

const withLoadingScreen = WrappedComponent =>
  class LoadingScreen extends React.PureComponent {
    static propTypes = {
      loading: bool.isRequired
    };

    componentWilLReceiveProps(nextProps) {
      console.log("next", nextProps);
    }

    render() {
      const { loading } = this.props;
    //   return (
    //     <Transition
    //       from={{ opacity: 0 }}
    //       enter={{ opacity: 1 }}
    //       leave={{ opacity: 0 }}
    //     >
    //       {loading ? Loading : WrappedComponent}
    //     </Transition>
    //   );

      //   console.log('loading??', loading);

      //   if (loading) return <Loading />;
      //   return <WrappedComponent {...this.props} />;

      //       return (
      // <Spring from={{ opacity: 0 }} to={{ opacity: 100 }}>
      //     {styles =>
      //     <div style={Object.assign({}, styles, style)}>
      //         <WrappedComponent {...this.props} />
      //     </div>}
      // </Spring>
      //       );

      return (
        <Transition
        native
        keys={[Loading, WrappedComponent]}
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 100 }}
        leave={{ opacity: 0, height: 0 }}>
        {[Loading, WrappedComponent].map(item => styles => <animated.li style={{ ...defaultStyles, ...styles }}>{item}</animated.li>)}
      </Transition>
      )
    }
  };

export default withLoadingScreen;
