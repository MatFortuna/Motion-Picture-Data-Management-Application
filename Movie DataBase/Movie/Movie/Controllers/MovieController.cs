using Microsoft.AspNetCore.Mvc;
using Movie.DAO;
using Movie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Movie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovie movieDAO { get; }

        public MovieController(IMovie movieDAO)
        {
            this.movieDAO = movieDAO;
        }

        // GET api/<MovieController>
        [HttpGet]
        public List<MovieModel> GetAllMovies()
        {
            return movieDAO.getAllMovies();
        }

        // GET api/<MovieController>/5
        [HttpGet("{id}")]
        public MovieModel GetMovie(int id)
        {
            return movieDAO.getMovie(id);
        }

        // POST api/<MovieController>
        [HttpPost]
        public MovieModel AddMovie([FromBody] MovieModel movieToAdd)
        {
          return movieDAO.addMovie(movieToAdd);
        }
        [HttpPost("{id}")]
        public MovieModel CopyMovie(int id,[FromBody] MovieModel movieToCopy)
        {
           
          return movieDAO.copyMovie(id, movieToCopy);
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void UpdateMovie(int id, [FromBody] MovieModel movieToUpdate)
        {
            movieDAO.updateMovie(id, movieToUpdate);
        }


        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            movieDAO.deleteMovie(id);
        }
    }
}
