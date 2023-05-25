from fastapi import APIRouter, Response, status, Depends
from sqlalchemy.orm import Session

from .crud import create_about_crud
from .responses import CreateAboutResponse
from .schema import CreateAbout
from ..account_management.constants import INVALID_USER_PARAMETER
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()
post = APIRouter.post


@post('/users/{user_id}/about', status_code=status.HTTP_201_CREATED, response_model=CreateAboutResponse)
def create_about(about: CreateAbout, user_id: int, response: Response, jwt_token: str = Depends(get_token()),
                 db: Session = Depends(get_db)):
    user = verify_access_token(db, jwt_token)
    about_response = CreateAboutResponse()
    if not user:
        about_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return about_response
    if user.id != user_id:
        response.status_code = status.HTTP_401_UNAUTHORIZED
        user_id.message = INVALID_USER_PARAMETER
        return about_response
    created_about = create_about_crud(db,about)