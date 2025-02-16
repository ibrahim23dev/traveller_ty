// src/services/testimonial.service.ts
import Testimonial, { TestimonialDocument } from '../models/testimonial.model';

class TestimonialService {
  async createTestimonial(
    data: Partial<TestimonialDocument>
  ): Promise<TestimonialDocument> {
    const testimonial = new Testimonial(data);
    return testimonial.save();
  }

  async getTestimonials(): Promise<TestimonialDocument[]> {
    return Testimonial.find();
  }

  async getTestimonialById(id: string): Promise<TestimonialDocument | null> {
    return Testimonial.findById(id);
  }

  async updateTestimonial(
    id: string,
    data: Partial<TestimonialDocument>
  ): Promise<TestimonialDocument | null> {
    return Testimonial.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTestimonial(id: string): Promise<void> {
    await Testimonial.findByIdAndDelete(id);
  }
}

export default new TestimonialService();
