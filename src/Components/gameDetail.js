import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  allData: state.allData
});

const gameDetail = props => {
  const {
    match,
    allData: { gotData }
  } = props;

  const { id } = match.params;

  function getGame(games) {
    if (games)
      return games.filter(game => {
        return game.id.toString() === id;
      })[0];
  }
  const game = getGame(gotData);

  if (game) {
    console.log(game);
    return (
      <div className="game">
        <h1>{game.name}</h1>
        <video src={game.clip.clip} controls autoPlay loop muted />
        <p>{`Game released: ${game.released}`}</p>
        <p>{`Rating: ${game.rating}`}</p>
        <p>{`Genres: ${game.genres.map(genre=>genre.name)}`}</p>
      </div>
    );
  } else {
    return null;
  }
};
export default connect(mapStateToProps, null)(gameDetail);
