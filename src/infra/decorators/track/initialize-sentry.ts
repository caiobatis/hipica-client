import * as Sentry from '@sentry/react'
import React from 'react'
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom'

export const initializeSentry = () => {
  Sentry.init({
    dsn: `${import.meta.env.VITE_SENTRY_DSN}`,
    integrations: [
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect: React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
      Sentry.replayIntegration(),
    ],

    // 1.0 to capture 100%
    tracesSampleRate: 1,
    // Target localhost and your domain
    tracePropagationTargets: ['localhost', `${import.meta.env.VITE_BASE_URL}`],
    // 0.1 to capture 10% of sessions
    replaysSessionSampleRate: 0.1,
    // 1 to capture 100% of sessions with an error
    replaysOnErrorSampleRate: 1,
    // Only enable Sentry in production builds
    enabled: import.meta.env.VITE_APP_ENVIRONMENT === 'production',
  })
}
