/**
 * Handles update todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoUpdateHandler(server, req, res) {
    return server.db.models()
        .then(models => models.Todo.findOne({
            where: {
                id: req.body.id
            }
        }))
        .then(result => result.update({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
        }))
        .then(result => ({data: result.dataValues}));
}


