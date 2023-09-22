import { model, Schema } from "mongoose";

const movieSchema = new Schema({
    title: {type: String},
    rating: {type: Number},
    description: {type: String},
    director: {type: String},
    star:{type: Array},
    poster: {type:String}

},
{
    timestamps: true //altera os logs conforme atualiza as informaçoes
})

export const MovieModel = model("Movie", movieSchema);
