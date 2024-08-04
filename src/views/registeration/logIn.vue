<template>
    <div class="parent">
        <form @submit.prevent="logIn">
            <div class="form-group">
                <label for="input_1">Gmail</label>
                <input type="text" id="input_1"  v-model="user.gmail">
                <p class="error-message"></p>
            </div>
            <div class="form-group">
                <label for="input_2">Password</label>
                <input type="password" id="input_2" required  v-model="user.password">
            </div>
            <div>
                <button class="btn btn-danger" @click="check">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from '@/database/firebase'
import router from '@/router'
export default {
    data(){
        return{
            user:{
                gmail:'',
                password:'',
            }
        }
    },
    methods:{
        logIn(){
            firebase.auth().signInWithEmailAndPassword(this.user.gmail, this.user.password).then(()=>{
                alert('Login successfully');
                router.push({
                    name:'home'
                })
            })
        }
    }
}
</script>
<style scoped>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}

form {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    animation: 1s ease-in-out formAni forwards;
}

@keyframes formAni {
    0% {
        opacity: 0;
        transform: translateX(0);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.form-group {
    margin-bottom: 20px;
}

label {
    color: #42b983;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"]{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.error-message {
    color: red;
    margin-top: 5px;
    font-size: 14px;
}

button {
    padding: 10px 20px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
    
button:hover {
    background-color: #c82333;
}
</style>