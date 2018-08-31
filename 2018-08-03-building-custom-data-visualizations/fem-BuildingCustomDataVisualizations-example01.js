//part 1
winsMetascores = _.map(data, d => {
  let wins = d.Awards.match(/(\d+) win/);
  wins = wins ? wins[1] : 0;
  console.log(wins);
  return {
    wins: +wins,
    score: +d.Metascore
  };
});

//part 2
vegalite({
  data: { values: winsMetascores },
  mark: "point",
  encoding: {
    x: { type: "quantitative", field: "score" },
    y: { type: "quantitative", field: "wins" }
  }
});
