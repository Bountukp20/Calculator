console.log('hello world');
        let display = document.getElementById('display');
        let output = document.getElementById('output');
        let result = document.getElementById('result');

        let buttons = Array.from(document.getElementsByClassName('button'));
        buttons.map( button => {
            button.addEventListener('click', (e) => {
                switch(e.target.innerText){
                    case 'AC':
                        display.innerText = "0";
                        result.innerText ="";
                        case 'Del':
                        if(display.innerText){
                            display.innerText = display.innerText.slice(0, -1);
                        }
                        break;
                        case '=':
                            try{
                                result.innerText = eval(display.innerText);
                            }
                            catch{
                                display.innerText = 'Error!';
                            }
                            display.innerText = eval(display.innerText);
                            break;
                        default:
                            display.innerText += e.target.innerText;
                }
            });
        });
