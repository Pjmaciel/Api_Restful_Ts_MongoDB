import { body } from "express-validator";

export const movieCreateValidation = () => {
    //retornar o array que estiver no handleValidation
    return [
        body("title")
            .isString()
            .withMessage("O titulo é Obrigatorio")
            .isLength({min: 5})
            .withMessage("O título ter no minimo 5 caracteres"),
        body("rating")
                .isNumeric().withMessage("A nota precisar ser um numero")
                .custom((value: number) => {
                    if (value <0 || value > 10) {
                        throw new Error("A nota precisa ser entre 0 e 10")
                    }
                    return true;
                }),
        body("description").isString().withMessage("A descrição é Obrigatoria."),
        body("director").isString().withMessage("O nome do diretor é obrigatorio"),
        body("poster").isURL().withMessage("A imagem precisa ser uma URL."),
        

    ]
}