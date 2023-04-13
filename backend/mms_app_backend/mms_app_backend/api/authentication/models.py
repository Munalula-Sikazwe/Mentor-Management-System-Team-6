from sqlalchemy import Boolean, Column, Integer,String
from sqlalchemy_utils import EmailType,StringEncryptedType
#
from ...configs.database_config import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(EmailType, unique=True, index=True)
    hashed_password = Column(StringEncryptedType)
    is_active = Column(Boolean, default=True)
