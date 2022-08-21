
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" id="logo" href="/"><i class="fa-solid fa-film"></i></a>
            <h1 id="headerTitle" class="title is-uppercase mx-6">
                Movie Database
            </h1>
        </nav>

        <button type="button" class="btn btn-primary mx-3"  v-b-modal.addMovie>Add Movie</button>
        <p></p>

      
        <div>
            <b-table class="m-3" striped hover :items="movies" :fields="fields" >

                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>
                <template #cell(actions)="data">

                    <span>
                        <button type="button" class="btn btn-primary mx-1" v-on:click="loadMovie(data.item)" v-b-modal.editMovie>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" class="btn btn-primary mx-1" v-on:click="loadMovie(data.item)" v-b-modal.copyMovie>
                            <i class="fa-solid fa-copy"></i>
                        </button>
                        <button type="button" class="btn btn-danger mx-1" v-on:click="deleteMovie(data.item)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </span>
                </template>
            </b-table>
        </div>


        <!--<div class="container-fluid" id="movieTable">

        <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th class="th-sm">
                        Movie Name
                    </th>
                    <th class="th-sm">
                        Description
                    </th>
                    <th class="th-sm">
                        Release Year
                    </th>
                    <th class="th-sm">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies" v-bind:key="movie.id">
                    <td> {{movie.name}}</td>
                    <td> {{movie.description}}</td>
                    <td> {{movie.release_Year}}</td>
                    <td>
                        <button type="button" class="btn btn-primary mx-1" v-on:click="editMovie()">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" class="btn btn-primary mx-1" v-on:click="copyMovie(movie.id, movie)">
                            <i class="fa-solid fa-copy"></i>
                        </button>
                        <button type="button" class="btn btn-danger mx-1" v-on:click="deleteMovie(movie.id)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>

                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>
                        Movie Name
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Release Year
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>-->




        <!--<form id="addMovieForm" class="d-none">
            <div class="form-group">
                <label for="name">Movie Name</label>
                <input type="text" maxlength="50" class="form-control" id="movieName" placeholder="Enter Movie Name" v-model="movie.name" required>
                <div class="invalid-feedback">
                    Please Provide a Movie Name.
                </div>
            </div>

            <div class="form-group">
                <label for="Description">Description</label>
                <input type="text" maxlength="500" class="form-control" id="description" placeholder="Enter Movie Description" v-model="movie.description">
            </div>


            <div class="form-group">
                <label for="ReleaseYear">Release Year</label>
                <input type="text" maxlength="4" class="form-control" id="releaseYear" placeholder="Release Year" v-model="movie.release_Year" required>
                <div class="invalid-feedback">
                    Please Provide a Valid Year.
                </div>
            </div>


            <button type="button" class="btn btn-primary" v-on:click="addMovie()">Submit</button>
            <button type="button" class="btn btn-primary mx-3" v-on:click="addMovieShowForm()">Cancel</button>
        </form>

        <form id="editMovieForm" class="d-none">
            <div class="form-group">
                <label for="name">Movie Name</label>
                <input type="text" maxlength="50" class="form-control" id="movieName" placeholder="Enter Movie Name" v-model="movie.name" required>
                <div class="invalid-feedback">
                    Please Provide a Movie Name.
                </div>
            </div>

            <div class="form-group">
                <label for="Description">Description</label>
                <input type="text" maxlength="500" class="form-control" id="description" placeholder="Enter Movie Description" v-model="movie.description">
            </div>


            <div class="form-group">
                <label for="ReleaseYear">Release Year</label>
                <input type="text" maxlength="4" class="form-control" id="releaseYear" placeholder="Release Year" v-model="movie.release_Year" required>
                <div class="invalid-feedback">
                    Please Provide a Valid Year.
                </div>
            </div>


            <button type="button" class="btn btn-primary" v-on:click="editMovie()">Submit</button>
            <button type="button" class="btn btn-primary mx-3" v-on:click="editMovieShowForm(), resetForm()">Cancel</button>
        </form>-->

        <b-modal id="addMovie"
                 ref="modal"
                 tite="Add Movie"
                 @show="resetForm()"
                 @ok="addMovie()">

            <form ref="form" >
                <b-form-group label="Movie Name"
                              label-for="name-input"
                               invalid-feedback= "Movie Name is required"
                             >

                    <b-form-input id="name-input"
                                  v-model="movie.name"
                                  :state="nameState"
                                  invalid-feedback= "Movie Name is required"
                                 required>
                        
                    </b-form-input>
                </b-form-group>

                <b-form-group label="Movie Description"
                              label-for="description-input"
                              :state="movieState">
                    <b-form-input id="description-input"
                                  v-model="movie.description"
                                 
                                  required>

                    </b-form-input>
                </b-form-group>

                <b-form-group label="Release Year"
                              label-for="year-input"
                              invalid-feedback="Four digit Release Year is required"
                              >
                    <b-form-input id="year-input"
                                  v-model="movie.release_Year"
                                  :state="yearState"
                                  type="number"
                                  required>

                    </b-form-input>
                </b-form-group>

            </form>

        </b-modal>


        <b-modal id="editMovie"
                 ref="modal1"
                 title="Edit Movie"
                 @hidden="resetForm()"
                 @ok="editMovie">

            <form ref="form" >
                <b-form-group label="Movie Name"
                              label-for="name-input"
                               invalid-feedback= "Movie Name is required"
                              >
                    <b-form-input id="name-input"
                                  v-model="movie.name"
                                   :state="nameState"
                                  required>

                    </b-form-input>
                </b-form-group>

                <b-form-group label="Movie Description"
                              label-for="description-input"
                             >
                    <b-form-input id="description-input"
                                  v-model="movie.description"
                                  
                                  required>

                    </b-form-input>
                </b-form-group>

                <b-form-group label="Release Year"
                              label-for="year-input"
                              invalid-feedback="Four digit Release Year is required"
                              >
                    <b-form-input id="year-input"
                                  v-model="movie.release_Year"
                                  :state="yearState"
                                  type="number"
                                  required>

                    </b-form-input>
                    
                </b-form-group>

            </form>

        </b-modal>

        <b-modal id="copyMovie"
                 ref="modal2"
                 tite="Copy Movie"
                 
                 @hidden="resetForm()"
                 @ok="copyMovie">

            <form ref="form" >
                <b-form-group label="Movie Name"
                              label-for="name-input"
                            >
                    <b-form-input id="name-input"
                                  v-model="movie.name"
                                  :state="nameState"
                                  readonly
                                  required>

                    </b-form-input>
                </b-form-group>

                <b-form-group label="Movie Description"
                              label-for="description-input"
                              >
                    <b-form-input id="description-input"
                                  v-model="movie.description"
                                  
                                  readonly
                                  required>

                    </b-form-input>
                </b-form-group>

                <b-form-group label="Release Year"
                              label-for="year-input"
                              >
                    <b-form-input id="year-input"
                                  v-model="movie.release_Year"
                                  :state="true"
                                  readonly
                                  required>

                    </b-form-input>
                </b-form-group>

            </form>

        </b-modal>

    </div>
