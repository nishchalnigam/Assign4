export class PostReview {
    
     constructor ($http) {
    'ngInject';
      
      this.$http = $http;
  }

    postReview(){
        console.log("Review Posted");
        
        this.$http.post('http://localhost:5000/api/postReview',this.book);
        alert('Review Posted');
        
    }

  }