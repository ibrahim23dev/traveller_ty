// src/models/testimonial.model.ts
import { Schema, model, Document } from 'mongoose';
import { ITestimonial } from '../interfaces/testimonial.interface';

export interface TestimonialDocument extends ITestimonial, Document {}

const testimonialSchema = new Schema<TestimonialDocument>(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<TestimonialDocument>('Testimonial', testimonialSchema);
