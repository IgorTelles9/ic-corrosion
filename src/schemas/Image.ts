import mongoose from 'mongoose';
import { Image } from "../models/Image"
const imageSchema = new mongoose.Schema<Image>({
    path: { type: String, required: true },  
    resolution: { type: String },  
    width: { type: Number, required: true },  
    height: { type: Number, required: true },  
    format: { type: String, required: true },  
    original_image_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },  
    source_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Source' },  
    details: {  
        object_type: { type: String },
        environment: { type: String },
        material: { type: String },
        degradation: {
            level: { type: String },
            type: { type: String }
        }
    },
    augmentation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Augmentation' },  
    annotations: [  
        {
            type: { type: String, required: true },
            coordinates: { type: String, required: true },
            label: { type: String, required: true },
            notes: { type: String }
        }
    ],
    createdAt: { type: Date, default: Date.now }  
});

const Image = mongoose.model<Image>('Image', imageSchema);
export default Image;
