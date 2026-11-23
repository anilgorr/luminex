// Customer testimonials. Add real ones only (with the customer's permission); the block is hidden
// while this list is empty. `city` matches a city page (e.g. "Thimphu", "Siliguri") so it shows there too.
export type Testimonial = {
  quote: string;
  name: string; // first name
  locality: string; // e.g. "Salugara, Siliguri"
  city: string;
  product: string; // e.g. "uPVC sliding windows"
  photo?: string;
};

export const testimonials: Testimonial[] = [];
