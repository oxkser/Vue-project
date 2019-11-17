class Host{
    constructor(){
        this.authorName="";
        this.mydata=[]
    }
    getmessage(name){
        this.$http
        .get(
          `http://localhost:8081/loginUser?phone=${this.phone}&passwd=${this.passwd}`
        )
        .then(response => {
          console.log(response.data);
          this.mydata=response.data;
        })
        .catch(function(err) {
          console.error(err);
        });
    }
}