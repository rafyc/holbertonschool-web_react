import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySection = ({ title, children }) => {
  return (
    <div className={css(styles.cmarginBottom)}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
const styles = StyleSheet.create({
  marginBottom: '40px'
})

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
export default BodySection;
