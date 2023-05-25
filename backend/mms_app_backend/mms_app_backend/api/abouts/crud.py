from .schema import CreateAbout
from ..account_management.models import About


# class BaseAbout(CamelModel):
#     bio: str
#     proficiency: str
#     previous_programs: list[int]
#     previous_roles: list[int]
#     available: bool
#     program: int
#     was_mentor: bool
#     years_of_experience: int

def create_about_crud(db, about: CreateAbout):
    about = about.to_dict()
    created_about = About(**about)
    db.add(about)
    db.commit()
    db.refesh(about)
    return CreateAbout(bio=created_about.bio, proficiency=created_about.proficiency,
                       previous_programs=created_about.previous_programs, previous_roles=created_about.previous_roles,
                       available=created_about.available, program=created_about.program,
                       was_mentor=created_about.was_mentor, years_of_experience=created_about.experience_years)
