import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  deskription: {
    type: String,
    require: true,
  },
  comlited: {
    type: Boolean,
    default: false,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId, // цей тип буде id яке автоматично генерує MongoDB
    ref: 'User',
  },
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
