export class ListBooks {
     constructor ($http) {
    'ngInject';
      
      this.$http = $http;
         this.readReview();
  }

    readReview(){
        var x=this;
        //alert('Boom');
        this.$http.get('http://localhost:5000/api/readReview').then(function(result){
            //console.log(result.data);
            x.review = result.data;
            console.log(x.review);
            console.log(x.review[0].booktitle);
        });
        
    }
  }