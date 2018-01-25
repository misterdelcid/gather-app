import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByCategory } from '../actions/filters';
import '../App.css';

const PostListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        const value = e.target.value === 'category' ? props.dispatch(sortByCategory()): props.dispatch(sortByDate());
      }}
    >
      <option value="date">Date</option>
      <option value="category">Category</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(PostListFilters);
