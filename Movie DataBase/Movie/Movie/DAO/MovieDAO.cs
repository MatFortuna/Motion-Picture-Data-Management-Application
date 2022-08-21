using MongoDB.Driver.Core.Configuration;
using Movie.Models;
using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie.DAO
{
    public class MovieDAO : IMovie

    {
        private string ConnectionString { get; }
        public MovieDAO(string connectionString)
        {
            ConnectionString = connectionString;
        }
        public MovieModel addMovie(MovieModel movieToAdd)
        {
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("INSERT into MotionPictures (Name, Description, Release_Year) VALUES(@name,@description,@release_Year); SELECT SCOPE_IDENTITY();");
                cmd.Parameters.AddWithValue("@name", movieToAdd.name);
                cmd.Parameters.AddWithValue("@description", movieToAdd.description);
                cmd.Parameters.AddWithValue("@release_Year", movieToAdd.release_Year);
                cmd.Connection = connection;
                movieToAdd.id = Convert.ToInt32(cmd.ExecuteScalar()); // returns first column of first row.. getting the id in this case.
                
            }
            return movieToAdd;
        }

        public MovieModel copyMovie(int id, MovieModel movieToCopy)
        {
        
            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand("INSERT into MotionPictures (Name, Description, Release_Year) SELECT Name, Description, Release_Year FROM MotionPictures WHERE ID=@ID; SELECT SCOPE_IDENTITY();");
                    cmd.Parameters.AddWithValue("@name", movieToCopy.name);
                    cmd.Parameters.AddWithValue("@description", movieToCopy.description);
                    cmd.Parameters.AddWithValue("@release_Year", movieToCopy.release_Year);
                    cmd.Parameters.AddWithValue("@ID", id);
                    cmd.Connection = connection;
                    movieToCopy.id = Convert.ToInt32(cmd.ExecuteScalar()); // returns first column of first row.. getting the id in this case.

                }
                return movieToCopy;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public void deleteMovie(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand("DELETE from MotionPictures WHERE ID =@movieID");
                    cmd.Parameters.AddWithValue("@movieID", id);
                    cmd.Connection = connection;
                    cmd.ExecuteNonQuery(); //Executes a Transact-SQL statement against the connection and returns the number of rows affected.
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public List<MovieModel> getAllMovies()
        {
            List<MovieModel> output = new List<MovieModel>();
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "SELECT * FROM MotionPictures";
                cmd.Connection = connection;
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    output.Add(createMovie(reader));
                }
            }

            return output;

        }


        public MovieModel getMovie(int id)
        {
            MovieModel output = null;
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "SELECT * FROM MotionPictures WHERE ID =@movieID";
                cmd.Parameters.AddWithValue("@movieID", id);
                cmd.Connection = connection;
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    output = createMovie(reader);
                }
            }
            return output;
        }

        public void updateMovie(int id, MovieModel movieToUpdate)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand("UPDATE MotionPictures SET Name =@name, Description =@description, Release_Year =@release_Year WHERE ID =@ID");
                    cmd.Parameters.AddWithValue("@name", movieToUpdate.name);
                    cmd.Parameters.AddWithValue("@description", movieToUpdate.description);
                    cmd.Parameters.AddWithValue("@release_Year", movieToUpdate.release_Year);
                    cmd.Parameters.AddWithValue("@ID", id);
                    cmd.Connection = connection;
                    cmd.ExecuteNonQuery();
                }
                
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        private MovieModel createMovie(SqlDataReader data)
        {
            MovieModel output = new MovieModel();
            output.id = Convert.ToInt32(data["ID"]);
            output.name = Convert.ToString(data["Name"]);
            output.description = Convert.ToString(data["Description"]);
            output.release_Year = Convert.ToInt32(data["release_Year"]);
            return output;
        }
    }
}

