
import AppException from '../../../exceptions/AppException.js';

/**
 * Handles delete todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoDeleteHandler() {
    return AppException.reject('Internal error', 'Deleting todos not implemented');
}


