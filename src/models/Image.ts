import mongoose, { Document } from 'mongoose';

export interface Image extends Document{
    path: string;  
    resolution: string;  
    width: number;  
    height: number;  
    format: string;  
    original_image_id?: mongoose.Types.ObjectId;  
    source_id?: mongoose.Types.ObjectId;  
    details?: {  
        object_type?: string;
        environment?: string;
        material?: string;
        degradation?: {
            level?: string;
            type?: string;
        } 
    };
    augmentation_id?: mongoose.Types.ObjectId;  
    annotations?: {  
        type: string;
        coordinates?: { x: number, y: number}
        label: string;
        notes?: string;
    }[];
    createdAt?: Date;  
}