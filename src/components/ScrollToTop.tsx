import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

const ScrollToTop: React.SFC<RouteComponentProps> = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return <>{props.children}</>;
}

export default withRouter(ScrollToTop);
