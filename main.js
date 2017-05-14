'use stict';
var redditDemoData = {
    'posts' : [
        {
            'postTitle':"Test title",
            'postContent':'Post content for demo',
            'postDate':'02/02/2012'
        }
    ]
}
$(document).ready(function () {
    var ViewEngine = function(){
        this.cardTemplate = "{post_title}<br>{post_date}<br><br>{post_content}";
        this.createCard = function(data){
            card = this.cardTemplate.replace("{post_title}",data.postTitle);
            card = card.replace("{post_date}",data.postDate);
            card = card.replace("{post_content}",data.postContent);
            return card;
        }
        this.renderCard = function(cards,id){
            for(var i=0; i<cards.length;i++)
            {
                $('#'+id).append(cards[i]);
                break;
            }
        }
        this.generateCard = function(data){
           cards = []
           for(var i = 0; i < data.length;i++){
            cards.push(this.createCard(data[i]));
           }
            return cards;
        }
    }

    var Social= function (){
        viewengine = new  ViewEngine();
        this.reddit = {
            blog: function (query){
                response = redditDemoData;
                cards = viewengine.generateCard(response['posts']);
                viewengine.renderCard(cards,'reddit');
            }
        };

    }
    var social = new Social();
    social.reddit.blog('test');
});