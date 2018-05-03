import { ajax } from 'rxjs/observable/dom/ajax'

export const post = (url, data) => {
  return ajax.post(url, data, { 'Content-Type': 'application/json' }).toPromise();
}