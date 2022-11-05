import Swal from 'sweetalert2';

export const createAlert = (type,title,message) => Swal.fire({
    icon:type,
    title,
    text:message,
    timer:3000,
    showConfirmButton:false
})