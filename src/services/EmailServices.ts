interface IMailTo {
    name: string
    email: string
}

interface IMailMessage{
    subject: string
    body: string
    attachment?: string[]
}

interface IMessageDTO{
    to: IMailTo
    message: IMailMessage
}

// DTO => DATA TRANSFER OBJECT

class EmailService {
    sendMail({ to, message }: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }

}

export default EmailService