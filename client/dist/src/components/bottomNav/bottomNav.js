"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNav = void 0;
const filter_1 = require("../filter");
const taskAdder_1 = require("../taskAdder");
require("../../css/bottomNav.css");
const BottomNav = (props) => {
    return React.createElement("div", { className: "bottomNav" },
        React.createElement(filter_1.Filter, { setFilter: props.setFilter }),
        React.createElement(taskAdder_1.TaskAdder, null));
};
exports.BottomNav = BottomNav;
//# sourceMappingURL=bottomNav.js.map