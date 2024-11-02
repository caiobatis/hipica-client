export const resources = {
  ws: 'websocket',
  default: '',
}

export const protocols = {
  http: 'https',
  ws: 'wss',
}

export const URLs = {
  ws: `${protocols.ws}://${resources.ws}.${import.meta.env.VITE_BASE_API}`,
  default: `${protocols.http}://${resources.default}.${
    import.meta.env.VITE_BASE_API
  }`,
}

export const RECAPTCHA_ACTION = 'session'
