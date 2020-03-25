import { Instance } from './axios'


export const storeContact = (data) => (
    new Promise((resolve, reject) => (
        Instance.post('/contacts', data).then((res) => resolve(res)).catch((err) => reject(err))
    ))
)
export const storeSubscribe = (data) => (
    new Promise((resolve, reject) => (
        Instance.post('/subscribe', data).then((res) => resolve(res)).catch((err) => reject(err))
    ))
)