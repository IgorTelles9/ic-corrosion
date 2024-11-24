import mongoose, { Schema, Document } from 'mongoose';

interface IImage extends Document {
    path: string;
    resolution: {
        width: number;
        height: number;
    };
    format: string;
    original_image_id?: string;
    source_url: string;
    details: {
        object_type: string;
        environment: string;
        material?: string;
    };
    degradation: {
        level?: number;
        type?: string;
    };
    augmentation_id?: string;
    notes?: string;
    created_at: Date;
}

const ImageSchema: Schema = new Schema({
    path: { type: String, required: true },
    resolution: {
        width: { type: Number, required: true },
        height: { type: Number, required: true },
    },
    format: { type: String, required: true },
    original_image_id: { type: String },
    source_url: { type: String, required: true },
    details: {
        object_type: { type: String, required: true },
        environment: { type: String, required: true },
        material: { type: String },
    },
    degradation: {
        level: { type: Number, min: 1, max: 7 },
        type: { type: String },
    },
    augmentation_id: { type: String, default: null },
    notes: { type: String },
    created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IImage>('Image', ImageSchema);
