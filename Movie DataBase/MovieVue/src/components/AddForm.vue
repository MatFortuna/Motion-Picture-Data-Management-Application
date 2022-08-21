<template>
    <form v-on:submit.prevent="submitForm" class="movieForm">
       
        <div class="form-group">
            <label for="name">Name:</label>
            <input id="name" type="text" class="form-control" v-model="movie.name" autocomplete="off" />
        </div>

        <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" class="form-control" v-model="movie.description"></textarea>
        </div>
        <div class="form-group">
            <label for="releaseDate">Release Year:</label>
            <textarea id="releaseDAte" class="form-control" v-model="movie.releaseDAte"></textarea>
        </div>
        <button class="btn btn-submit">Submit</button>
        <button class="btn btn-cancel" v-on:click.prevent="cancelForm">Cancel</button>
    </form>

</template>

<script>
    export default {
        name: 'AddForm',
        data() {
            return {
                showForm: false,

                movie: {
                    name: "",
                    description: "",
                    releaseDate: "",

                },

            };
        },
    };
</script>

<style scoped>
</style>