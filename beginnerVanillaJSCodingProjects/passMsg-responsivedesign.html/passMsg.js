const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        getMessage();
    }
});

let getMessage = () =>{
    document.getElementById('message-output').innerHTML = messageInput.value;
    messageInput.value = '';
}
