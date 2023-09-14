import React from 'react';
import { getFullYear, getFooterCopy } from '../Utils/utils';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
  return (
    <div className={css(styles.footer)}>
      <p className={css(styles.paragraphe)}>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}
const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    borderTop: '3px solid #e1484c',
    width: '100%',
  },
  paragraphe: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
export default Footer;
