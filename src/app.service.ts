import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import * as dotenv from 'dotenv'
import { getHtml } from './helpers';
dotenv.config()
const resend = new Resend(process.env.RESEND_KEY);


@Injectable()
export class AppService {
    async sendMail({domain, sendersName, sendersEmail, reciversName, receiversEmail, subject, intro, emailBody, outro, reply_to}:{domain:string, intro:string, outro:string, sendersName:string, sendersEmail:string, reciversName:string, receiversEmail:string, emailBody:string, subject:string, reply_to: string, html?:string}){
      try{
        const html = getHtml({intro: intro, body: emailBody, outro: outro})
        const mailOptions = {
          from: `${sendersName} <${sendersEmail}@${domain}>`,
          to: receiversEmail,
          subject: subject,
          html: html,
          reply_to: reply_to === undefined ? "no_reply" : reply_to
        }
        const sent = await resend.emails.send(mailOptions)
      if(sent.error !== null) return {status: false, message: 'error sending message', data: null}
      return {status: true, message: 'email sent succesfully', data: sent}
    }catch(e){
      console.log(e.message)
      return {status: false, message: 'error sending message', data: null}
    }
  }
}
