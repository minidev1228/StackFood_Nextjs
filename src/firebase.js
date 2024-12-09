import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AlzaSyDbijN8sAdd_Xz4ZIY8f2kCAy9uyin9AdQ",
    authDomain: "ioxdelivery.firebaseapp.com",
    projectId: "ioxdelivery",
    storageBucket: "ioxdelivery.appspot.com",
    messagingSenderId: "571338439432",
    appId: "3TMBVUTaNCG6G71Bjuw34rQqwAsE58cAMBteWw1zxD7",
    measurementId: "G-HK2FZWB2GZ"
  };
  
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setFcmToken) => {
    return getToken(await messaging, {
        vapidKey: '',
    })
        .then((currentToken) => {
            if (currentToken) {
                setFcmToken(currentToken)
            } else {
                setFcmToken()
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )
export const auth = getAuth(firebaseApp)
