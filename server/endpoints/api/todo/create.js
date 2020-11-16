import AppException from '../../../exceptions/AppException.js';

/**
 * Handles create todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoCreateHandler(server, req, res) {
    return server.db.models()
        .then(models => (
            models.Todo.create({
                uuid: req.body.uuid,
                title: req.body.title,
                description: req.body.description,
                priority: req.body.priority,
            }))
        )
        .then(result => ({data: result.dataValues}));
}


