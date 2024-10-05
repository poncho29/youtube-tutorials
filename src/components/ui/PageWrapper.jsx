import PropTypes from 'prop-types';

import { Header } from "./Header";

export const PageWrapper = ({ urlVideo, children }) => {
  return (
    <div>
      <Header urlVideo={urlVideo} />

      { children }
    </div>
  )
}

PageWrapper.propTypes = {
  urlVideo: PropTypes.string,
  children: PropTypes.node.isRequired,
}
