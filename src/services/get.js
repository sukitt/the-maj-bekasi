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

export const getNavbar = () => (
    new Promise((resolve, reject) => (
        Instance.get('/nav-item')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getLocation = () => (
    new Promise((resolve, reject) => (
        Instance.get('/location')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getAbouts = () => (
    new Promise((resolve, reject) => (
        Instance.get('/about-bekasi')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)

export const getBlogs = () => (
    new Promise((resolve, reject) => (
        Instance.get('/blog-bekasi')
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    ))
)