import { logout } from "../../services/authService.js";


export function logoutHandler(ctx, e) {
    logout()
        .then(() => {
            ctx.page.redirect('/home');
        })

}