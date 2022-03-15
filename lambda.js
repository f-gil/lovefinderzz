let aws = require("aws-sdk");
let ses = new aws.SES({ region: "us-west-2" });
import axios from "axios"


axios.get("https://is53kkmcqe.execute-api.us-east-1.amazonaws.com/prod")
  .then(res => {
    const data = res.data;

  })

exports.handler = async function (data) {
  let params = {
    Destination: {
      ToAddresses: ['email'],
    },
    Message: {
      Body: {
        Text: { Data: corpo_msg },
      },

      Subject: { Data: assunto },
    },
    Source: "noreply.lovefinderzz@gmail.com",
  };
 
  return ses.sendEmail(params).promise()
};