/**
 * Handles delete todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoDeleteHandler(server, req, res) {
    let todoId =  req.params.todoId;

    return server.db.models()
        .then(models => models.Todo.destroy({
                where: {
                    id: todoId
                }
        }))
        .then(() => ({data: {id: todoId}}));
}


