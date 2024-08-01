import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import * as dotenv from 'dotenv'
dotenv.config()
const resend = new Resend(process.env.RESEND_KEY);


@Injectable()
export class AppService {
    async sendMail({domain, sendersName, sendersEmail, reciversName, receiversEmail, subject, emailBody, reply_to}:{domain:string, sendersName:string,sendersEmail:string, reciversName:string, receiversEmail:string, emailBody:string, subject:string, reply_to: string, html?:string}){
      try{
        const mailOptions = {
          from: `${sendersName} <${sendersEmail}@${domain}>`,
          to: receiversEmail,
          subject: subject,
          text: emailBody,
          reply_to: reply_to === undefined ? "no_reply" : reply_to
        }
        console.log(mailOptions)
        const sent = await resend.emails.send(mailOptions)
      if(sent.error !== null) return {status: false, message: 'error sending message', data: null}
      return {status: true, message: 'email sent succesfully', data: sent}
    }catch(e){
      console.log(e.message)
      return {status: false, message: 'error sending message', data: null}
    }
  }
}
