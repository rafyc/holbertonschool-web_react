import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Courses actions creators tests', () => {
  it('test action created on select course', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(action);
  });

  it('test action created on unselect course', () => {
    const action = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(action);
  });
});
