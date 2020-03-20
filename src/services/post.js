import { Instance } from './axios'


export const storeContact = (args) => (
    new Promise((resolve, reject) => (
        Instance.post('/contacts').then((res) => resolve(res)).catch((err) => reject(err))
    ))
)