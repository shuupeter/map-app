<template>
<div>
    <ul>
        <li v-for="(shop) in shops" :key="shop.id">
            {{shop}}
        </li>
    </ul>
</div>
</template>

<script>
import { getFirestore } from "firebase/firestore"
import app from "../plugins/db"
import { collection, getDocs } from "firebase/firestore";

export default{
    data:function(){
        return{shops:[]}
    },
    methods:{
        getShops(){
            const db = getFirestore(app);
            getDocs(collection(db, "shops"))
            .then((querySnapshot)=> {
                querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                let shop = doc.data();
                shop.id = doc.id ;
                this.shops.push(shop);
                console.log(doc.id, " => ", doc.data());
                });
            });
        }
    },
    mounted:function(){
        this.getShops()
    },
}
</script>


