"use client";

import { useState } from "react";
import { Edit, Mail, Phone, User } from "lucide-react";
import ProfileCardWrapper from "./ProfileCardWrapper";
import ProfileFormField from "./ProfileFormField";
import type { PersonalInfo } from "./profileTypes";

interface PersonalInfoCardProps {
    data: PersonalInfo;
    isEditing: boolean;
    onEdit: () => void;
    onCancel: () => void;
    onSave: (nextPersonalInfo: PersonalInfo) => void;
}

const buttonClassName =
    "rounded-xl px-5 py-3 text-sm font-medium transition sm:px-7 sm:text-base";

interface PersonalInfoFormProps {
    initialData: PersonalInfo;
    onCancel: () => void;
    onSave: (nextPersonalInfo: PersonalInfo) => void;
}

function PersonalInfoForm({
    initialData,
    onCancel,
    onSave,
}: PersonalInfoFormProps) {
    const [formData, setFormData] = useState<PersonalInfo>(initialData);

    return (
        <form
            id="personal-info-form"
            onSubmit={(event) => {
                event.preventDefault();
                onSave(formData);
            }}
            className="space-y-5"
        >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ProfileFormField
                    id="personal-first-name"
                    label="First Name"
                    value={formData.firstName}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            firstName: value,
                        }))
                    }
                    placeholder="Enter first name"
                    className="lg:col-span-1"
                />
                <ProfileFormField
                    id="personal-last-name"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            lastName: value,
                        }))
                    }
                    placeholder="Enter last name"
                    className="lg:col-span-1"
                />
                <ProfileFormField
                    id="personal-email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            email: value,
                        }))
                    }
                    placeholder="Enter email address"
                    showEditIcon
                    className="lg:col-span-2"
                />
                <ProfileFormField
                    id="personal-mobile"
                    label="Mobile Number"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            mobileNumber: value,
                        }))
                    }
                    placeholder="Enter mobile number"
                    showEditIcon
                    className="lg:col-span-2"
                />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm font-medium text-[#8f8590] transition hover:text-heading"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default function PersonalInfoCard({
    data,
    isEditing,
    onEdit,
    onCancel,
    onSave,
}: PersonalInfoCardProps) {
    if (isEditing) {
        return (
            <ProfileCardWrapper
                title="Personal Information"
                description="Update only your personal profile details here."
                action={
                    <button
                        type="submit"
                        form="personal-info-form"
                        className={`bg-primary-gradient text-white shadow-sm hover:shadow-md ${buttonClassName}`}
                    >
                        Save
                    </button>
                }
            >
                <PersonalInfoForm
                    key={`${data.email}-${data.mobileNumber}`}
                    initialData={data}
                    onCancel={onCancel}
                    onSave={onSave}
                />
            </ProfileCardWrapper>
        );
    }

    return (
        <ProfileCardWrapper
            title="Personal Information"
            description="Manage your details with ease."
            action={
                <button
                    type="button"
                    onClick={onEdit}
                    className={`bg-primary-gradient text-white flex items-center gap-1.5 hover:shadow-md sm:gap-2 ${buttonClassName}`}
                >
                    <span>Edit</span>
                    <Edit size={12} className="sm:h-3.5 sm:w-3.5" />
                </button>
            }
        >
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 text-sm sm:grid-cols-2 sm:gap-x-10">
                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <User size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">First Name</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.firstName}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <User size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Last Name</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.lastName}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <Mail size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Email Address</p>
                    </div>
                    <p className="text-heading break-all text-base font-medium sm:text-lg">
                        {data.email}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <Phone size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Mobile Number</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.mobileNumber}
                    </p>
                </div>
            </div>
        </ProfileCardWrapper>
    );
}
