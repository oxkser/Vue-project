<template>
    <div class="productbox">
        <productlist1 :product="products"></productlist1>
    </div>
</template>
<script>
import productlist1 from '@/views/public/productlist1'
export default {
    name:"AuthorProduct",
    components:{
        productlist1
    },
    data(){
        return{
            products:[],
            authorName:""
        }
    },
    mounted:function() {
        let authorName=this.$route.query.authorname;
        console.log(authorName);
        this.$http.get("http://localhost:8081/authorNameSearch?authorName="+authorName)
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(function(err) {
          console.error(err);
        })

    }
}
</script>
<style scoped>
.productbox{
    text-align:left;
}
</style>