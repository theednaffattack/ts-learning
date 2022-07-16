
import React from 'react';
import GlobalLayout from './pages/_layout'
import { meta as StaticParkingChallengeMeta } from './pages/parking-challenge'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicLinkList = React.lazy(() => import('./pages/link-list'));
const DynamicParkingChallenge = React.lazy(() => import('./pages/parking-challenge'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/link-list', element: <DynamicLinkList />, },
      { path: '/parking-challenge', element: <DynamicParkingChallenge />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/link-list' },
  { route: '/parking-challenge', meta: StaticParkingChallengeMeta },
]
