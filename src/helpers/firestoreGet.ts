import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'

export default async (collection: string) => {
   const data: FirebaseFirestoreTypes.DocumentData = await (await firestore().collection(collection).get()).docs
   return data
}
