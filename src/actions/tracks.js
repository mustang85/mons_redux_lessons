const mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Bro ro ro'
  },
  {
    id: 3,
    name: 'Tro lo lo'
  },
  {
    id: 4,
    name: 'Жили у бабуси два веселых гуся.. Один серый, другой белый.. Два веселых гуся..'
  }
];

export const asyncGetTracks = () => (dispatch) => {
  setTimeout(() => {
    console.log('I got tracks');
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
  }, 2000)
}

// export const asyncGetTracks = () => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('I got tracks');
//       dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] })
//     }, 2000)
//   }
// }
