import React from 'react';
export var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return React.createElement("button", { onClick: onClick }, label);
};
