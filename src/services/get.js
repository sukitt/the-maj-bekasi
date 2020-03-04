import { Instance } from "./axios";

export const getSliders = (args) => (
    new Promise((resolve, reject) => (
        Instance.get('/head-slider')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getUnits = () => (
    new Promise((resolve, reject) => (
        Instance.get('/units')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getGallery = () => (
    new Promise((resolve, reject) => (
        Instance.get('/gallery')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getPartnership = () => (
    new Promise((resolve, reject) => (
        Instance.get('/partnership')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)