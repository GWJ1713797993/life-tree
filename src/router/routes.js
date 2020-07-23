import error from './module/error'
import app from './module/app'
import main from './module/main'
import happen from './module/happen'
import result from './module/result'

export default [
  ...main,
  ...error,
  ...app,
  ...happen,
  ...result
]
