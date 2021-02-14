import { lazy } from 'react'

export { default as LoadingRoute } from './LoadingRoute/LoadingRoute'

const NewMission = lazy(() => import('./NewMission/NewMission'))
const Upcoming = lazy(() => import('./Upcoming/Upcoming'))
const History = lazy(() => import('./History/History'))
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'))

export { NewMission, Upcoming, History, PageNotFound }
