<template src="./ratingcard.html"></template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import './ratingcard.css';

export default defineComponent({
    name: 'RatingCard',
    props: {
        title: {
            type: String,
            default: 'Título del producto'
        },
        description: {
            type: String,
            default: 'Descripción breve del producto'
        },
        initialPrice: {
            type: Number,
            default: 2.99
        },
        initialRating: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const price = ref(props.initialPrice);
        const rating = ref(props.initialRating);
        const hoverRating = ref(0);

        const displayPrice = computed(() => price.value.toFixed(2));

        const increasePrice = () => {
            price.value = Math.round((price.value + 0.01) * 100) / 100;
        };

        const decreasePrice = () => {
            if (price.value > 0.01) {
                price.value = Math.round((price.value - 0.01) * 100) / 100;
            }
        };

        const setHoverRating = (value: number) => {
            hoverRating.value = value;
        };

        const resetHoverRating = () => {
            hoverRating.value = 0;
        };

        const setRating = (value: number) => {
            rating.value = value;
        };

        return {
            price,
            displayPrice,
            rating,
            hoverRating,
            increasePrice,
            decreasePrice,
            setHoverRating,
            resetHoverRating,
            setRating
        };
    }
});
</script>

<style src="./ratingcard.css" scoped></style>