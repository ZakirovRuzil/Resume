<template>
  <header class="container">
        <div class="page-header">
            <div class="logo">
                <a href="#">
                    <!-- <img style="width: 50px; margin-right: -10px;" src="cat.png" alt=""> -->
                    Ruzil.
                </a>
            </div>
            <!-- <input type="checkbox" id="click"> -->

            <label for="click" class="mainicon">
                <div class="menu">
                    <i class='bx bx-menu'></i>
                </div>
            </label>
            <ul>
                <li>
                  <router-link to="/" class="header-link active" style="--navAni:1">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="header-link" style="--navAni:2">About</router-link>
                </li>
                <li>
                    <router-link to="/skills" class="header-link" style="--navAni:3">Skills</router-link>    
                </li>
                <li>
                    <router-link to="/contact" class="header-link" style="--navAni:5">Contact</router-link>
                </li>
            </ul>
            <!-- <label class="mode">
                <input type="checkbox" id="darkbtn">
                <i class='bx bxs-moon'></i>
            </label> -->
        </div>
    </header>
</template>

<script >
import '@/layout/layout-header/script.js'

export default {
  name: 'LayoutHeader'
}
</script>

<style scoped lang="css" src="./styles.css"></style>
