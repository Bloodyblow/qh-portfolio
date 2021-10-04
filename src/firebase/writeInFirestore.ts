import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export interface MessageItf {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const writeContactMessage = async (data: MessageItf) => {
  const db = firebase.firestore()
  await db.collection(`contacts`)
  .doc().set({
    ...data,
    timeStamp: firebase.firestore.Timestamp.fromDate(new Date())
  })
}