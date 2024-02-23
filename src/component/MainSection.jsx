import React, { useEffect, useState } from 'react';
import TopCard from './TopCard';
import StepperComp from './Stepper';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { AdvanceTariffData, tableData } from '../utils/AllData';
import save from "../assets/save.png";
import greentick from "../assets/greentick.png";
import { Box, Button, Modal } from '@mui/material';
import uuid from 'react-uuid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function MainSection() {
    const [selected, setSelected] = useState("Consultation");
    const [ishovered, setIsHovered] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = React.useState(false);
    const [isAllRemarkVisible, setIsAllRemarkvisible] = useState(false);
    const [RemarkData, setRemarkData] = useState([
        {
            id: uuid(),
            name: "Ritesh",
            date: "jun 29, 2023",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            isEditEnable: false,
        },
        {
            id: uuid(),
            name: "Ritesh",
            date: "jun 19, 2023",
            msg: "The Eye Clinic is really good",
            isEditEnable: false,
        },
    ])

    const [currentData, setCurrentData] = useState(null);

    const handleOpen = (id) => {
        setOpen(true);
        const allData = [...RemarkData];
        let obj = allData.find((ele) => ele.id === id);
        setCurrentData(obj);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleDelete = () => {
        const allData = [...RemarkData];
        allData.shift();
        setRemarkData(allData);
    }

    const handleRemarkChange = (e) => {
        let obj = { ...currentData };
        obj.msg = e.target.value;
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        obj.date = formattedDate;
        setCurrentData(obj);
    }

    const handleUpdate = () => {
        let id = currentData.id;
        const allData = [...RemarkData];
        let index = allData.findIndex((ele) => ele.id === id);
        allData[index] = currentData;
        setRemarkData(allData);
        setOpen(false);
    }

    const handleAddRemark = () => {
        if (inputValue.trim() === "") {
            alert("Please write your remark");
            return;
        }

        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        let obj = {
            id: uuid(),
            name: "Ritesh",
            date: formattedDate,
            msg: inputValue,
            isEditEnable: false,
        }
        setRemarkData([obj, ...RemarkData]);
        alert("Remark Added Successfully")
        setInputValue("");
    }

    const handleHover = (id) => {
        const allData = [...RemarkData];
        const obj = allData.find((ele) => ele.id == id);
        obj.isEditEnable = !obj.isEditEnable;
        setRemarkData(allData)
    }

    const handleDeleteById = (id) => {
        const allData = [...RemarkData];
        const filteredData = allData.filter((ele) => ele.id !== id);
        setRemarkData(filteredData);
    }

    return (
        <div className='h-full flex flex-col gap-4 p-5 overflow-scroll '>
            <TopCard />
            <section className='pt-8 boxShadow flex flex-col gap-6 '>
                <StepperComp />

                {/* Advance Tariff section  */}
                <div className='p-4 py-0 flex items-start justify-between'>
                    <div className='w-[95%] flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-lg font-bold lg:font-medium lg:text-3xl text-blue-500'>Advance tariff</h1>
                        <div className="flex pb-0 w-full items-center justify-center overflow-x-scroll pl-28 lg:pl-0 sm:pl-0 lg:pb-2 sm:px-0 lg:px-0">
                            {
                                AdvanceTariffData.map((item, i) => {
                                    return (
                                        <p onClick={() => setSelected(item)}
                                            className={'text-start lg:text-center text-xs lg:text-lg lg:px-6 cursor-pointer px-1 sm:px-3 ' +
                                                (i === AdvanceTariffData.length - 1 ? "border-r-2 " : "")
                                                +
                                                (selected === item ?
                                                    "bg-blue-600 border-none  py-[0.5rem] text-white font-semibold"
                                                    :
                                                    "py-2 border-2 border-blue-500 border-r-0"
                                                )
                                            }
                                        >
                                            {item}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <p className="border border-blue-400 rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mt-1 lg:mt-3">
                        <MoreVertOutlinedIcon sx={{ color: 'blue' }} />
                    </p>

                </div>

                {/* Main Table  */}
                <div className='p-4 py-0 overflow-x-scroll'>
                    <table className="table w-[75.5rem]">
                        <thead >
                            <tr>
                                <th className="lg:p-4 p-1 lg:px-1 pb-0 w-fit border sm:space-y-2 bg-[#525659] border-white text-white">
                                    <p className='text-xs sm:text-sm'>S. No.</p>
                                    <input type="text" className="hidden sm:block w-[92%] text-gray-700 rounded-md border border-gray-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search" />
                                </th>
                                <th className="lg:p-4 p-1 lg:px-1 pb-0 w-fit border sm:space-y-2 bg-[#525659] border-white text-white">
                                    <p className='w-full text-xs lg:text-[0.8rem]'>CZ Catlog Master Id</p>
                                    <input type="text" className="hidden sm:block w-[96%] text-gray-700 rounded-md border border-gray-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search" />
                                </th>
                                <th className="lg:p-4 p-1 lg:px-1 pb-0 w-fit border sm:space-y-2 bg-[#525659] border-white text-white">
                                    <p className='text-xs lg:text-[0.8rem]'>HCP Catalog Id <br /> (External Id)</p>
                                    <input type="text" className="hidden sm:block w-[96%] text-gray-700 rounded-md border border-gray-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search" />
                                </th>
                                <th className="lg:p-4 p-1 lg:px-1 pb-0 w-fit border sm:space-y-2 bg-[#525659] border-white text-white">
                                    <p className='text-xs lg:text-[0.8rem]'>Item Category</p>
                                    <input type="text" className="hidden sm:block w-[96%] text-gray-700 rounded-md border border-gray-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search" />
                                </th>
                                <th className="lg:p-4 p-1 lg:px-1 pb-0 w-fit border sm:space-y-2 bg-[#525659] border-white text-white">
                                    <p className='text-xs lg:text-[0.8rem]'>Item Title</p>
                                    <input type="text" className="hidden sm:block w-[96%] text-gray-700 rounded-md border border-gray-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search" />
                                </th>
                                <th className="p-4 px-0 pb-0 border bg-[#525659] border-white text-white w-[7rem] lg:w-[14rem]">
                                    <p className='border text-xs lg:text-[1rem] border-white border-r-0 border-l-0 py-4'>
                                        Deluxe/Single Room Ac
                                    </p>
                                    <div className=" text-right flex justify-between px-4">
                                        <h4 className='w-[50%] pb-4 text-xs lg:text-[1rem] text-center border border-gray-200 border-l-0 border-b-0 border-t-0 py-1 pt-3'>Rack Rate</h4>
                                        <h4 className='w-[50%] pb-4 text-xs lg:text-[1rem] text-center py-1 pt-3'>Offered Rate</h4>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.map((item, i) => (
                                <tr key={i} className="border border-gray-200 even:bg-blue-50">
                                    <td className="lg:p-4 p-2 font-semibold opacity-70 text-gray-600 w-[3rem] text-xs lg:text-sm lg:w-[6rem] border-gray-200 border text-center">0{i + 1}</td>
                                    <td className="lg:p-4 p-2 font-semibold opacity-70 text-gray-600 w-[4rem] lg:w-[10rem] text-xs lg:text-sm  border-gray-200 border">{item.czMasterId}</td>
                                    <td className="lg:p-4 p-2 font-semibold opacity-70 text-gray-600 w-[5rem] lg:w-[12rem] text-xs lg:text-sm  border-gray-200 border">{item.hcpId}</td>
                                    <td className="lg:px-4 p-2 font-semibold opacity-70 text-gray-600 border-gray-200 border text-xs lg:text-sm lg:w-[12rem] w-[6rem]">{item.itemCategory}</td>
                                    <td className="lg:p-4 p-2 font-semibold opacity-70 text-gray-600 border-gray-200 border text-xs lg:text-sm w-[6rem] lg:w-[12rem]">{item.itemTitle}</td>
                                    <td className="px-0 font-semibold opacity-70 text-gray-600 flex items-center justify-between">
                                        <h4 className='border-gray-200 text-xs lg:text-[1rem] py-4 text-center border border-l-0 border-t-0 border-b-0 w-[50%]'>{item.rackRate}</h4>
                                        <h4 className='w-[50%] py-4 text-xs lg:text-[1rem] text-center'>{item.offeredRate}</h4>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='p-4 py-0 flex items-center justify-center'>
                    <table className="table w-[90%] border border-gray-200">
                        <thead>
                            <tr className='border bg-[#525659] text-white'>
                                <th className='border text-xs lg:text-[1rem] border-gray-200 py-3'>Document Type</th>
                                <th className='border text-xs lg:text-[1rem] border-gray-200 py-3'>Document Description</th>
                                <th className='border text-xs lg:text-[1rem] w-[4rem] border-gray-200 py-3'></th>
                                <th className='border text-xs lg:text-[1rem] border-gray-200 py-3'>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border text-xs px-1 lg:px-0 lg:text-[1rem] border-gray-200 py-1 text-center text-gray-800 font-[500] opacity-60'>proof of rack rate</td>
                                <td className='border border-gray-200 py-1'></td>
                                <td className='border border-gray-200 py-1'>
                                    <img src={save} alt="" />
                                </td>
                                <td className='border border-gray-200 py-1'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    isAllRemarkVisible ?
                        <div>
                            {RemarkData?.length > 0 ?
                                <div className='p-4 relative py-1 flex flex-col gap-2 items-center justify-center'>
                                    {
                                        RemarkData?.map((item) => {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className={"flex w-[100%] gap-2 flex-col pb-4 px-[5%] relative cursor-pointer hover:bg-gray-200 duration-500"}
                                                    onMouseEnter={() => handleHover(item.id)}
                                                    onMouseLeave={() => handleHover(item.id)}
                                                >
                                                    <div className='flex justify-between items-center'>
                                                        <h1 className='flex items-center gap-1 text-xs lg:text-lg font-bold text-gray-700'>
                                                            {item.name}'s Reamarks:
                                                            <img className='w-4 h-4 lg:w-8 lg:h-8' src={greentick} alt="" />
                                                        </h1>
                                                        <h3 className='font-[500] opacity-55 text-xs sm:text-sm'>
                                                            {item.date}
                                                        </h3>
                                                    </div>
                                                    <p className='font-[500] text-xs lg:text-[1rem] text-gray-600 pr-1'>
                                                        {item.msg}
                                                    </p>
                                                    {
                                                        item.isEditEnable && <div className='flex flex-col absolute lg:right-6 -right-3 top-0 gap-3'>
                                                            <button
                                                                className='shadow-3xl'
                                                                onClick={() => handleOpen(item.id)}
                                                            >
                                                                <EditIcon sx={{ color: "blue" }} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteById(item.id)}
                                                            >
                                                                <DeleteForeverOutlinedIcon sx={{ color: "blue" }} />
                                                            </button>
                                                        </div>
                                                    }

                                                </div>
                                            )
                                        })
                                    }
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="parent-modal-title"
                                        aria-describedby="parent-modal-description"
                                    >
                                        <Box
                                            sx={{
                                                ...style,
                                                width: '75%',
                                                height: 'fit',
                                                padding: 4,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '2rem',
                                                border: 'none'
                                            }}
                                        >
                                            <h2 className='font-bold text-sm lg:text-2xl' id="parent-modal-title">Update Your Remark </h2>
                                            {
                                                currentData &&
                                                <textarea
                                                    className='border text-xs lg:text-lg h-48 border-gray-400 outline-none p-2'
                                                    value={currentData.msg}
                                                    onChange={(e) => handleRemarkChange(e)}
                                                >
                                                    {currentData.msg}
                                                </textarea>
                                            }
                                            <Button
                                                variant="contained"
                                                color="success"
                                                sx={{
                                                    // width: '12rem',
                                                    fontWeight: "600"
                                                }}
                                                className=' lg:w-[12rem]'
                                                onClick={() => handleUpdate()}
                                            >
                                                UPDATE
                                            </Button>
                                        </Box>
                                    </Modal>

                                </div>
                                : null}
                        </div>
                        :
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className='p-4 relative py-1 flex flex-col duration-500 hover:bg-gray-200 gap-2 items-center justify-center'>
                            {
                                RemarkData.length > 0 ?
                                    <div
                                        className="flex w-[90%] gap-2 flex-col pb-4 px-2  cursor-pointer"
                                    >
                                        <div className='flex justify-between items-center'>
                                            <h1 className='flex items-center gap-1 text-xs sm:text-sm lg:text-lg font-bold text-gray-700'>
                                                {RemarkData[0]?.name}'s Reamarks:
                                                <img className='w-4 h-4 lg:w-8 lg:h-8' src={greentick} alt="" />
                                            </h1>
                                            <h3 className='font-[500] opacity-55 text-xs sm:text-sm'>{RemarkData[0]?.date}</h3>
                                        </div>
                                        <p className='font-[500] text-xs lg:text-[1rem] text-gray-600 pr-1'>{RemarkData[0]?.msg}</p>
                                    </div>
                                    :
                                    null
                            }


                            {
                                ishovered &&
                                <div className='flex flex-col absolute right-2 lg:right-8 top-3 gap-3'>
                                    <button
                                        onClick={() => handleOpen(RemarkData[0]?.id)}
                                        className='shadow-3xl'>
                                        <EditIcon sx={{ color: "blue" }} />
                                    </button>
                                    <button
                                        onClick={handleDelete}>
                                        <DeleteForeverOutlinedIcon sx={{ color: "blue" }} />
                                    </button>
                                </div>
                            }

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box
                                    sx={{
                                        ...style,
                                        width: '75%',
                                        height: 'fit',
                                        padding: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        border: 'none'
                                    }}
                                >
                                    <h2 className='font-bold text-sm lg:text-2xl' id="parent-modal-title">Update Your Remark </h2>
                                    {
                                        currentData &&
                                        <textarea
                                            className='border text-xs lg:text-lg h-48 border-gray-400 outline-none p-2'
                                            value={currentData.msg}
                                            onChange={(e) => handleRemarkChange(e)}
                                        >
                                            {currentData.msg}
                                        </textarea>
                                    }
                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{
                                            // width: '12rem',
                                            fontWeight: "600"
                                        }}
                                        className=' lg:w-[12rem]'
                                        onClick={() => handleUpdate()}
                                    >
                                        UPDATE
                                    </Button>
                                </Box>
                            </Modal>


                        </div>
                }



                {
                    RemarkData.length > 0 ?
                        <div className='self-center w-[90%] flex justify-end'>
                            <button
                                className='text-xs lg:text-sm text-[1rem] text-blue-600 self-end pr-1 font-bold active:text-blue-800 '
                                onClick={() => setIsAllRemarkvisible(!isAllRemarkVisible)}
                            >
                                {isAllRemarkVisible ? "VIEW LESS REMARK" : "VIEW ALL REMARKS"}
                            </button>
                        </div>
                        : null
                }


                <div className='px-4 py-4 flex flex-col gap-2 boxShadowOne'>
                    <p className='text-sm lg:text-lg font-bold opacity-60 px-1'>Enter Your Remarks:</p>
                    <div className='flex items-center justify-between'>
                        <textarea
                            type="text"
                            value={inputValue}
                            onChange={(e) => handleInput(e)}
                            placeholder='Enter your remarks here'
                            className='px-2 py-1 text-sm lg:text-lg outline-none font-semibold border border-gray-400 rounded-lg h-16 w-[65%] lg:w-[40%]'
                        />


                        <div className='flex gap-2 mr-0 lg:mr-16'>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    fontWeight: "600",
                                }}
                                className='w-[5rem] lg:w-[12rem] lg:text-[1rem] text-sm'
                                onClick={handleAddRemark}
                            >
                                SEND
                            </Button>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default MainSection
