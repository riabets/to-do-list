<template>
    <div id="app"></div>
</template>

<script>

export default {
    name: 'App',
    components: {},
}
</script>

<style lang="scss">
    @font-face {
        font-family: "JosefinSans";
        src: url("~@/assets/font/JosefinSans-Italic.ttf") format("truetype");
    }

    @font-face {
        font-family: "JosefinSans";
        src: url("~@/assets/font/JosefinSans.ttf") format("truetype");
    }

    @mixin primary {
        font-family: "JosefinSans", sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        @include primary;
        margin: 0;
        background-color: #a0d5c7;
        position: relative;
        padding-left: 85px;
        min-height: 100vh;
    }

    #app {
        min-height: 100vh;

        p {
            font-variation-settings: "wght" 100;
            font-size: 30px;
            font-style: italic;
        }
    }
</style>
