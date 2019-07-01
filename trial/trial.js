doctype html
html
head
title #{ pageTitle } | #{ siteName }


const localMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    next();
}

app.use(localMiddleWare);


const movieDetail = (req, res) => {
    const { params: { id } } = req;
    const details = getMovieById(id);
    if (details = true) {
        res.render("detail", { pageTitle: "Details", details });
    } else {
        res.render("404")
    };
}


const movies = (req, res) => {
    const movies = getMovies();
    res.render("home", { pageTitle: "Movies", movies });
}

const filtering = (req, res) => {
    const { query: { year: year1, rating: rating1 } } = req;
    const yearFilter = getMovieByMinimumYear(year1);
    const rateFilter = getMovieByMinimumRating(rating1);
    res.render("movies", {
        pageTitle: "Filtering", year1, rating1, yearFilter, rateFilter
    })
}