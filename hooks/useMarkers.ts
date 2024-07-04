import { Unsubscribe, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig";

export default function useMarkers() {

    const [markers,setMarkers] = useState<any[]>([]);

    useEffect(()=>{
        let unsubscribe : Unsubscribe | null = null;

        const fetch = async ()=>{

            const querys = query(collection(db,'marker'));

            unsubscribe = await onSnapshot(querys,(snapshot)=>{
                const getMarker = snapshot.docs.map((doc)=>{
                    return {
                        ...doc.data(),
                        id : doc.id
                    }
                }) as any[];
                setMarkers(getMarker);
            });

        }

        fetch();

        return ()=>{
            unsubscribe && unsubscribe();
        }

    })

    return markers;

}
