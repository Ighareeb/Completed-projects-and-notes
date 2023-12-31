let index = 0;

function changeColors() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple"]
    
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[index++];

    if(index > colors.length - 1){
        index = 0;
        }
    }

