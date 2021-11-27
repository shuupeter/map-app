<template>
    <div>
        <v-form @submit="handleUploadImage">
            <input type="file" class="input">
            <button type="submit">Upload</button>
        </v-form>
    </div>
</template>

<script>
import app from "../plugins/db.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { defineComponent } from '@vue/composition-api'

export default({
    methods:{
        handleUploadImage(e) {
        e.preventDefault();
        const file = e.target[0].files[0]
        console.log(file)
        this.uploadImage(file)
    },
    uploadImage(file) {
        if (!file) return
        const storage = getStorage(app)
        const storageRef = sRef(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
    (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
        }
    },
    (error) => {
        console.log(error)
    },
    () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
        });
    }
);
    }
}
})
</script>