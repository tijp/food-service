// import React, { useEffect } from 'react';
// import { withRouter, RouteComponentProps } from 'react-router';

// const ScrollToTop: React.SFC<RouteComponentProps> = props => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [props.location]);

//   return <>{props.children}</>;
// }

// export default withRouter(ScrollToTop);



import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

class ScrollToTop extends React.Component<RouteComponentProps> {
  // Remembers scroll positions based on location->key
  scrollPositions: any = {};

  componentWillMount() {
    if ('scrollRestoration' in window.history)
      window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps: any) {
    const { history: { action }, location: { pathname: newPath = 'root' }} = this.props;
    const { location: { pathname = 'root' }} = prevProps;

    if (action === 'POP') {
      const pos = this.scrollPositions[newPath];
      if (pos) window.scrollTo(pos[0], pos[1]);
    } else {
      this.scrollPositions[pathname] = [window.pageXOffset, window.pageYOffset];
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(ScrollToTop);
