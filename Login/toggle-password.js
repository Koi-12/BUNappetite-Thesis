function change()
         {
            var x = document.getElementById('pass').type;

            if (x == 'password')
            {
               document.getElementById('pass').type = 'text';
               document.getElementById('mybutton').innerHTML = '<i class="fas fa-eye"></i>';
            }
            else
            {
               document.getElementById('pass').type = 'password';
               document.getElementById('mybutton').innerHTML = '<i class="fas fa-eye-slash"></i>';
            }
         }

function change()
         {
            var x = document.getElementById('pass2').type;

            if (x == 'password')
            {
               document.getElementById('pass2').type = 'text';
               document.getElementById('mybutton2').innerHTML = '<i class="far fa-eye"></i>';
            }
            else
            {
               document.getElementById('pass2').type = 'password';
               document.getElementById('mybutton2').innerHTML = '<i class="far fa-eye-slash"></i>';
            }
         }         