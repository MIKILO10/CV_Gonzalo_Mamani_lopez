
 function irLinkedln(){
    var Logo = document.getElementById("logo");
    Logo.onclick = function (e) {
        Swal.fire({
           
            icon: 'success',
            title: 'Redireccionando',
            showConfirmButton: false,
            timer: 1200
          })
          setTimeout( function() { window.location.href = "https://www.linkedin.com/in/gjem10/"; }, 1202 );

 }}

 