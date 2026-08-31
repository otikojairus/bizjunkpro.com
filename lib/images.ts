import { SeoPage, serviceGroup } from "./pages";

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=84`;

export const HOME_IMAGE = image("photo-1586528116311-ad8dd3c8310d");
export const SERVICES_IMAGE = image("photo-1566576912321-d58ddd7a6088");

const GROUP_IMAGES: Record<string, string> = {
  "Junk & Waste Removal": image("photo-1532996122724-e3c354a0b15b"),
  "Commercial Cleanouts": image("photo-1497366754035-f200968a6e72"),
  "Construction Debris": image("photo-1503387762-592deb58ef4e"),
  "Dumpster Rental": image("photo-1541888946425-d81bb19240f5"),
  "Recycling & Recovery": image("photo-1530587191325-3db32d826c18"),
  "Regulated Waste": image("photo-1532187863486-abf9dbad1b69"),
};

export function imageFor(page: SeoPage) {
  return GROUP_IMAGES[serviceGroup(page)] || HOME_IMAGE;
}

export function secondaryImageFor(page: SeoPage) {
  return serviceGroup(page) === "Commercial Cleanouts"
    ? image("photo-1497366811353-6870744d04b2")
    : SERVICES_IMAGE;
}
