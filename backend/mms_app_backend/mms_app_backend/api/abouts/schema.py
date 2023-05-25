from fastapi_camelcase import CamelModel


class BaseAbout(CamelModel):
    bio: str
    proficiency: str
    previous_programs: list[int]
    previous_roles: list[int]
    available: bool
    program: int
    was_mentor: bool
    years_of_experience: int


class CreateAbout(BaseAbout):
    pass


class ViewAbout(BaseAbout):
    id: int

