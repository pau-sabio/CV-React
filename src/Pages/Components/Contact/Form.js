import { Card, Input, Spacer, Textarea, Button, Text, Grid } from "@nextui-org/react";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result =() => {
  return(
    <p>Your message has been sent!</p>
  )
}
const title = "Contact Form";

export const Form = () => {
    const form = useRef();

    const [result, showResult ] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w1ywuhs', 'template_sjq1x0c', form.current, 'BjK6UIXoFoytTKhqu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
        );
        e.target.reset();
        showResult(true);
    };
  
    return (
      <Card isHoverable  css={{ p: "$6" }}>
      <Grid>
      <Text css={{marginBottom: "20px"}} h3>{title}</Text>

        <form ref={form} onSubmit={sendEmail}>

          <Input 
          clearable 
          label="Name" 
          placeholder="Jhon Brown" 
          type="text" 
          name="user_name" 
          size="lg" 
          width="100%" />
          
          <Spacer y={1} />

          <Input 
          clearable 
          label="Email" 
          placeholder="jhonbrown@gmail.com" 
          type="email" 
          name="user_email"
          size="lg" 
          width="100%"  />

          <Spacer y={1} />

          <Textarea
          label="Write your thoughts"
          placeholder="Enter your amazing ideas."
          name="message"
          size="lg" 
          width="100%" 
          />

          <Spacer y={1} />

          <Button 
          shadow color="primary" 
          auto 
          type="submit" 
          value="Send" >
          Send!
          </Button>
          {
            result ? <Result/> : null
          }
          
        </form>
        </Grid>
      </Card>
    );
  };