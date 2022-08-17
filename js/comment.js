document.getElementById('post').addEventListener('click',function(){
    const textArea=document.getElementById('text-area')
const comment=textArea.value;


const commentContainer=document.getElementById('comment-container')
const newComment=document.createElement('p')

newComment.innerText=comment
commentContainer.appendChild(newComment)
textArea.value=''

})