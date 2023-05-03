from fastapi_camelcase import CamelModel
from pydantic import BaseModel
from typing import List

class TaskMentorReport(BaseModel):
    name: str
    email: str

class TaskReport(BaseModel):
    name: str
    count: int
    mentors: List[TaskMentorReport] = []

class BaseTask(CamelModel):
    title :str
    description : str
    mentors : list[int]
    mentor_managers : list[int]



class CreateTask(BaseTask):
    pass


class UpdateTask(CamelModel):
    title : str | None
    description : str | None
    mentors : list | None
    mentor_managers : list | None


class GetTask(BaseTask):
    id : int

    class Config:
        orm_mode = True

class TaskReportResponse(BaseModel):
    completed: List[TaskReport] = []
    incomplete: List[TaskReport] = []
    reopened: List[TaskReport] = []
    opened: List[TaskReport] = []