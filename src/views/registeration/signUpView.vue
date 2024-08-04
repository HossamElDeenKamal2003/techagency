<template>
    <div class="parent">
        <form @submit.prevent="register">
            <h1>hello</h1>
            <div class="form-group">
                <label for="input_1">Username</label>
                <input type="text" id="input_1" required v-model="user.username">
                <p class="error-message" v-text="usernameError"></p>
            </div>
            <div class="form-group">
                <label for="input_2">Gmail</label>
                <input type="email" id="input_2" required v-model="user.gmail">
                <p class="error-message" v-text="gmailError"></p>
            </div>
            <div class="form-group">
                <label for="input_3">Phone Number</label>
                <!-- Updated v-model to use user.phoneNumber -->
                <input type="tel" id="input_3" required v-model="user.phoneNumber">
                <p class="error-message" v-text="phoneNumberError"></p>
            </div>
            <div class="form-group">
                <label for="input_4">Password</label>
                <!-- Updated v-model to use user.password -->
                <input type="password" id="input_4" required v-model="user.password">
                <p class="error-message" v-text="passwordError"></p>
            </div>
            <div class="form-group">
                <label for="input_5">Repeat Password</label>
                <!-- Updated v-model to use user.repeatedPass -->
                <input type="password" id="input_5" required v-model="user.repeatedPass">
                <p class="error-message" v-text="repeatedPassError"></p>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from '@/database/signup';
import router from '@/router';

export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                username: '',
                gmail: '',
                phoneNumber: '',
                password: '',
                UID: '',
            },
            usernameError: '',
            gmailError: '',
            phoneNumberError: '',
            passwordError: '',
            repeatedPassError: '',
            repeatedPass: '',
            ref: firebase.firestore().collection('users'),
        };
    },
    methods: {
        check() {
            let isValid = true;
            if (!this.checkUsername()) isValid = false;
            if (!this.checkGmail()) isValid = false;
            if (!this.checkPhoneNumber()) isValid = false;
            if (!this.checkPassword()) isValid = false;
            if (!this.checkRepeatedPassword()) isValid = false;
            return isValid;
        },
        checkUsername() {
            this.containsUppercase = /[A-Z]/.test(this.user.username);
            if (this.user.username === '') {
                this.usernameError = '';
                return true;
            } else if (this.containsUppercase) {
                this.usernameError = '';
                return true;
            } else {
                this.usernameError = 'Username must contain an uppercase letter';
                return false;
            }
        },
        checkGmail() {
            this.correctGmail = this.user.gmail.includes('@gmail.com');
            if (this.user.gmail === '') {
                this.gmailError = '';
                return true;
            } else if (this.correctGmail) {
                this.gmailError = '';
                return true;
            } else {
                this.gmailError = 'Gmail must contain @gmail.com';
                return false;
            }
        },
        checkPhoneNumber() {
            if (this.user.phoneNumber === '') {
                this.phoneNumberError = '';
                return true;
            } else if (this.user.phoneNumber.length !== 11) {
                this.phoneNumberError =
                    'Phone number must be 11 digits long and a correct Egyptian number';
                return false;
            } else {
                this.phoneNumberError = '';
                return true;
            }
        },
        checkPassword() {
            this.checkUpper = /[A-Z]/.test(this.user.password);
            if (this.user.password === '') {
                this.passwordError = '';
                return true;
            } else if (this.checkUpper) {
                this.passwordError = '';
                return true;
            } else {
                this.passwordError = 'Must contain an uppercase letter';
                return false;
            }
        },
        checkRepeatedPassword() {
            if (this.user.repeatedPass === '') {
                this.repeatedPassError = '';
                return true;
            } else if (this.user.repeatedPass !== this.user.password) {
                this.repeatedPassError = 'Two password fields must match';
                return false;
            } else {
                this.repeatedPassError = '';
                return true;
            }
        },
        register() {
            if (!this.check()) {
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(this.user.gmail, this.user.password).then((datauser) => {
                alert('Sign up complete Successfully ');
                this.ref.add({
                    name:this.user.username,
                    gmail:this.user.gmail,
                    UID:datauser.user.uid,
                })
                router.push({
                    name: 'login',
                }).catch((error) => {
                    console.error(error.data);
                });
            });
        },
    },
};
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
input[type="tel"] {
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
