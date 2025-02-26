/** @odoo-module **/
import { UserMenu } from "@web/webclient/user_menu/user_menu";
import { patch } from "@web/core/utils/patch";
import { session } from '@web/session';

patch(UserMenu.prototype, {
    setup() {
        super.setup();
        //  greeting
        var current_time_hr = new Date().getHours().toLocaleString("en-US", { timeZone: session.user_context.tz });
        if ((parseInt(current_time_hr) >= 6) && (parseInt(current_time_hr) < 12)){
            var greeting = "Good Morning"
        } else if ((parseInt(current_time_hr) >= 12) && parseInt(current_time_hr) <= 18) {
            var greeting = "Good Afternoon"
        } else {
            var greeting = "Good Evening"
        }
        this.greeting = greeting
    }
});
