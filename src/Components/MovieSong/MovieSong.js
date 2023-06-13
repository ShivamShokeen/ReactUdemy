import React, { Fragment, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSong,
  removeSong,
  addMovie,
  removeMovie,
  resetSong,
  reset,
} from "../../ReactRedux/StoreRedux";

const MovieSong = () => {
  const dispatch = useDispatch();

  let songList = useSelector((state) => {
    return state.songs;
  });

  let movieList = useSelector((state) => {
    return state.movies; //reducer of configureStore key name
  });

  const handleClick = (event) => {
    dispatch(addSong(Math.random().toString(36).substring(2, 7) + " Song"));
  };

  const handleRemove = (event) => {
    dispatch(removeSong(event));
  };

  const handleClickMovie = (event) => {
    dispatch(addMovie(Math.random().toString(36).substring(2, 7) + " Movie"));
  };

  const handleRemoveMovie = (event) => {
    dispatch(removeMovie(event));
  };

  const resetAll = () => {
    dispatch(reset());
    // dispatch(resetMovie());
  };

  const renderSongList = songList.map((v, i) => {
    return (
      <Fragment key={i + 1}>
        <div className="row">
          <div className="col">
            <p>
              <b>Song Name : </b>
              <span>{v}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger"
                value={v}
                onClick={() => {
                  handleRemove(v);
                }}
                key={i}
              >
                <i className="fa fa-trash cursorPointer"></i>
              </button>
            </p>
            <br></br>
          </div>
        </div>
      </Fragment>
    );
  });

  const renderMovieList = movieList.map((v, i) => {
    return (
      <Fragment key={i + 2}>
        <div className="row">
          <div className="col">
            <p>
              <b>Movie Name : </b>
              <span>{v}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger"
                value={i}
                onClick={() => {
                  handleRemoveMovie(v);
                }}
              >
                <i className="fa fa-trash cursorPointer"></i>
              </button>
            </p>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 mb-3       ">
          <button className="btn btn-danger" onClick={resetAll}>
            Reset
          </button>
        </div>
        <div className="col-12">
          <div className="card p-3">
            <div className="card-title">
              <div className="row">
                <div className="col-6">
                  <h4>Movie Playlist</h4>
                </div>

                <div className="col-6">
                  <button
                    onClick={handleClickMovie}
                    value={"movie"}
                    className="btn btn-primary"
                  >
                    <i className="fa fa-add "></i> Playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">{renderMovieList}</div>
          </div>
        </div>

        <div className="col-12 mt-5">
          <div className="card p-3">
            <div className="card-title">
              <div className="row">
                <div className="col-6">
                  <h4>Song Playlist</h4>
                </div>

                <div className="col-6">
                  <button
                    onClick={handleClick}
                    value={"song"}
                    className="btn btn-primary"
                  >
                    <i className="fa fa-add "></i> Playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">{renderSongList}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieSong;
