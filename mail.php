$name = $_POST['yourName']
$userPhone = $_POST['yourPhone']

$orderSoon = $_POST['orderRoof33']

$numberOfRooms = $_POST['orderRoof']

$numberOfSquare = $_POST['send-result-polzunok']

$typeOfObject = $_POST['nertype']

$mail->isSMTP()
$mail->Host = 'smtp.gmail.com'
$mail->SMTPAuth
$mail->Username = 'samarashj95@gmail.com'
$mail->Password = 'cnf,skmyscnm1412'

$mail->setForm = 'samarashj95@gmail.com'
$mail->addAddress = 'samarasha95@gmail.com'

$mail->isHTML(true)

$mail->Subject = 'Заявка з сайту демонтаж'
$mail->Body = '1. name: ' .$name. '<br>2. Number: ' .$userPhone. '<br>3. rooms: ' .$numberOfRooms. '<br>4. Square: ' .$numberOfSquare. '<br>5. type: ' .$typeOfObject. '<br>6. when: ' .$orderSoon
$mail->AltBody = ''

if(!$mail->send() {
 echo 'Error'
} else {
    echo 'Access!'
}