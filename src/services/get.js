import { Instance } from "./axios";

export const getSliders = (args) => (
    new Promise((resolve, reject) => (
        Instance.get('/head-slider')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)