import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from './layouts/Movie';
import Header from './layouts/Header';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

function App() {

  const initialState = {
    movies: [],
    errorMessage: "",
    isLoading: true,
  };
  
  const reducer = (state,action) => {
    switch(action.type) {
      case 'FETCH_DATA_SUCCESS':
        console.log(action.payload.data)
        return{
          ...state,
          isLoading:false,
          movies: action.payload.data,
          errorMessage: ''
        }
        case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          isLoading: false,
          movies: [],
          errorMessage: action.payload.error
        }
    
      default:
        return {...state}
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [search,setSearch] = useState("Man");
  const {isLoading, movies, errorMessage} = state

  const getApi = async(searchData) => {
      try {
        const omdbApi = `http://www.omdbapi.com/?i=tt3896198&apikey=94b194bb&s=${searchData}`;
        const response = await axios.get(omdbApi);
        const data = response?.data;
  
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: { data: data }
        })
  
        return true;
      } catch (error) {
  
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          payload: { error: error.message }
        })
      }
  }

  useEffect(() => {
    getApi(search)
  },[search])

  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <Movie state={state}/>
    </div>
  );
}

export default App;
