<template>
    <body>
    <div class="card"
         v-for="(card, index) in styledCards"
         :style="card.style"
         :key="index">
        <img class="card__image" :src="card.img">
        <div class="card__content">
            <h3>{{card.title}}</h3>
            <p>{{card.description}}</p>
        </div>
    </div>
    </body>
</template>

<script>
    const cardsData = [
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',

        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        },
        {
            img:'',
            title: 'Title 3',
            description: '',
        }
    ]

    Vue.directive('scroll', {
        inserted: function (el, binding) {
            let f = function (evt) {
                if (binding.value(evt, el)) {
                    window.removeEventListener('scroll', f)
                }
            }
            window.addEventListener('scroll', f)
        }
    })

    new Vue({
        el: '#app',
        data: {
            cards: cardsData,
            scrollPosition: 0
        },
        filters: {
            oneDecimal: function (value) {
                return value.toFixed(1)
            },
            toStars: function (value) {
                let result = ''
                while(result.length < value) {
                    result+='★'
                }
                return result
            }
        },
        computed: {
            styledCards () {
                return this.cards.map(this.calculateCardStyle)
            }
        },
        methods: {
            onScroll () {
                this.scrollPosition = window.scrollY
            },
            calculateCardStyle (card, index) {
                const cardHeight = 160 // height + padding + margin

                const positionY = index * cardHeight
                const deltaY = positionY - this.scrollPosition

                // constrain deltaY between -160 and 0
                const dY = this.clamp(deltaY, -cardHeight, 0)

                const dissapearingValue = (dY / cardHeight) + 1
                const zValue = dY / cardHeight * 50
                const yValue = dY / cardHeight * -20

                card.style = {
                    opacity: dissapearingValue,
                    transform: `perspective(200px) translate3d(0,${yValue}px, ${zValue}px)`
                }
                return card
            },
            clamp (value, min, max) {
                return Math.min(Math.max(min, value), max)
            }
        }
    })
</script>

<style scoped>
    body {
        background-color: #FEFEFE;
    }
    .card {
        height: 140px;
        background-color: white;
        padding: 5px;
        margin-bottom: 10px;
        font-family: Helvetica;
        box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.5);
    }

    .card__image {
        display: inline-block;
        margin-right: 10px;
    }

    .card__content {
        display: inline-block;
        position: relative;
        vertical-align: top;
        width: calc(100% - 120px);
        height: 140px;
    }

    .card__content h3 {
        margin: 0;
    }
</style>