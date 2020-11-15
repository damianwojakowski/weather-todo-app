
import AppException from '../../../exceptions/AppException.js';

/**
 * Handles update todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoUpdateHandler() {
    return AppException.reject('Internal error', 'Updating todos not implemented');
}


