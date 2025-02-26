/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Widget } from "@web/views/widgets/widget";
class ColorPallet extends Widget {
    constructor(parent) {
        super(parent);
    }
    pallet_1() {
        $(':root').css({
            "--light-theme-primary-color": "#1ea8e7",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#1ea8e7b3',
        });
    }
    pallet_2() {
        $(':root').css({
            "--light-theme-primary-color": "#75ab38",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#75ab38b3',
        });
    }
    pallet_3() {
        $(':root').css({
            "--light-theme-primary-color": "#ed6789",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#ed6789b3',
        });
    }
    pallet_4() {
        $(':root').css({
            "--light-theme-primary-color": "#a772cb",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#a772cbb3',
        });
    }
    pallet_5() {
        $(':root').css({
            "--light-theme-primary-color": "#eb5858",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#eb5858b3',
        });
    }
    pallet_6() {
        $(':root').css({
            "--light-theme-primary-color": "#8c6f46",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#8c6f46b3',
        });
    }
    pallet_7() {
        $(':root').css({
            "--light-theme-primary-color": "#007a5a",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#007a5ab3',
        });
    }
    pallet_8() {
        $(':root').css({
            "--light-theme-primary-color": "#cc8631",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#cc8631b3',
        });
    }
    pallet_9() {
        $(':root').css({
            "--light-theme-primary-color": "#0097a7",
            "--light-theme-primary-text-color": "#ffffff",
            "--primary-rgba": '#0097a7b3',
        });
    }
    custom_color_pallet(record_dict) {
        $(':root').css({
            "--light-theme-primary-color": record_dict.light_primary_bg_color,
            "--light-theme-primary-text-color": record_dict.light_primary_text_color,
            "--primary-rgba": record_dict.light_primary_bg_color+'b3',
        });
    }
    header_color_pallet(record_dict) {
        $(':root').css({
            "--header-vertical-mini-text-color": record_dict.header_vertical_mini_text_color,
            "--header-vertical-mini-bg-color": record_dict.header_vertical_mini_bg_color,
        });
    }
    menu_shape_color_pallet(record_dict) {
        var converthex = Math.round(record_dict.menu_shape_bg_color_opacity * 255).toString(16);
        if (converthex.length === 1) {
            var hex = "0" + converthex;
        }
        else{
            var hex = converthex
        }
        $(':root').css({
            "--menu-shape-bg-color": record_dict.menu_shape_bg_color + hex,
        });
    }
    custom_app_drawer_color_pallet(record_dict) {
        $(':root').css({
            "--app-drawer-custom-bg-color": record_dict.appdrawer_custom_bg_color,
            "--app-drawer-custom-text-color": record_dict.appdrawer_custom_text_color,
        });
    }
    
};
export { ColorPallet }; 