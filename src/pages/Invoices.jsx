import React from "react";
import SideBar from "../components/SideBar";
import { Breadcrumbs, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Invoices = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <SideBar>
        <div className="m-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>

            <Typography sx={{ color: "text.primary" }}>Invoices</Typography>
          </Breadcrumbs>
        </div>

        <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
          <div>
            <h5 className="text-2xl font-bold">Invoices</h5>
          </div>
          <div>
            <Button variant="contained" startIcon={<AddIcon />} color="info">
              Create Invoices
            </Button>
          </div>
        </div>

        {/* CArd Container*/}
        <div className="px-6 mt-8 flex flex-col gap-4">
          {/* card */}
          <div className=" flex justify-between gap-2 border border-gray-300 rounded-[10px] py-4 px-4 ">
            <div>
              <h5 className="text-[1.2rem] font-bold ">
                Cloud Migration (#INV-001)
              </h5>
              <div className="mt-2 text-gray-500">Amount : $13000</div>
              <div className="bg-red-500 rounded-2xl w-[9rem] text-center text-white mt-2 leading-[1.7rem] ">
                Overdue
              </div>
            </div>
            <div>
              <div className="leading-[.5rem] text-right cursor-pointer ">
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  
                >
                  <MoreVertIcon/>
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem >
                  <Button startIcon = {<RemoveRedEyeIcon/>} color = "inherit">
                  View
                  </Button>
                  </MenuItem>
                  <MenuItem ><Button startIcon = {<EditIcon/>} color = "inherit">
                  Edit
                  </Button></MenuItem>
                  <MenuItem ><Button startIcon = {<DeleteIcon/>} color = "inherit">
                  Delete
                  </Button></MenuItem>
                </Menu>
              </div>

              <div className="mt-6">Due Date: 2024-01-29</div>
            </div>
          </div>

          <div className=" flex justify-between gap-2 border border-gray-300 rounded-[10px] py-4 px-4 ">
            <div>
              <h5 className="text-[1.2rem] font-bold ">
                Cloud Migration (#INV-001)
              </h5>
              <div className="mt-2 text-gray-500">Amount : $13000</div>
              <div className="bg-red-500 rounded-2xl w-[9rem] text-center text-white mt-2 leading-[1.7rem] ">
                Overdue
              </div>
            </div>
            <div>
              <div className="leading-[.5rem] text-right cursor-pointer ">
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>

              <div className="mt-6">Due Date: 2024-01-29</div>
            </div>
          </div>

          <div className=" flex justify-between gap-2 border border-gray-300 rounded-[10px] py-4 px-4 ">
            <div>
              <h5 className="text-[1.2rem] font-bold ">
                Cloud Migration (#INV-001)
              </h5>
              <div className="mt-2 text-gray-500">Amount : $13000</div>
              <div className="bg-red-500 rounded-2xl w-[9rem] text-center text-white mt-2 leading-[1.7rem] ">
                Overdue
              </div>
            </div>
            <div>
              <div className="leading-[.5rem] text-right cursor-pointer ">
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>

              <div className="mt-6">Due Date: 2024-01-29</div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Invoices;
