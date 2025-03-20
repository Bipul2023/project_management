import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import {
  Breadcrumbs,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal,
  Box,
  Grid2,
  IconButton,
} from "@mui/material";
import { Link } from "react-router";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import CloseBtn from "../components/Buttons/CloseBtn";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Tasks = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
    taskName: `Task ${i + 1}`,
    projectName: `Project ${i + 1}`,
    assignTo: `Member ${i + 1}`,
    priority: `High`,
    status: `In progress`,
    startDate: `Date ${i + 1}`,
    endDate: `End Date ${i + 1}`,
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Create task modal
  const [createTasksOpen, setCreateTasksOpen] = useState(false);

  const handleCreateTasksOpen = () => {
    setCreateTasksOpen(true);
  };
  const handleCreateTasksClose = () => {
    setCreateTasksOpen(false);
  };

  // Edit Task Modal
  const [editTasksOpen, setEditTasksOpen] = useState(false);

  const handleEditTasksOpen = () => {
    setEditTasksOpen(true);
  };
  const handleEditTasksClose = () => {
    setEditTasksOpen(false);
  };

  return (
    <Sidebar>
      <div className="px-6">
        <div className="">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={"/"}>
              Dashboard
            </Link>

            <Typography sx={{ color: "text.primary" }}>Tasks</Typography>
          </Breadcrumbs>
        </div>

        <div className="flex flex-row flex-wrap place-content-between mt-6  gap-x-2 gap-y-4">
          <div>
            <h4 className="text-2xl font-bold">Tasks</h4>
          </div>
          <div>
            <PrimaryBtn onClick={handleCreateTasksOpen}>
              <AddIcon /> Create Tasks
            </PrimaryBtn>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-scroll no-scrollbar w-full">
          <TableContainer
            component={Paper}
            className=" mx-auto shadow-[2px_2px_5px_5px] shadow-gray-400"
            sx={{ minWidth: 1000, mt: 4 }}
            
          >
            <Table>
              <TableHead>
                <TableRow className="bg-gray-200">
                  <TableCell>Task Name</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.taskName}</TableCell>
                      <TableCell>{row.projectName}</TableCell>
                      <TableCell>{row.assignTo}</TableCell>
                      <TableCell>{row.priority}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>
                        <IconButton
                          
                          aria-label="edit"
                          color="success"
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleEditTasksOpen}
                          aria-label="edit"
                          color="warning"
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton
                          
                          aria-label="delete"
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>

        {/* Create Task Modal */}
        <Modal
          open={createTasksOpen}
          onClose={handleCreateTasksClose}
          className="flex justify-center items-center h-screen overflow-y-scroll"
        >
          <Box className=" bg-white rounded-[.5rem] overflow-scroll h-[85vh] md:h-[35rem]  no-scrollbar grid items-center" sx={{ width:"90%", maxWidth: 700 }}>
            <div className="p-6 h-fit">
              <h2 className="text-2xl font-bold">Create Tasks</h2>
              <form action="">
                <div className="mt-4 space-y-2">
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskName">
                        Task Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Task Name"
                        type="text"
                        name="taskName"
                        id="taskName"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskProjectName">
                        Project Name <span className="text-red-600">*</span>
                      </label>
                      <select name="taskProjectName" id="taskProjectName">
                        <option value="">Select Project</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2"> Project 2</option>
                        <option value="Project 3"> Project 3</option>
                        <option value="Project 4"> Project 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskAssignTo">
                        Assign To <span className="text-red-600">*</span>
                      </label>
                      <select name="taskAssignTo" id="taskAssignTo">
                        <option value="">Select Member</option>
                        <option value="Member 1">Member 1</option>
                        <option value="Member 2"> Member 2</option>
                        <option value="Member 3"> Member 3</option>
                        <option value="Member 4"> Member 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskPriority">
                        Priority <span className="text-red-600">*</span>
                      </label>
                      <select name="taskPriority" id="taskPriority">
                        <option value="">Select Priority</option>
                        <option value="Highest">Highest</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Lowest">Lowest</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskStartDate">
                        Start Date <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="taskStartDate"
                        id="taskStartDate"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskEndDate">
                        End Date <span className="text-red-600">*</span>
                      </label>
                      <input type="date" name="taskEndDate" id="taskEndDate" />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <div className="inputData">
                    <label htmlFor="taskDescription">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Task Description"
                      rows={4}
                      name="taskDescription"
                      id="taskDescription"
                    ></textarea>
                    <small></small>
                  </div>

                  <div className="flex gap-3 flex-wrap justify-end">
                    <CloseBtn onClick={handleCreateTasksClose}>Close</CloseBtn>
                    <PrimaryBtn type={"submit"}>Submit</PrimaryBtn>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Modal>


        {/* Edit Task Modal */}
        <Modal
          open={editTasksOpen}
          onClose={handleEditTasksClose}
          className="flex justify-center items-center h-screen overflow-y-scroll"
        >
          <Box className=" bg-white rounded-[.5rem] overflow-scroll h-[85vh] md:h-[35rem]  no-scrollbar grid items-center" sx={{ width:"90%", maxWidth: 700 }}>
            <div className="p-6 h-fit">
              <h2 className="text-2xl font-bold">Edit Tasks</h2>
              <form action="">
                <div className="mt-4 space-y-2">
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskName">
                        Task Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Task Name"
                        type="text"
                        name="taskName"
                        id="taskName"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskProjectName">
                        Project Name <span className="text-red-600">*</span>
                      </label>
                      <select name="taskProjectName" id="taskProjectName">
                        <option value="">Select Project</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2"> Project 2</option>
                        <option value="Project 3"> Project 3</option>
                        <option value="Project 4"> Project 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskAssignTo">
                        Assign To <span className="text-red-600">*</span>
                      </label>
                      <select name="taskAssignTo" id="taskAssignTo">
                        <option value="">Select Member</option>
                        <option value="Member 1">Member 1</option>
                        <option value="Member 2"> Member 2</option>
                        <option value="Member 3"> Member 3</option>
                        <option value="Member 4"> Member 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskPriority">
                        Priority <span className="text-red-600">*</span>
                      </label>
                      <select name="taskPriority" id="taskPriority">
                        <option value="">Select Priority</option>
                        <option value="Highest">Highest</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Lowest">Lowest</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskStartDate">
                        Start Date <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="taskStartDate"
                        id="taskStartDate"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="taskEndDate">
                        End Date <span className="text-red-600">*</span>
                      </label>
                      <input type="date" name="taskEndDate" id="taskEndDate" />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <div className="inputData">
                    <label htmlFor="taskDescription">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Task Description"
                      rows={4}
                      name="taskDescription"
                      id="taskDescription"
                    ></textarea>
                    <small></small>
                  </div>

                  <div className="flex gap-3 flex-wrap justify-end">
                    <CloseBtn onClick={handleEditTasksClose}>Close</CloseBtn>
                    <PrimaryBtn type={"submit"}>Submit</PrimaryBtn>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Modal>


      </div>
    </Sidebar>
  );
};

export default Tasks;
