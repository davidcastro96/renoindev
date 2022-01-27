$(document).ready(function () {

    $('#btnSend').click(function () {

        var error1 = '';
        var error2 = '';
        var error3 = '';
        var error4 = '';
        var error5 = '';

        // Validando nombre
        if ($('#fname').val() == '') {
            error1 += 'Ingrese su nombre';
        }

        // Validando apellido
        if ($('#lname').val() == '') {
            error2 += 'Ingrese su apellido';
        }

        // Validando email
        if ($('#email').val() == '') {
            error3 += 'Ingrese su email';
        }

        // Validando telefono
        if ($('#phone').val() == '') {
            error4 += 'Ingrese su numero telefonico';
        }

        // Validando mensaje
        if ($('#message').val() == '') {
            error5 += 'Ingrese su mensaje';
        }
        if (error1, error2, error3, error4, error5 == '') {
            
            alert('Datos enviados correctamente');
        } else
            alert('Para nosotros es muy importante esta información, así le ayudaremos en su requerimiento.' + '\n' + '\n' + error1 + '\n' + error2 + '\n' + error3 + '\n' + error4 + '\n' + error5);
            return false;
            
    });
})