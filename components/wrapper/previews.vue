<template>
    <div class="wrapper" v-if="isMovie" :style="{'width':wrapperWidth}" >
        <CardPreview v-for="item in list" :key="item.id" :imageName="item.poster_path" :title="item.original_title" :year="item.release_date" :id="item.id" @selected="selected"/>
    </div>
    <div class="wrapper" v-else :style="{'width':wrapperWidth}">
        <CardPreview v-for="item in list" :key="item.id" :imageName="item.poster_path" :title="item.name" :year="item.first_air_date" :id="item.id" @selected="selected"/>
    </div>
</template>
  
<script>
    export default {
        props:{
            list: {
                type: Array,
                require: true
            },
            isMovie: {
                type: Boolean,
                default: false
            }
        },
        data(){
            const windowWidth = window.innerWidth;
            return{
                windowWidth
            }
        },
        computed:{
            wrapperWidth(){
                return ((232 * Math.trunc(this.windowWidth/232)) + 'px');
            }
        },
        mounted() {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
            })
        },
        methods:{
            selected(id) {
                this.$emit('selected', id)
            }
        }
    }
</script>

<style lang="sass">
.wrapper
    display: flex
    flex-wrap: wrap
    overflow: auto
    @include custom-scrollbar
    margin: 0 auto
</style>
