app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{review.name}} gave this {{review.rating}} stars
                <br>
                "{{review.review}}"
                <p class="recommend" v-if="review.recommend === 'yes'">Yes, I would recommend.</p>
                <p class="recommend" v-else-if="review.recommend === 'no'">No, I would not recommend.</p>
            </li>
        <ul>
    </div>
    `
})