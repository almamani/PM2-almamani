const moviesService = require("../services/moviesService");
module.exports = {
    getAllmovies: async (req, res)=>{
        try {
            const movies = await moviesService.getAllMovies();          
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json({error: "Error interno del servidor de Peliculas"})
        }
    }
}