</template>

<script>
    import MovieService from '@/services/MovieService.js'
    import { BModal, VBModal } from 'bootstrap-vue'
    import { BTable} from 'bootstrap-vue'

    export default {
        name: 'MovieList',

        components: {

            BModal,
            BTable


        },
        directives: { 'b-modal': VBModal,
            'b-Table': BTable
        },
        

      
        data() {
            return {
                movies: [],

                
                
                movie: {
                    name: "",
                    description: "",
                    release_Year: "",
                },

                fields: [
                    {
                        key: 'name',
                        label: 'Movie Name',
                        sortable: true,
                        thStyle: { width: "15%" },
                    },
                    {
                        key: 'description',
                        label: 'Movie Description',
                        sortable: false,
                        thStyle: { width: "50%" },
                    },
                    {
                        key: 'release_Year',
                        label: 'Release Year',
                        sortable: true,
                        thStyle: { width: "15%" },

                    },
                    {
                        key: 'actions',
                        label: 'Actions',
                        sortable: false,
                        thStyle: { width: "auto%" },

                    }
                ]  

            }
        
        },
        computed: {
            nameState() {
                return this.movie.name.length > 0 ? true : false
            },
            yearState() {
                return this.movie.release_Year.length === 4  ? true : false
            }
            
        },

        
        
        methods: {

            loadMovie(movie) {
                this.movie = movie
            },

            resetForm() {
                this.movie.name = '';
                this.movie.description = ' ';
                this.movie.release_Year = 0;
                this.retrieveMovies();
                this.movieState = null;
            },

            retrieveMovies() {
                MovieService.getMovies().then(response => {
                    this.movies = response.data
                });

            },

          //  editMovieShowForm() {
           //     const tableToHide = document.getElementById("movieTable");
           //     const formToHide = document.getElementById("editMovieForm");
           //     if (tableToHide.className.includes("d-none")) {
           //         tableToHide.classList.remove("d-none");
            //    } else {
           //         tableToHide.classList.add("d-none");
           //     }
           //     if (formToHide.className.includes("d-none")) {
           //         formToHide.classList.remove("d-none");
           //     } else {
           //         formToHide.classList.add("d-none");
           //     }
           // },

            editMovie(bvModalEvent) {
                
                if (!this.nameState || !this.yearState) {
                    bvModalEvent.preventDefault()
                }
                else {
                    this.movie.release_Year = parseInt(this.movie.release_Year)

                    try {
                        MovieService.updateMovie(this.movie.id, this.movie).then(response => {
                            if (response.status === 200) {
                                alert("Movie successfully Updated");
                                this.movie = {};
                                this.retrieveMovies();
                                // this.editMovieShowForm()
                            }
                        });
                    } catch (error) {
                        console.log(error)

                    }
                }

            },

           // addMovieShowForm() {
           //     const tableToHide = document.getElementById("movieTable");
           //     const formToHide = document.getElementById("addMovieForm");
           //     if (tableToHide.className.includes("d-none")) {
          //          tableToHide.classList.remove("d-none");
          //      } else {
          //          tableToHide.classList.add("d-none");
          //      }
          //      if (formToHide.className.includes("d-none")) {
          //          formToHide.classList.remove("d-none");
           //     } else {
           //         formToHide.classList.add("d-none");
           //     }
          //  },

            addMovie(bvModalEvent) {
                
                
                if (!this.nameState || !this.yearState) {
                    bvModalEvent.preventDefault()
                } else {

                    try {
                        this.movie.release_Year = parseInt(this.movie.release_Year)
                        MovieService.addMovie(this.movie).then(response => {
                            if (response.status === 200) {
                                alert("Movie successfully added");
                                this.movie = {};
                                document.location.reload()

                            } else {
                                alert(ErrorEvent)
                            }
                        });
                    } catch (e) {
                        alert(e)

                    }
                   
                }

            },
            copyMovie() {
                MovieService.copyMovie(this.movie.id, this.movie).then(response => {
                    if (response.status === 200) {
                        alert("Movie successfully copied");
                        this.movie = {};
                        this.retrieveMovies();



                    }
                });
            },


            deleteMovie(movie) {
                if (confirm("Are you sure you want to delete this Movie? This action cannot be undone.")) {
                    MovieService.delete(movie.id).then(response => {
                        if (response.status === 200) {
                            alert("Movie successfully deleted");
                            this.retrieveMovies();
                        }
                    });
                }
            },



          //  checkFormValidity() {
          //      const valid = this.$refs.form.checkValidity()
         //       this.nameState = valid
          //      return valid
          //  },
           
            //handleOk(bvModalEvent) {
                // Prevent modal from closing
               // bvModalEvent.preventDefault()
                // Trigger submit handler
            //    this.handleSubmit()
          //  },
            handleSubmit() {

                if (!this.nameState || !this.yearState) {
                    return
                }
            },
                // Push the name to submitted names
               // this.editMovie(this.movie)
                // Hide the modal manually
              //  this.$nextTick(() => {
                   // this.$bvModal.hide('modal-prevent-closing')
               // })
           // },

        },



        created() {
            this.retrieveMovies();
        }

    }

</script>

<style>

    #logo {
        font-size: 100px;
        color: blue;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;
        margin: 20px;
    }



    #headerTitle {
       
        font-family: cursive;
        color: blue;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
</style>






