import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  allData: state.allData
});
function Shop(props) {
  const { gotData } = props.allData;
  const createList = games => {
    if (games) {
      return games.map(game => (
        <li key={game.id}>
          <Link to={`/shop/${game.id}`} style={{ textDecoration: "none" }}>
            {game.name}
            <img src={game.background_image} alt="gameImg" />
          </Link>
        </li>
      ));
    }
  };

  return (
    <div className="shop">
      <ul className="shop-list">{createList(gotData)}</ul>
    </div>
  );
}
export default connect(mapStateToProps, null)(Shop);
