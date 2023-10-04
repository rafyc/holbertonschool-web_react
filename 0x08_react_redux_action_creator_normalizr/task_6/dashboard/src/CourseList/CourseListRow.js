import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr;

  const rowStyles = {
    backgroundColor: '#f5f5f5ab',
  }
  const headerStyles = {
    backgroundColor: '#deb5b545',
  }

  if (isHeader && textSecondCell === null) tr = <th className={css(styles.colspan)} colSpan={2}>{textFirstCell}</th>;
  else if (isHeader && textSecondCell) tr = (
    <React.Fragment>
      <th className={css(styles.headerRow)}>{textFirstCell}</th>
      <th className={css(styles.headerRow)}>{textSecondCell}</th>
    </React.Fragment>
  ); else tr = (
    <React.Fragment>
      <td className={css(styles.bodyRow)}>{textFirstCell}</td>
      <td className={css(styles.bodyRow)}></td>
    </React.Fragment>
  );

  const applyStyle = isHeader ? headerStyles : textFirstCell === 'Webpack' ? rowStyles : null;

  return <tr style={applyStyle}>{tr}</tr>;
};

const styles = StyleSheet.create({
  headerRow: {
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey',
    padding: '.5rem',
    textAlign: 'left',
  },
  colspan: {
    padding: '.5rem',
    textAlign: 'center',
  },
  bodyRow: {
    padding: '.2rem .5rem',
    textAlign: 'left',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
