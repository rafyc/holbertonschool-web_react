import React from 'react';
import BodySction from './BodySection';
import { PropTypes } from "prop-types";
import { StyleSheet, css } from 'aphrodite';


const BodySectionWithMarginBottom = (props) => {

  return (
    <div className={css(styles.cmarginBottom)}>
      <BodySction {...props} />
    </div>
  )
}
const styles = StyleSheet.create({
  marginBottom: '40px'
})
BodySectionWithMarginBottom.propTypes = {
  children: PropTypes.node,
}
export default BodySectionWithMarginBottom;
