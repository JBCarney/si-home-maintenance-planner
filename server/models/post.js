import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  staffMemberName: { type: 'String', required: true },
  taskTitle: { type: 'String', required: true },
  taskNotes: { type: 'String', required: true },
  taskCompleted: { type: 'Boolean', required: false },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);
