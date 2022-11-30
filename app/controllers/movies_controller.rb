class MoviesController < ApplicationController

    # render Movies
    def index
        movies = Movie.all
        render json:movies
    end
end
