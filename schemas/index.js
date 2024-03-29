import * as z from "zod";
import {
  TierCategories,
  PriceType,
  ToolCategories,
} from "@/data/constantValues";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is Required",
  }),
});

const priceTypeIdSchema = z.enum(PriceType.map((pt) => pt.id));

const itemWordCountValidator = (maxWords) => {
  return (value) => {
    if (value.trim().length === 0) {
      return false;
    }
    const wordCount = value.split(/\s+/).filter(Boolean).length;
    return wordCount <= maxWords;
  };
};

const SingleDealSchema = z
  .object({
    id: z.string().optional(),
    title: z.string().min(1, "Title is required"),
    price: z.string().min(1, "Price is required"),
    originalPrice: z.string().min(1, "originalPrice is required"),
    validity: z.string().min(1, "validity is required"),
    savings: z.string().min(1, "savings is required"),
    link: z.string().url("Must be a valid URL").min(1, "link is required"),
  })
  .optional();

const urlSchema = z
  .string()
  .url({ message: "Must be a valid URL" })
  .min(1, "URL is required");

const toValidFloat = (val) => {
  const parsed = parseFloat(val);
  if (isNaN(parsed)) {
    throw new Error("Invalid number format");
  }
  return parsed;
};

export const ToolSchema = z
  .object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    shortDescription: z
      .string()
      .min(1, "Short Description is required")
      .refine(itemWordCountValidator(15), {
        message: "Short Description must be no more than 15 words",
      }),
    description: z
      .string()
      .min(1, "Description is required")
      .refine(itemWordCountValidator(150), {
        message: "Description must be no more than 150 words",
      }),
    website: z.string().url({
      message: "Valid website URL is required",
    }),

    logoUrl: urlSchema,

    screenshots: z
      .array(urlSchema)
      .min(1, "At least one screenshot is required")
      .max(10, "Cannot upload more than 10 screenshots"),
    primaryScreenshot: urlSchema,

    price: z
      .union([z.string().transform(toValidFloat), z.number().min(0), z.null()])
      .optional(),

    pricingType: priceTypeIdSchema,

    categoryId: z
      .string()
      .min(1, "Category is required.")
      .refine(
        (val) => ToolCategories.map((category) => category.id).includes(val),
        {
          message: "Invalid category selected.",
        }
      ),

    tierId: z
      .string()
      .min(1, "Tier category is required.")
      .refine((val) => TierCategories.map((tier) => tier.id).includes(val), {
        message: "Invalid tier category selected.",
      }),

    keyFeatures: z
      .array(
        z
          .string()
          .min(1, "Key Feature cannot be empty")
          .refine(
            itemWordCountValidator(
              15,
              "Each Key Feature must be no more than 15 words"
            ),
            {
              message: "Each Key Feature must be no more than 15 words",
            }
          )
      )
      .min(3, "At least 3 Key Features are required")
      .max(6, "No more than 6 Key Features are allowed"),

    useCases: z
      .array(
        z
          .string()
          .min(1, "Use Case cannot be empty")
          .refine(
            itemWordCountValidator(
              25,
              "Each Use Case must be no more than 25 words"
            ),
            {
              message: "Each Use Case must be no more than 25 words",
            }
          )
      )
      .min(1, "At least 1 Use Case is required")
      .max(3, "No more than 3 Use Cases are allowed"),

    deals: z
      .array(SingleDealSchema)
      .max(2, "You can only have a maximum of 2 deals")
      .optional(),
  })
  .refine(
    (data) => {
      if (data.pricingType === "amount" && typeof data.price !== "number") {
        return false;
      }
      return true;
    },
    {
      message: "Price amount is required when pricing type is 'amount'",
      path: ["price"],
    }
  );
