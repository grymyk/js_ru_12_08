import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'

import ContainerList from './components/ContainerList'

render(
    <ContainerList />,
    document.getElementById('container')
);
