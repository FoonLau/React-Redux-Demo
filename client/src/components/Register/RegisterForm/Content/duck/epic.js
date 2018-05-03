import 'rxjs/add/operator/map'
import { 
  submitSuccess,
  SUBMIT
} from './duck'

export const submitEpic = (actions$) => 
  actions$
    .ofType(SUBMIT)
    .map(submitSuccess)