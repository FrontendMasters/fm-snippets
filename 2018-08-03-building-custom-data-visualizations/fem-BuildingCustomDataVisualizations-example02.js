//part 1
yearScoreGenre = _.map(data, d => {
  let wins = d.Awards.match(/(\d+) win/);
  wins = wins ? wins[1] : 0;
  console.log(wins);
  return {
    date: new Date(d.Released),
    score: +d.Metascore,
    genre: d.Genre.split(", ")[0]
  };
});

//part 2
vegalite({
  width: 600,
  data: { values: yearScoreGenre },
  mark: "line",
  encoding: {
    x: { type: "temporal", field: "date" },
    y: { type: "quantitative", field: "score" },
    color: { type: "nominal", field: "genre" }
  }
});
