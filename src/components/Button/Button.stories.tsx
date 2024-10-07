import React from 'react';
import { Button } from './Button';

export default {
    title: 'Design System/Button',
    component: Button,
};

export const Primary = () => <Button label="Primary Button" onClick={() => alert('Clicked')} />;
