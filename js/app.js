document.getElementById( 'generate-pin-button' ).addEventListener( 'click', function () {
    let randomPin = Math.round( Math.random() * 10000 );
    const randomPinText = randomPin + '';
    if ( randomPinText.length == 4 ) {
        document.getElementById( 'generate-pin-input' ).value = randomPin;
    }
} );

document.getElementById( 'key-pad' ).addEventListener( 'click', function ( event ) {
    const number = event.target.innerText;
    const inputNumberField = document.getElementById( 'number-input' );
    if ( isNaN( number ) == true ) {
        if ( number == 'C' ) {
            inputNumberField.value = '';
        }
    }
    else {
        const previousNumber = inputNumberField.value;
        const newNumber = previousNumber + number;
        inputNumberField.value = newNumber;
    }
} );

function varifyPin() {
    const generatedPin = document.getElementById( 'generate-pin-input' ).value;
    const inputPin = document.getElementById( 'number-input' ).value;
    const successMessage = document.getElementById( 'notify-success' );
    const failMessage = document.getElementById( 'notify-fail' );
    let submitCount = 0;
    
    if ( generatedPin == inputPin ) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    let 
}