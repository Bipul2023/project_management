import React, { useState } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Breadcrumbs,
  Grid2,
  IconButton,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseBtn from "../components/Buttons/CloseBtn";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Project = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  // Delete modal open and close
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  // View Modal open and close
  const [viewOpen, setViewOpen] = useState(false);
  const handleViewOpen = () => {
    setViewOpen(true);
  };
  const handleViewClose = () => {
    setViewOpen(false);
  };

  // Tab panel in view modal
  const [activeTab, setActiveTab] = useState("Project Details");

  return (
    <div>
      <SideBar>
        <div className="mx-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={'/'}>
              Dashboard
            </Link>

            <Typography sx={{ color: "text.primary" }}>Projects</Typography>
          </Breadcrumbs>
        </div>

        <div className="flex flex-row flex-wrap place-content-between mt-6 px-6 gap-x-2 gap-y-4">
          <div>
            <h4 className="text-2xl font-bold">Projects</h4>
          </div>
          <div>
            <PrimaryBtn onClick={handleOpen} className={" "}>
              <AddIcon /> Add Project
            </PrimaryBtn>
          </div>
        </div>

        <div className="m-6 mt-8 ">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, commodi.
                  </TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>10-5-2025</TableCell>
                  <TableCell>10-8-2025</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleViewOpen}
                      aria-label="edit"
                      color="success"
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleEditOpen}
                      aria-label="edit"
                      color="warning"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleDeleteOpen}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/*Add Project MODAL */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem]  no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Add Project</h5>
                <form
                  action=""
                  className=" mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectTitle">Title</label>
                      <input
                        type="text"
                        required
                        placeholder="Project Title"
                        name="projectTitle"
                        id="projectTitle"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectStatus">Project Status</label>
                      <select required name="projectStatus" id="projectStatus">
                        <option value="">Select Status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Paused">Paused</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectStartDate">Start Date</label>
                      <input
                        type="date"
                        placeholder="Start Date"
                        name="projectStartDate"
                        id="projectStartDate"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectEndtDate">End Date</label>
                      <input
                        type="date"
                        placeholder="End Date"
                        name="projectEndtDate"
                        id="projectEndDate"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectAssignTo">Assign To</label>
                      <select name="projectAssignTo" id="projectAssignTo">
                        <option value="">Select </option>
                        <option value="">Name 1</option>
                        <option value="">Name 2</option>
                        <option value="">Name 3</option>
                        <option value="">Name 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectClient">Client</label>
                      <select name="projectClient" id="projectClient">
                        <option value="">Select Client</option>
                        <option value="">Client 1</option>
                        <option value="">Client 2</option>
                        <option value="">Client 3</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="projectBudget">Budget</label>
                      <input
                        type="number"
                        placeholder="Project Budget"
                        name="projectBudget"
                        id="projectBudget"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <div className="w-full inputData">
                    <label htmlFor="projectDescription">Description</label>
                    <textarea
                      rows={4}
                      placeholder="Project Description"
                      name="projectDescription"
                      id="projectDescription"
                    ></textarea>
                    <small></small>
                  </div>

                  <div className="flex flex-row flex-wrap gap-4 justify-end">
                    {/* <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button> */}
                    <CloseBtn onClick={handleClose} className={""}>
                      Close
                    </CloseBtn>
                    <PrimaryBtn type={"submit"} className={""}>
                      Submit
                    </PrimaryBtn>
                  </div>
                </form>
              </div>
            </div>
          </Box>
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Modal>

        {/* Edit Project Modal */}

        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem] no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Update Project</h5>
                <form
                  action=""
                  className="addProject mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectTitle">Title</label>
                      <input
                        type="text"
                        required
                        placeholder="Project Title"
                        name="projectTitle"
                        id="projectTitle"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectStatus">Project Status</label>
                      <select required name="projectStatus" id="projectStatus">
                        <option value="">Select Status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Paused">Paused</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectStartDate">Start Date</label>
                      <input
                        type="date"
                        placeholder="Start Date"
                        name="projectStartDate"
                        id="projectStartDate"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectEndtDate">End Date</label>
                      <input
                        type="date"
                        placeholder="End Date"
                        name="projectEndtDate"
                        id="projectEndDate"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectAssignTo">Assign To</label>
                      <select name="projectAssignTo" id="projectAssignTo">
                        <option value="">Select </option>
                        <option value="">Name 1</option>
                        <option value="">Name 2</option>
                        <option value="">Name 3</option>
                        <option value="">Name 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="projectClient">Client</label>
                      <select name="projectClient" id="projectClient">
                        <option value="">Select Client</option>
                        <option value="">Client 1</option>
                        <option value="">Client 2</option>
                        <option value="">Client 3</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="projectBudget">Budget</label>
                      <input
                        type="number"
                        placeholder="Project Budget"
                        name="projectBudget"
                        id="projectBudget"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <div className="w-full inputData">
                    <label htmlFor="projectDescription">Description</label>
                    <textarea
                      rows={4}
                      placeholder="Project Description"
                      name="projectDescription"
                      id="projectDescription"
                    ></textarea>
                    <small></small>
                  </div>

                  <div className="flex flex-row flex-wrap gap-4 justify-end">
                    {/* <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button> */}
                    <CloseBtn
                      onClick={handleEditClose}
                      className={
                        "bg-gray-100 hover:bg-gray-200 border border-gray-200 text-black"
                      }
                    >
                      Close
                    </CloseBtn>
                    <PrimaryBtn
                      type={"submit"}
                      className={
                        "bg-[var(--primary1)] hover:bg-[var(--primary2)] text-white"
                      }
                    >
                      Submit
                    </PrimaryBtn>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Modal>

        {/* Delete Modal*/}

        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem] ">
            <div className="w-full py-3 ">
              <div>Do you wand to delete ?</div>
              <div className="flex mt-8 justify-end gap-4">
                <CloseBtn
                  onClick={handleDeleteClose}
                  className={"border border-gray"}
                >
                  Close
                </CloseBtn>
                <DeleteBtn>Delete</DeleteBtn>
              </div>
            </div>
          </Box>
        </Modal>

        {/* View Modal */}
        <Modal
          open={viewOpen}
          onClose={handleViewClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="w-full  ">
              <div>
                <div className="  mx-auto ">
                  {/* Tab Navigation */}
                  <div className="flex flex-row justify-between items-start ">
                    <div className="flex max-w-md w-full gap-2">
                      {["Project Details", "Client Details", "Tasks"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`flex-1 mb-4 cursor-pointer bg-gray-300 py-2 text-center  capitalize border-b-2  
            ${activeTab === tab ? " border-[var(--primary1)] text-[var(--primary1)] font-bold" : "text-gray-800 border-transparent font-semibold"}`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>

                    <div className="w-[2rem] text-black">
                      <IconButton onClick={handleViewClose}>
                        <CancelIcon className="text-gray-800" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="h-[20rem] overflow-scroll no-scrollbar">
                    <div className="p- h-fit">
                      {activeTab === "Project Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Title : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Project Name</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Status : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Pending</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Start Date : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>10-05-2025</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">End Date : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>10-05-2025</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Assigned To : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Client : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Budget : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>10202</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Description : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis id totam
                                perspiciatis necessitatibus voluptate pariatur
                                dicta voluptatem modi eos assumenda ut itaque
                                eligendi laboriosam alias minima impedit
                                debitis, tempore quo explicabo. Perferendis,
                                vero sed laborum unde porro eum animi quos qui
                                amet maiores perspiciatis autem ad consequuntur
                                nam molestiae doloribus dignissimos ab, sapiente
                                iusto corporis? Delectus tenetur cupiditate
                                repellendus debitis deleniti assumenda autem
                                sapiente sequi, soluta a nulla vero, vel, ab
                                libero? Unde quidem necessitatibus quos ducimus
                                atque voluptas est inventore accusamus
                                voluptatem dolorum assumenda magni repellat,
                                aliquid sequi, doloribus cum, quaerat obcaecati
                                incidunt neque molestiae excepturi distinctio
                                nulla ea!
                              </div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                      {activeTab === "Client Details" && (
                        <div className="space-y-2">
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Client Name : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>name</div>
                          </Grid2>
                        </Grid2>
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Client Email : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>example@email.com</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Client Number : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>1093735</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Client Address : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Lorem ipsum </div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Country :  </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>India</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Company Name : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>Lorem ipsum</div>
                          </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Company Email : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>company@gmail.com</div>
                          </Grid2>
                        </Grid2>
                        <Grid2 container spacing={2} className="">
                          <Grid2 size={4} className="font-bold space-y-2">
                            <div className="">Comapny Contact : </div>
                          </Grid2>
                          <Grid2 size={8} className="space-y-2">
                            <div>
                              837355738
                            </div>
                          </Grid2>
                        </Grid2>
                      </div>
                      )}
                      {activeTab === "Tasks" && (
                        <div className="">
                          <Grid2 container >
                            <Grid2 size={6} className="">
                              
                            </Grid2>

                            <Grid2 size={6}>

                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 justify-end gap-4">
                <CloseBtn
                  onClick={handleViewClose}
                  className={"border border-gray"}
                >
                  Close
                </CloseBtn>
              </div>
            </div>
          </Box>
        </Modal>
      </SideBar>
    </div>
  );
};

export default Project;
