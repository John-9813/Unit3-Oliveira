
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_JOBS } from './actionTypes';

export const addFavourite = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company
});

export const removeFavourite = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs
});

export const fetchJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
