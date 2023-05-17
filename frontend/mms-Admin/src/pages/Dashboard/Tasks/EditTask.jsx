import React, { useState } from 'react';
import './Tasks.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter, BsPlusCircle } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { SpinnerCircular } from 'spinners-react';
import { RemoveIcon, UserAvatar } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import UpdateTask from '../../../components/Modals/UpdateTask';
import InputField from '../../../components/InputField';
import FormikForm from '../../../components/FormikForm/FormikForm';
import { tasks } from '../../../services/api';
import { editTaskFailure,
  editTaskStart,
  editTaskSuccess } from '../../../redux/features/taskSlice';

function EditTask() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);
  const [mentorsOpen, setmentors] = useState(true);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  const userToken = userInfo.data.access_token;

  const { isEditing, clickedTask } = useSelector((state) => state.tasks);

  const initialValues = {
    title: '',
    description: '',
    mentors: [],
    mentorManagers: [],
  };

  const validate = Yup.object({
    title: Yup.string().max(
      32,
      'The title must contain a maximum of 32 characters',
    ),
    description: Yup.string(),
  });

  const search = () => {
    setChecked(true);
  };

  const editTask = async (values) => {
    dispatch(editTaskStart());
    // console.log(values);
    try {
      await tasks.patch(
        `/tasks/${clickedTask.id}`,
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(openModal(<UpdateTask />));
      dispatch(editTaskSuccess());
      // console.log(newTask);
      // setMessage(changeUserPasswordRequest.data.message);
    } catch (err) {
      if (err) {
        dispatch(editTaskFailure());
        // console.log();
        // setMessage(err.response.data.message);
      }
    }
  };
  const submit = async (values) => {
    editTask(values);
  };
  return (
    <div className="mx-10 pb-[50px] h-full">
      <div className="h-full">
        <h1 className="font-[600] tasksH grow flex-basis-1 w-full">
          Edit Task
        </h1>
        <div className="max-lg:flex-col-reverse flex grow flex-row max-lg:mt-5 h-full">
          <FormikForm
            initialValues={initialValues}
            validationSchema={validate}
            submit={submit}
            styling="grow h-full overflow-y-auto scroll pr-[10px]"
          >
            <p className="font-black text-[16px] font-[600] mt-5">Title</p>
            <InputField
              tag="input"
              type="text"
              name="title"
              placeholder={clickedTask.title}
              styling="my-2"
              inputStyle="placeholder:text-black6 py-3 pl-3 pr-3 "
            />
            <p className="text-gray-400 text-sm">
              The title must contain a maximum of 32 characters
            </p>

            <p className="font-black text-[16px] font-[600] mt-5">Details</p>
            <InputField
              tag="textarea"
              name="description"
              placeholder={clickedTask.description}
              styling="mt-2 mb-6"
              inputStyle="placeholder:text-black6 py-3 pl-3 pr-3"
            />
            {/* start mentors */}
            <div className="flex md:flex-row flex-col">
              <div className="basis-1/1 md:basis-1/2 bg-pri11 mb-2 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1">
                    Add Mentor Manager
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => setmentors(false)}
                    onKeyDown={() => setmentors(false)}
                    role="button"
                    tabIndex={0}
                  >
                    <p className="mr-3">10 Selected </p>
                    <RemoveIcon styling="ml-2 object-contain cursor-pointer" />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setmentors(true)}
                    onKeyDown={() => setmentors(false)}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>

              <div className="basis-1/1 md:basis-1/2 bg-pri11 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1 ">
                    Add Mentor
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => setmentors(false)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => setmentors(false)}
                  >
                    <p className="mr-3">10 Selected </p>
                    <RemoveIcon styling="pl-3 object-contain cursor-pointer" />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setmentors(true)}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            {/* end mentors */}
            <section className="flex items-center justify-between mt-[30px]">
              <button
                type="submit"
                className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
              >
                {isEditing ? (
                  <SpinnerCircular
                    color="#F7FEFF"
                    className="mr-2"
                    thickness={250}
                    size={20}
                  />
                ) : (
                  'Update Task'
                )}
              </button>
            </section>
          </FormikForm>
          {/* start tasks */}
          <div
            className={`${
              mentorsOpen ? '' : 'hidden'
            } overflow-y-auto scroll pr-[10px] w-[62%]`}
          >
            <div className="tasksHeader flex flex-row justify-end ">
              {checked ? (
                <div className="flex flex-row-reverse">
                  <input
                    type="text"
                    className="focus:outline-none bg-transparent pl-4 w-full"
                    placeholder="Search Mentors"
                    onKeyDown={search}
                  />
                  <BiArrowBack
                    className="text-teal-700 text-2xl mx-2 cursor-pointer"
                    onClick={() => setChecked(false)}
                  />
                </div>
              ) : (
                <>
                  <RiSearchLine
                    className="text-teal-700 text-xl mx-2 cursor-pointer"
                    onClick={search}
                  />
                  <BsFilter
                    className={`text-teal-700 text-2xl mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setSort(!sort)}
                  />

                  <AiOutlineClose
                    className={`text-teal-700 text-md mt-1 mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setmentors(false)}
                  />
                </>
              )}
            </div>
            <div className="taskContainer me-5">
              {Array.from(Array(10)).map((i) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  className="task flex m-3 p-3 rounded-md items-center border-2
              border-grey-400 w-full cursor-pointer flex-row max-lg:flex-col
               max-lg:justify-self-start max-lg:justify-items-start"
                  key={i}
                >
                  <UserAvatar className="max-lg:mb-0 mb-2" />

                  <div className="rightTask ms-8 grow max-lg:w-full max-lg:mb-3">
                    <h3 className="font-semibold">Alison Davis</h3>
                    <div className="taskdate flex">
                      <p className="text-xs text-gray-600 font-light align-middle">
                        Program Assistant, Andela, She/her
                      </p>
                    </div>
                    <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1">
                      PROGRAM ASST.
                    </span>
                    <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1">
                      PROGRAM ASST.
                    </span>
                  </div>
                  <BsPlusCircle className="text-teal-700 text-2xl mx-2 cursor-pointer" />
                </div>
              ))}
            </div>
            {/* end tasks */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;