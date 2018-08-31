//part 1
monthGenrePopularity = _.map(data, d => {
  return {
    date: new Date(d.Released),
    genre: d.Genre.split(", ")[0],
    votes: +d.imdbVotes.replace(/\,/g, "")
  };
});

//part 2
vegalite({
  data: { values: monthGenrePopularity },
  mark: "rect",
  encoding: {
    x: { field: "date", type: "ordinal", timeUnit: "month" },
    y: { field: "genre", type: "nominal" },
    color: { type: "quantitative", aggregate: "count", field: "*" }
  }
});
