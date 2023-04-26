from fastapi_mail import ConnectionConfig
from dotenv import load_dotenv
from os import environ
load_dotenv()


mail_config = ConnectionConfig(
    MAIL_USERNAME=environ.get('MAIL_USERNAME'),
    MAIL_PASSWORD=environ.get('MAIL_PASSWORD'),
    MAIL_FROM=environ.get('MAIL_SERVER'),
    MAIL_PORT=environ.get('MAIL_PORT'),
    MAIL_SERVER=environ.get('MAIL_SERVER_NAME'),
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,

)