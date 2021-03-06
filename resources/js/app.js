import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'

require('./bootstrap');

createInertiaApp({
    id: 'app',
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})
