import React from "react";
import { connect } from "react-redux";
import { fetchTweets } from "./actions";

const FetchTweets = ({ fetchTweets }) => {
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
};

export default connect(null, { fetchTweets })(FetchTweets);
