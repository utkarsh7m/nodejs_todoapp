import ErrorHandler from "../middleWare/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description, user: req.user });
    res.status(201).json({
      success: true,
      message: "New task created successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getMyTask = async (req, res) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.iscompleted = !task.iscompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "task updated",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Invalid Id", 404));
    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "task deleted",
    });
  } catch (error) {
    next(error);
  }
};
