import dev from './dev'
import pp from './pp'
import prod from './prod'

interface EnvConfig {
  env: string
  backendUrlBase: string
}

const allConfigs: Record<string, EnvConfig> = { dev, pp, prod }

export const envConfig = allConfigs[import.meta.env.MODE]
