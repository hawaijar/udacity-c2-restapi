export const config = {
  "dev": {
    "username": "udagramksmdev",//process.env.POSTGRESS_USERNAME,
    "password": "udagramksmdev", //process.env.POSTGRESS_PASSWORD,
    "database": "udagramksmdev", //process.env.POSTGRESS_DATABASE,
    "host": "udagramksmdev.ceykxx9vnh8q.ap-south-1.rds.amazonaws.com",//process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_reigion": "ap-south-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ksm-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
