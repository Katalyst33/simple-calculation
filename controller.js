new Vue({

    el: '#app',
    data: {
        message: 'Pricing Menu',
        mStatus:
            {
                single: 200,
                married: 500,
                title: '',
                price: null
            },
        roomType: {
            bronze: 1000,
            silver: 2000,
            gold: 3000,
            title: '',
            price: null
        },
        alert: {
            show: false,
            type: 'info',
            message: '',
        },


        childValue: 0,

        counter: 0


    },

    mounted: {},

    methods: {
        increment() {
            this.counter += 20;
        },
        decrement() {
            this.counter -= 20;
        },
        mPrice() {
            if (this.mStatus.title === 'married')
                return this.mStatus.price = this.mStatus.married;

            if (this.mStatus.title === 'single')
                return this.mStatus.price = this.mStatus.single;

        },

        rPrice() {
            if (this.roomType.title === 'gold')
                return this.roomType.price = this.roomType.gold;

            if (this.roomType.title === 'silver')
                return this.roomType.price = this.roomType.silver;

            if (this.roomType.title === 'bronze')
                return this.roomType.price = this.roomType.bronze;


        },


    },



})



