// simulation

import { nanoid as id } from "nanoid";
import Job from "../models/job.model.js";
let jobs = [
  { id: id(), company: "Apple", position: "Front End" },
  { id: id(), company: "Google", position: "Front End" },
  { id: id(), company: "Microsoft", position: "Full Stack" },
];

export const CREATE_JOB = async (req, res, next) => {
  try {
    const { company, position } = req.body;
    if (!company || !position) {
      return res.status(400).json({
        msg: "All Fields are required",
      });
    }
    // submitting data to DB
    const job = await Job.create({ company, position });
    res.status(200).json({
      msg: "JOB CREATED",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};

export const GET_JOB = async (req, res, next) => {
  try {
    const { id: jobID } = req.params;
    const currentJob = jobs.find((job) => {
      return job.id === jobID;
    });
    if (!currentJob) {
      return res.status(400).json({
        msg: "No job found with id :   " + jobID,
      });
    }
    res.status(200).json({
      msg: "SINGLE JOB",
      data: currentJob,
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};

export const GET_JOBS = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "ALL JOBS",
      counts: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};

// DELETE JOB

export const DELETE_JOB = async (req, res, next) => {
  try {
    const { id: jobID } = req.params;

    const toDelete = jobs.find((job) => job.id === jobID);
    if (!toDelete) {
      return res.status(404).json({
        msg: "No job found with id :   " + jobID,
      });
    }
    const newJobs = jobs.filter((job) => job.id !== jobID);
    res.status(200).json({
      msg: " JOB DELETED",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};

// EDIT JOB
export const UPDATE_JOB = async (req, res, next) => {
  try {
    const { id: jobID } = req.params;
    const { company, position } = req.body;
    if (!company || !position) {
      return res.status(404).json({
        msg: "All Fields are required",
      });
    }
    const toEdit = jobs.find((job) => job.id === jobID);
    if (!toEdit) {
      return res.status(404).json({
        msg: "No job found with id :   " + jobID,
      });
    }
    // edit here...
    toEdit.company = company;
    toEdit.position = position;

    res.status(200).json({
      msg: " JOB EDITED",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};
