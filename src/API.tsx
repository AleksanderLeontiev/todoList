import {db} from "./firebase/config";

export function getCollection(collection: string): Promise<any> {
    return db.collection(collection).get().then(snapshort => {
        const items = snapshort.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return items;
    });
}
