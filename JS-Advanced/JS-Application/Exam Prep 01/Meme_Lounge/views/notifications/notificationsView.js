import { renderNotification } from '../../helpers/renderHtml.js';
import { notificationsTemplate } from './notificationsTemplate.js';


function getView(message) {
    let templateResult = notificationsTemplate(message);
    renderNotification(templateResult);
    setTimeout(() => renderNotification(null), 3000);
}

export default {
    getView,
}