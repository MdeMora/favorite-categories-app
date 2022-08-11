import { Environments, HOSTNAMES } from 'constants/environments'

export const fetchData = (url: string) => {
  const nodeEnv = process.env.NODE_ENV

  if (nodeEnv === Environments.Development) {
    return fetch(`${HOSTNAMES.DEVELOPMENT}${url}`)
  }
  if (nodeEnv === Environments.Test) {
    return fetch(`${HOSTNAMES.TEST}${url}`)
  }
  if (nodeEnv === Environments.Production) {
    return fetch(`${HOSTNAMES.PRODUCTION}${url}`)
  }
}
