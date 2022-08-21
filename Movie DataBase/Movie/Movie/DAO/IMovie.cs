using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Movie.Models;

namespace Movie.DAO
{
   public interface IMovie
    {
        List<MovieModel> getAllMovies();
        MovieModel getMovie(int id);

        MovieModel addMovie(MovieModel movieToAdd);

        void updateMovie(int id, MovieModel movieToUpdate);

        void deleteMovie(int id);

        MovieModel copyMovie(int id, MovieModel movieToCopy);
        
    }
}
