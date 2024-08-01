import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMail(@Body() {domain, sendersName, sendersEmail, reciversName, receiversEmail, subject, intro, emailBody, outro, reply_to}:{domain:string, intro:string, outro:string, sendersName:string, sendersEmail:string, reciversName:string, receiversEmail:string, emailBody:string, subject:string, reply_to: string, html?:string}): Promise<any> {
    try{
      const done = await this.appService.sendMail({domain, sendersName, sendersEmail, reciversName, receiversEmail, subject,intro, emailBody, outro, reply_to});
      return done;
    }catch(e){
      console.log(e.message)
    }
  }
}
