import React from 'react';
import { Button } from './Button';
export default {
    title: 'Design System/Button',
    component: Button,
};
export var Primary = function () { return React.createElement(Button, { label: "Primary Button", onClick: function () { return alert('Clicked'); } }); };
