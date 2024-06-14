import {LoginType, RegisterType, ResetType, ForgotType, } from '../types/types'
import { z, ZodType } from 'zod'

export const LoginSchema: ZodType<LoginType> = z.object({
    username: z
        .string()
        .min(6, {
            message: 'Username must be at least 6 chars long.',
        })
        .max(255),
    password: z.string().min(6, {
        message: 'Password must be at least 6 chars long.',
    }),
})

export const RegisterSchema: ZodType<RegisterType> = z.object({
    username: z
        .string()
        .min(6, {
            message: 'Username must be at least 6 chars long.',
        })
        .max(255),
    fullname: z.string().min(6, {
        message: 'Name must be at least 6 chars long.',
    }),
    email: z.string().email({
        message: 'Please provide a valid email.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 chars long.',
    }),
})

export const ForgotSchema: ZodType<ForgotType> = z.object({
    email: z.string().email({
        message: 'Please provide a valid email.',
    }),
})

export const ResetSchema: ZodType<ResetType> = z
    .object({
        newPassword: z.string().min(4, {
            message: 'New Password must be at least 4 chars long.',
        }),
        confirmedPassword: z.string().min(4, {
            message: 'Confirmed password must be at least 4 chars long.',
        }),
    })
    .refine((data) => data.newPassword === data.confirmedPassword, {
        message: 'Passwords do not match.',
        path: ['general'],
    })

export const ThreadSchema: ZodType = z.object({
    content: z
        .string()
        .min(1, {
            message: 'thread must not be empty.',
        })
        .max(255, {
            message: 'thread must be less than 255 chars.',
        }),
    image: z.any(),
})

export const UserSchema: ZodType = z.object({
    username: z
        .string()
        .min(4, {
            message: 'Username must be at least 4 chars long.',
        })
        .max(255),
    fullname: z
        .string()
        .min(1, {
            message: 'Name must be at least 4 chars long.',
        }),
    bio: z
        .string()
        .min(1, {
            message: 'Bio must not be empty.',
        }),
    avatar: z.string(),

})