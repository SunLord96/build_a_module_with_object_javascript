var historyPost = {
    getPost: function () {
        let localData = JSON.parse(localStorage.getItem('history-post'));
        return localData;
    },
    addPost: function () {
        if(this.checkPost()){
            ...
        }else{
            
        }
    },
    checkPost: function ($id) {
        let storePost = this.getPost();
        let hasPost;
        if(...){
            hasPost=true
        }else{
            hasPost=false
        }
        return hasPost;
    }
}
historyPost.checkPost();