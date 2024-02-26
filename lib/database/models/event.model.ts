import { Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    organizer: { _id: string, firstName: string, lastName: string },
    title: string;
    description?: string;
    imageUrl?: string;
    category: { _id: string, name: string },
    capacity?: number;
    isFree: boolean;
    price?: string;
    address: string;
    locationName?: string;
    startTime: Date;
    endTime: Date;
    orgId: string;
    visibility: string;
    approved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const EventSchema = new Schema({
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    capacity: { type: Number },
    isFree: { type: Boolean, default: false },
    price: { type: String },
    address: { type: String, required: true },
    locationName: { type: String },
    startTime: { type: Date, required: true, default: Date.now },
    endTime: { type: Date, required: true, default: Date.now },
    orgId: { type: String, required: true },
    visibility: {
        type: String,
        enum : ['university', 'organization', 'friends', 'unlisted'],
        default: 'university',
        required: true
    },
    approved: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now }
})

const Event = models.Event || model('Event', EventSchema);

export default Event;