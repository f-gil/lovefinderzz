import smtplib
import email.message
import sys

def enviar_email(corpoEmail, destinatario): 
    corpo_email = corpoEmail
        
    msg = email.message.Message()
    msg['Subject'] = 'Alguém tem um crush em você!'
    msg['From'] = 'noreply.lovefinderzz@gmail.com'
    msg['To'] = destinatario
    password = 'love_bgc22'
    msg.add_header('Content-Type', 'text/html')
    msg.set_payload(corpo_email )

    s = smtplib.SMTP('smtp.gmail.com: 587')
    s.starttls()
    s.login(msg['From'], password)
    s.sendmail(msg['From'], [msg['To']], msg.as_string().encode('utf-8'))
    print('Email enviado')


enviar_email(sys.argv[1], sys.argv[2])