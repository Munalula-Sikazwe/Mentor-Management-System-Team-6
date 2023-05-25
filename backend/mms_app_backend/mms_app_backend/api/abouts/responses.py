from fastapi_camelcase import CamelModel

from .schema import ViewAbout
from ..utils import ResponseModel


class CreateAboutData(CamelModel):
    about: ViewAbout | None


class CreateAboutResponse(ResponseModel):
    data: CreateAboutData = CreateAboutData

