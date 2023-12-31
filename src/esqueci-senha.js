const form   = document.getElementById('form');
        const campos = document.querySelectorAll('.required');
        const spans  = document.querySelectorAll('.span-required');
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


        function setError(index){
            campos[index].style.border = '1px solid #e63636'
            spans[index].style.display = 'block';
        }
    
        function removeError(index){
            campos[index].style.border = ''
            spans[index].style.display = 'none';
        }
        
    
        function emailValidate(){
            if(!emailRegex.test(campos[0].value))
            {
                setError(0);  
            }
            else{
                removeError(0);
            }
        }
    