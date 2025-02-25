/** @odoo-module **/

import {ActionMenus} from "@web/search/action_menus/action_menus";
import { registry } from "@web/core/registry";
//import core from 'web.core';
//var _t = core._t;
import { _t } from "@web/core/l10n/translation";
let access_action_registryId = 0;
export const STATIC_ACTIONS_GROUP_NUMBER = 1;
export const ACTIONS_GROUP_NUMBER = 100;

ActionMenus.prototype.getActionItems = async function(props){
    const access_hide_actions = await this.orm.call("user.management", "access_search_action_button", [1, this.props.resModel]);

    let access_async_callback_Actions = (props.items.action || []).map((access_action) =>
        Object.assign({ key: `action-${access_action.description}` }, access_action)
    );

    if(access_hide_actions.length){
        access_async_callback_Actions  = access_async_callback_Actions.filter(val => {
            return !access_hide_actions.includes(val.description);
        });
    }
    return (access_async_callback_Actions || []).map((action) => {
            if (action.callback) {
                return Object.assign(
                    { key: `action-${action.description}`, groupNumber: ACTIONS_GROUP_NUMBER },
                    action
                );
            } else {
                return {
                    action,
                    description: action.name,
                    key: action.id,
                    groupNumber: action.groupNumber || ACTIONS_GROUP_NUMBER,
                };
            }
        });

}