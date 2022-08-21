<template>

    <div class="columns">
        <div class="column">
            <MovieList />
        </div>
        

    </div>
</template>

<script>
    
    import MovieList from '@/components/MovieList.vue'

    export default {
        name: 'MovieView',
        components: {
           
            MovieList
        },
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>