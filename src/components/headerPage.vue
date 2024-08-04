<template>
    <div class="parent">
        <div>
            <h1>Tech Agency</h1>
        </div>
        <nav>
            <router-link class="router" to="/">Home</router-link> |
            <router-link class="router" to="/about">About</router-link> |
            <router-link class="router" to="/service">Service</router-link> |
            <!-- <router-link class="router" to="/login">Login</router-link> |
            <router-link class="router" to="/signup">SignUp</router-link> | -->
        </nav>
    </div>
</template>
<script>
    export default{
        name:'headerPage',
    }
</script>
<style scoped>
    .parent{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: black;
        align-items: center;
    }

    h1,.router{
        font-weight: bold;
        color: #42b983;
    }

    .router{
        display: inline-block;
        position: relative;
        text-decoration: none;
    }

    .router:after{
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform .40s ease-out;
    }

    .router:hover::after{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .router:hover{
        color:aqua;
    }

    .router:focus{
        color:greenyellow;
    }

    h1{
        margin-top: 13px;
    }
</style>