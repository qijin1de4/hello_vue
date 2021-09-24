<template>
    <div class="text-center">
        <button class="btn btn-success" :class="btnColor" @click="showMe = !showMe">Go</button>
        <transition
            enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__rotateOut"
            @enter = 'transitionColor'
            @enter-cancelled = 'successColor'
            @after-enter = 'successColor'
            @leave = 'transitionColor'
            @after-leave = 'resetColor'>
            <h2 v-if="showMe"> Animate Me</h2>
        </transition>
    </div>
</template>

<script>

export default {
    name : 'App',
    data() {
        return {
            showMe: false,
            btnColor: "btn-secondary"
        }
    },
    methods:{
        transitionColor() {
            this.btnColor="btn-warning"
            console.log("set btnColor to 'btn-warning'")
        },
        activeColor() {
            
        },
        successColor() {
            this.btnColor = 'btn-success'
        },
        resetColor() {
            this.btnColor = 'btn-secondary'
        }
    }
}
</script>