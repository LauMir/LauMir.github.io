export function showmessage(message, type="success"){
    Toastify({
        text: message,
        duration: 9000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          //background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: type==="success"?"green":"red"
        },
        onClick: function(){} // Callback after click
      }).showToast();

}